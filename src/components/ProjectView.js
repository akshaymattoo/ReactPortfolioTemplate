const React = require("react");
const h = React.createElement;

module.exports = function ProjectView({ project }) {
  return h(
    "article",
    { className: "article-page project-page" },
    h("a", { className: "archive-link", href: "/#work" }, "← Selected work"),
    h(
      "header",
      { className: "article-header" },
      h(
        "p",
        { className: "eyebrow" },
        project.status === "in-progress" ? "In progress" : "Family project",
      ),
      h("h1", null, project.title),
      h("p", { className: "project-description" }, project.description),
      project.projectUrl
        ? h(
            "a",
            {
              className: "project-action",
              href: project.projectUrl,
              target: "_blank",
              rel: "noreferrer",
            },
            `${project.cta || "Visit project"} ↗`,
          )
        : null,
    ),
    h("div", {
      className: "article-body",
      dangerouslySetInnerHTML: { __html: project.html },
    }),
    h(
      "footer",
      { className: "article-end" },
      h("a", { className: "text-link", href: "/#work" }, "More projects →"),
    ),
  );
};
