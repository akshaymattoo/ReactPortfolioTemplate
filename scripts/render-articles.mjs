import fs from "node:fs/promises";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server.js";
import { load } from "cheerio";
import SiteFrame from "../src/components/SiteFrame.js";
import ArticleView from "../src/components/ArticleView.js";
import ProjectView from "../src/components/ProjectView.js";
const articles = JSON.parse(
  await fs.readFile("src/data/articles.json", "utf8"),
);
const projects = JSON.parse(await fs.readFile("src/data/projects.json", "utf8"));
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
for (const project of projects) {
  const $ = load(template);
  $('script[src*="/static/js/"]').remove();
  $("noscript").remove();
  $("title").text(`${project.title} — Akshay Mattoo`);
  $('meta[name="description"]').attr("content", project.description);
  $('<link rel="canonical">')
    .attr("href", origin + project.url)
    .appendTo("head");
  for (const [property, content] of Object.entries({
    "og:title": project.title,
    "og:description": project.description,
    "og:type": "website",
    "og:url": origin + project.url,
  }))
    $("<meta>").attr({ property, content }).appendTo("head");
  $("#root").html(
    renderToStaticMarkup(
      React.createElement(
        SiteFrame,
        null,
        React.createElement(ProjectView, { project }),
      ),
    ),
  );
  await fs.mkdir(`build/projects/${project.slug}`, { recursive: true });
  await fs.writeFile(`build/projects/${project.slug}/index.html`, $.html());
}
const urls = [
  "/",
  "/about",
  "/blog",
  ...articles.map((article) => article.url),
  ...projects.map((project) => project.url),
];
await fs.writeFile(
  "build/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${origin + url}</loc></url>`).join("")}</urlset>`,
);
console.log(
  `Generated ${articles.length} article pages, ${projects.length} project pages, and sitemap.xml.`,
);
