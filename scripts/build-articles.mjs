import fs from "node:fs/promises";
import matter from "gray-matter";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";
import { load } from "cheerio";

// Preserve literal HTML examples from articles as text, never executable markup.
function literalHtml() {
  return function walk(node) {
    if (node.type === 'html') node.type = 'text';
    if (node.children) node.children.forEach(walk);
  };
}
const articles = [];
for (const file of (await fs.readdir("content/articles"))
  .filter((f) => f.endsWith(".md"))
  .sort()) {
  const { data, content } = matter(
    await fs.readFile(`content/articles/${file}`, "utf8"),
  );
  for (const key of ["id", "title", "slug", "date", "description"])
    if (!data[key]) throw new Error(`${file}: missing ${key}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.slug))
    throw new Error(`Unsafe slug: ${data.slug}`);
  if (articles.some((a) => a.slug === data.slug || a.id === data.id))
    throw new Error(`Duplicate article: ${file}`);
  const date = new Date(data.date);
  if (Number.isNaN(date.getTime())) throw new Error(`Invalid date: ${file}`);
  const rendered = String(await remark().use(gfm).use(literalHtml).use(html).process(content));
  const createdAt = date.getTime();
  articles.push({
    ...data,
    date: date.toISOString().slice(0, 10),
    createdAt,
    html: rendered,
    url: `/blog/${data.slug}/`,
    readingMinutes: Math.max(1, Math.ceil(content.split(/\s+/).length / 220)),
  });
}
// Resolve links between migrated posts and verify locally hosted image assets.
for (const article of articles) {
  const $ = load(article.html, null, false);
  $("a[href]").each((_, el) => {
    const raw = $(el).attr("href");
    let url;
    try {
      url = new URL(raw, article.original || "https://akshaymattoo.com");
    } catch {
      return;
    }
    if (url.hostname === "medium.com" || url.hostname.endsWith(".medium.com")) {
      const id = url.pathname.match(/(?:-|\/)([a-f0-9]{10,12})$/)?.[1];
      const target = articles.find((post) => post.id === id);
      if (target) $(el).attr("href", target.url);
    }
  });
  for (const image of $("img").toArray()) {
    const src = $(image).attr("src");
    if (!src || !src.startsWith("/articles/") || src.includes(".."))
      throw new Error(`${article.slug}: non-local or missing image ${src}`);
    await fs.access("public" + src);
    $(image).attr({ loading: "lazy", decoding: "async" });
  }
  article.html = $.html();
}
articles.sort((a, b) => b.createdAt - a.createdAt);
await fs.writeFile(
  "src/data/articles.json",
  JSON.stringify(articles, null, 2) + "\n",
);
console.log(`Compiled ${articles.length} Markdown articles with remark.`);
