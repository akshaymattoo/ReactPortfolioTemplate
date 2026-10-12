import fs from "node:fs/promises";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server.js";
import { load } from "cheerio";
import SiteFrame from "../src/components/SiteFrame.js";
import ArticleView from "../src/components/ArticleView.js";
const articles = JSON.parse(
  await fs.readFile("src/data/articles.json", "utf8"),
);
const template = await fs.readFile("build/index.html", "utf8");
const origin = "https://akshaymattoo.com";
for (const article of articles) {
  const $ = load(template);
  // Article pages are complete HTML. They need no client bundle or hydration.
  $('script[src*="/static/js/"]').remove();
  $("noscript").remove();
  $("title").text(`${article.title} — Akshay Mattoo`);
  $('meta[name="description"]').attr("content", article.description);
  $('<link rel="canonical">')
    .attr("href", origin + article.url)
    .appendTo("head");
  for (const [property, content] of Object.entries({
    "og:title": article.title,
    "og:description": article.description,
    "og:type": "article",
    "og:url": origin + article.url,
    "article:published_time": article.date,
  }))
    $("<meta>").attr({ property, content }).appendTo("head");
  $("#root").html(
    renderToStaticMarkup(
      React.createElement(
        SiteFrame,
        { current: "blog" },
        React.createElement(ArticleView, { article }),
      ),
    ),
  );
  await fs.mkdir(`build/blog/${article.slug}`, { recursive: true });
  await fs.writeFile(`build/blog/${article.slug}/index.html`, $.html());
}
const urls = ["/", "/about", "/blog", ...articles.map((a) => a.url)];
await fs.writeFile(
  "build/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${origin + url}</loc></url>`).join("")}</urlset>`,
);
console.log(
  `Generated ${articles.length} complete article pages and sitemap.xml.`,
);
