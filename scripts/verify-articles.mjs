import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { load } from "cheerio";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";
const articles = JSON.parse(
  await fs.readFile("src/data/articles.json", "utf8"),
);
assert(articles.length > 0, "No articles generated");
let imageCount = 0;
for (const article of articles) {
  const page = load(
    await fs.readFile(`build/blog/${article.slug}/index.html`, "utf8"),
  );
  assert.equal(page("h1").length, 1, `${article.slug}: one article heading`);
  assert.equal(page("h1").text(), article.title);
  assert.equal(
    page(".article-body").text(),
    load(article.html, null, false).text(),
    `${article.slug}: complete content must be present without JS`,
  );
  assert.equal(
    page('script[src*="/static/js/"]').length,
    0,
    "Article must not require the React client",
  );
  assert.equal(
    page('link[rel="canonical"]').attr("href"),
    `https://akshaymattoo.com${article.url}`,
  );
  assert(page('link[rel="stylesheet"]').length > 0, "Shared CSS is missing");
  for (const image of page(".article-body img").toArray()) {
    const src = page(image).attr("src");
    assert(src.startsWith("/articles/"), `${article.slug}: remote image`);
    assert((await fs.stat("build" + src)).size > 0, `Missing image: ${src}`);
    imageCount++;
  }
  for (const link of page(".article-body a").toArray()) {
    const href = page(link).attr("href");
    if (href.startsWith("/blog/"))
      assert(
        articles.some((a) => a.url === href),
        `Broken article link: ${href}`,
      );
  }
}
const unsafe = String(
  await remark()
    .use(gfm)
    .use(html)
    .process("<script>alert(1)</script>\n\n[unsafe](javascript:alert%281%29)"),
);
assert(
  !unsafe.includes("<script>") && !unsafe.includes('href="javascript:'),
  "Unsafe Markdown rendered",
);
const fixture = String(
  await remark()
    .use(gfm)
    .use(html)
    .process(
      "## Heading\n\n**Bold** and [link](https://example.com)\n\n```js\nconst n = 1;\n```",
    ),
);
assert(
  fixture.includes("<h2>Heading</h2>") &&
    fixture.includes("<strong>Bold</strong>") &&
    fixture.includes("<pre><code"),
  "Markdown structure was lost",
);
console.log(
  `Verified ${articles.length} complete static article pages, ${imageCount} local images, internal links, canonical tags, shared CSS, and Markdown sanitization.`,
);
