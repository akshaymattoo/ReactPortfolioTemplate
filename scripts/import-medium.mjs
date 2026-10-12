import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { load } from "cheerio";
import TurndownService from "turndown";
import matter from "gray-matter";

// Accept an RSS file or a directory containing HTML files from a Medium export.
const input = process.argv[2];
if (!input)
  throw new Error(
    "Usage: node scripts/import-medium.mjs RSS_FILE_OR_EXPORT_DIRECTORY",
  );
const converter = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
});
converter.addRule("preformatted", {
  filter: "pre",
  replacement: (_, node) => "\n\n```\n" + node.textContent.trim() + "\n```\n\n",
});
converter.addRule("caption", {
  filter: "figcaption",
  replacement: (text) => `\n\n*${text}*\n\n`,
});
const stat = await fs.stat(input);
const items = [];
if (stat.isDirectory()) {
  for (const file of (await fs.readdir(input)).filter((f) =>
    f.endsWith(".html"),
  )) {
    const $ = load(await fs.readFile(path.join(input, file), "utf8"));
    const body = $(".e-content");
    const original =
      $("a.p-canonical").attr("href") ||
      $('link[rel="canonical"]').attr("href");
    const date = $("time.dt-published").attr("datetime");
    if (!body.length || !original || !date) {
      console.warn(`Skipped non-article or incomplete export: ${file}`);
      continue;
    }
    items.push({
      title: $(".p-name").first().text(),
      original,
      date,
      html: body.html(),
    });
  }
} else {
  const $ = load(await fs.readFile(input, "utf8"), { xmlMode: true });
  $("item").each((_, item) => {
    const el = $(item);
    items.push({
      title: el.find("title").text(),
      original: el.find("link").text().split("?")[0],
      date: new Date(el.find("pubDate").text()).toISOString(),
      html: el.find("content\\:encoded").text(),
    });
  });
}
await fs.mkdir("content/articles", { recursive: true });
const report = [];
for (const item of items) {
  const id = item.original.match(/([a-f0-9]{10,12})(?:\?|$)/)?.[1];
  if (!id || !item.html?.trim())
    throw new Error(`Missing content/id: ${item.title}`);
  const slug = new URL(item.original).pathname
    .split("/")
    .pop()
    .replace(/-[a-f0-9]{10,12}$/, "");
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
    throw new Error(`Unsafe article slug: ${slug}`);
  const $ = load(item.html);
  $("script,style").remove();
  $("img").each((_, img) => {
    if (
      $(img).attr("width") === "1" ||
      ($(img).attr("src") || "").includes("medium.com/_/stat")
    )
      $(img).remove();
  });
  const firstHeading = $("h1,h2,h3").first();
  if (firstHeading.text().trim() === item.title.trim()) firstHeading.remove();
  $("pre br").replaceWith("\n");
  $("a[href]").each((_, a) => {
    const href = $(a).attr("href");
    if (href.startsWith("/"))
      $(a).attr("href", new URL(href, item.original).href);
  });
  const dir = `public/articles/${slug}`;
  const failures = [];
  for (const img of $("img").toArray()) {
    const url = $(img).attr("src");
    if (!url || !/^https:\/\//.test(url)) continue;
    const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
    const type = response.headers.get("content-type")?.split(";")[0];
    const ext = {
      "image/jpeg": "jpg",
      "image/png": "png",
      "image/webp": "webp",
      "image/gif": "gif",
      "image/avif": "avif",
    }[type];
    if (!response.ok || !ext) {
      failures.push(url);
      continue;
    }
    await fs.mkdir(dir, { recursive: true });
    const name =
      crypto.createHash("sha256").update(url).digest("hex").slice(0, 12) +
      "." +
      ext;
    await fs.writeFile(
      `${dir}/${name}`,
      Buffer.from(await response.arrayBuffer()),
    );
    $(img).attr("src", `/articles/${slug}/${name}`);
  }
  const markdown = converter.turndown($("body").html());
  const file = `content/articles/${slug}.md`;
  try {
    await fs.access(file);
    console.warn(`Already exists; preserving edits: ${file}`);
    continue;
  } catch {}
  const description = $("p")
    .first()
    .text()
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 180);
  await fs.writeFile(
    file,
    matter.stringify(markdown, {
      id,
      title: item.title,
      slug,
      date: new Date(item.date).toISOString().slice(0, 10),
      description,
      original: item.original,
    }),
  );
  report.push({
    id,
    title: item.title,
    file,
    images: $("img").length,
    remoteImages: failures,
  });
}
console.log(JSON.stringify(report, null, 2));
