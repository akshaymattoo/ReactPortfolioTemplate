# Writing on akshaymattoo.com

Articles live in `content/articles/*.md`. The site uses remark, remark-gfm, and remark-html to turn Markdown into sanitized HTML at build time. `ArticleView.js` is the shared article template, `SiteFrame.js` is the shared navigation/footer, and `src/Editorial.css` styles both the React site and the generated HTML pages.

## Write or edit an article

Create a file like `content/articles/my-next-project.md`:

```markdown
---
id: my-next-project
title: My next project
slug: my-next-project
date: '2026-10-11'
description: A short summary for previews and search engines.
---

Write the introduction here.

## What I learned

Use normal Markdown for links, lists, images, and fenced code blocks.
```

`id` and `slug` must be unique; the slug uses lowercase letters, numbers, and hyphens. Keep the slug stable after publication. `original` is optional and records a migrated article's Medium URL.

Put images in `public/articles/my-next-project/` and link to them as `![Descriptive alt text](/articles/my-next-project/image.png)`. Builds check that images exist locally. Literal HTML examples are displayed as text; scripts and embedded iframes are not executed.

## Build and preview

- `npm start`: compiles Markdown before starting the React development server. After editing Markdown while the server is already running, run `npm run articles:build` to refresh its generated data.
- `npm run build`: compiles Markdown, builds React/CSS, then generates `build/blog/<slug>/index.html` and a sitemap. The article body is in the HTML and works without JavaScript.
- `npm run articles:verify`: checks the generated pages, images, local article links, metadata, and Markdown sanitization after a build.
- Preview the production output with `npm run preview` at http://127.0.0.1:3002. This server serves article files before falling back to React routes. Open a writing link to inspect the actual generated HTML.

`src/data/articles.json` is generated; edit the Markdown files instead. Links between migrated Medium articles are automatically changed to local article URLs during compilation. A footer retains the original source URL.

## Migration scope

26 articles were recovered from the existing site's 23-entry archive plus three additional articles in the current Medium RSS feed. Ten came from the full RSS content; sixteen were recovered from the publicly accessible article pages. Article text, image credits, and source links were preserved. Publication dates came from RSS or the visible Medium publication dates, rather than the old site's draft-creation timestamps. Historical tutorials have not been rewritten or updated to current APIs.

All 26 have local Markdown and local image assets. This covers the discovered archive, not private drafts or any additional posts absent from those sources. Medium comments, applause counts, and memberships are not migrated. External video/CodePen links remain external.

For future exports, unzip the Medium export and run `npm run articles:import -- /absolute/path/to/posts`, then rebuild and verify. The importer also accepts an RSS XML file. Existing Markdown files are preserved rather than overwritten. Review code formatting and any image-download errors after importing.

## Render

Use Node 22, build command `npm ci && npm run build`, and publish directory `build`. Development dependencies must be installed during the build because remark runs at build time. Keep generated article files accessible. Prefer explicit rewrites for `/about`, `/blog`, and `/portfolio` to `/index.html`; do not configure a blanket rewrite that replaces generated `/blog/<slug>/index.html` files. Check that a direct `/blog/<slug>/` request returns the article HTML when deploying. No database or server-side article rendering is required.

The existing Medium copies and their canonical settings have not been modified. Review those separately when publishing the self-hosted versions.
