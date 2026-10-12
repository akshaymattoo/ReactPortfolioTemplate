const React = require("react");
const h = React.createElement;
module.exports = function SiteFrame({ children, current = "" }) {
  return h(
    React.Fragment,
    null,
    h("a", { className: "skip-link", href: "#main" }, "Skip to content"),
    h(
      "div",
      { className: "site-shell" },
      h(
        "header",
        { className: "site-header" },
        h(
          "a",
          { className: "wordmark", href: "/" },
          "Akshay Mattoo",
          h("span", { className: "wordmark-dot" }, "."),
        ),
        h(
          "nav",
          { "aria-label": "Main navigation" },
          h("a", { href: "/#work" }, "Work"),
          h(
            "a",
            {
              href: "/about",
              className: current === "about" ? "active" : undefined,
            },
            "About",
          ),
          h(
            "a",
            {
              href: "/blog",
              className: current === "blog" ? "active" : undefined,
            },
            "Writing",
          ),
        ),
      ),
      h("main", { id: "main" }, children),
      h(
        "footer",
        { className: "site-footer" },
        h(
          "a",
          { className: "footer-invite", href: "mailto:akshaymattoo@gmail.com" },
          "Let’s talk.",
          h("span", { className: "arrow", "aria-hidden": true }, "↗"),
        ),
        h(
          "div",
          { className: "footer-links" },
          h("a", { href: "mailto:akshaymattoo@gmail.com" }, "Email"),
          h("a", { href: "https://github.com/akshaymattoo" }, "GitHub"),
          h(
            "a",
            { href: "https://www.linkedin.com/in/akshaymattoo" },
            "LinkedIn",
          ),
        ),
        h(
          "p",
          { className: "footer-note" },
          "Akshay Mattoo · A small corner of the internet.",
        ),
      ),
    ),
  );
};
