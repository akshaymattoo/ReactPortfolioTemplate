const React = require("react");
const h = React.createElement;
module.exports = function ArticleView({ article }) {
  return h(
    "article",
    { className: "article-page" },
    h("a", { className: "archive-link", href: "/blog" }, "← All writing"),
    h(
      "header",
      { className: "article-header" },
      h("p", { className: "eyebrow" }, "Notes & reflections"),
      h("h1", null, article.title),
      h(
        "p",
        { className: "article-meta" },
        "Akshay Mattoo · ",
        h(
          "time",
          { dateTime: article.date },
          new Date(article.createdAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            timeZone: "UTC",
          }),
        ),
        ` · ${article.readingMinutes} min read`,
      ),
    ),
    h("div", {
      className: "article-body",
      dangerouslySetInnerHTML: { __html: article.html },
    }),
    h(
      "footer",
      { className: "article-end" },
      article.original
        ? h(
            "p",
            null,
            "Originally published on ",
            h("a", { href: article.original }, "Medium"),
            ".",
          )
        : null,
      h("a", { className: "text-link", href: "/blog" }, "More writing →"),
    ),
  );
};
