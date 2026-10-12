import React, { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import "./Editorial.css";
import localArticles from "./data/articles.json";
import localProjects from "./data/projects.json";
import SiteFrame from "./components/SiteFrame.js";
import ArticleView from "./components/ArticleView.js";
import ProjectView from "./components/ProjectView.js";

const posts = [...localArticles].sort((a, b) => b.createdAt - a.createdAt);
const article = (id) => posts.find((post) => post.id === id);
const featuredProjects = localProjects.filter((project) => project.featured);
function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}
function StoryLink({ id, children }) {
  return (
    <a className="text-link" href={article(id).url}>
      {children}
      <Arrow />
    </a>
  );
}
function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="section-heading">
        <h2 className="eyebrow" id="work-title">
          Selected work
        </h2>
        <span className="small-note">Ideas put into practice</span>
      </div>
      <div className="featured-project-grid">
        {featuredProjects.map((project, index) => (
          <article className="featured-project" key={project.id}>
            <p className="project-label">
              0{index + 1} / Featured family project
            </p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link className="text-link" to={project.url}>
              Read the story <Arrow />
            </Link>
          </article>
        ))}
      </div>
      <div className="other-projects">
        <div className="section-heading">
          <h3 className="eyebrow">Other projects</h3>
          <span className="small-note">Experiments at different stages</span>
        </div>
        <div className="other-project-grid">
          <article className="project compact-project">
            <p className="project-label status-label">In progress</p>
            <h3>Fitness app</h3>
            <p>Helping busy people find a practical way to work up a sweat.</p>
            <Link className="text-link" to="/projects/fitness-app/">
              Follow the build <Arrow />
            </Link>
          </article>
          <article className="project compact-project">
            <p className="project-label">Startup experiment</p>
            <h3>Karyaa</h3>
            <p>A focused daily task tracker built around doing less, better.</p>
            <StoryLink id="246f2cac2ad">Read the story</StoryLink>
          </article>
          <article className="project compact-project">
            <p className="project-label">Developer tool</p>
            <h3>VsCodeSetup</h3>
            <p>A way to discover the VS Code extensions developers use.</p>
            <StoryLink id="f45e67c8fa9c">Read the story</StoryLink>
          </article>
        </div>
      </div>
    </section>
  );
}
function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow intro-label">
          Software engineer · Curious builder
        </p>
        <h1>
          Building software.
          <br />
          <span>Following curiosity.</span>
        </h1>
        <p className="hero-copy">
          I’m Akshay, a software engineer, curious builder, and father of two
          little angels. I enjoy experimenting with ideas and sharing what I
          learn.
        </p>
        <Link className="text-link" to="/about">
          A little about me
          <Arrow />
        </Link>
      </section>
      <Work />
      <section className="section personal-grid">
        <div>
          <h2 className="eyebrow">Outside of work</h2>
          <p className="personal-statement">
            Running, lifting, cooking,
            <br />
            and a good cup of chai.
          </p>
          <p className="muted">
            Also in the mix: audiobooks, podcasts, and a little too much
            YouTube.
          </p>
        </div>
        <div className="selected-notes">
          <h2 className="eyebrow">Selected writing</h2>
          <StoryLink id="ffef310a434d">
            Embarrassment Driven Development
          </StoryLink>
          <StoryLink id="01f999019793">The mentality of abundance</StoryLink>
          <StoryLink id="11e117463726">A night half marathon in Zion</StoryLink>
          <Link className="archive-link" to="/blog">
            All writing <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
function About() {
  return (
    <>
      <section className="hero interior">
        <p className="eyebrow">A little about me</p>
        <h1>
          Curiosity, on
          <br />
          and off the screen.
        </h1>
        <p className="hero-copy">
          I’m Akshay Mattoo. I build software, experiment with different
          technologies, and write about what I learn.
        </p>
      </section>
      <section className="section about-grid">
        <h2>At the keyboard.</h2>
        <div>
          <p>
            I work with JavaScript, React, Node.js, HTML, and CSS. My projects
            give me a place to explore ideas and try things out.
          </p>
          <p>
            Some ideas begin with a technical question. Others begin at home,
            like building a simpler Wordle for my son or turning his interest
            in animals into a game.
          </p>
          <Link className="text-link" to="/#work">
            See selected projects <Arrow />
          </Link>
        </div>
      </section>
      <section className="section about-grid">
        <h2>Beyond the screen.</h2>
        <div>
          <p>
            I enjoy running, lifting, cooking, and listening to audiobooks and
            podcasts. More than anything, I love simply being with my kids. I’m
            the father of two little angels, and there’s usually a cup of chai
            nearby while we spend time together.
          </p>
          <p>
            Running has also found its way into my writing, from everyday
            exercise to a night half marathon in Zion.
          </p>
          <StoryLink id="11e117463726">Notes from Zion</StoryLink>
        </div>
      </section>
      <section className="section about-grid">
        <h2>Ideas in writing.</h2>
        <div>
          <p>
            My writing is where I share technical discoveries, reflect on
            building, and explore experiences outside work.
          </p>
          <StoryLink id="ffef310a434d">
            Embarrassment Driven Development
          </StoryLink>
          <br />
          <StoryLink id="717a7c76feef">
            Exercise is the most underrated power we have
          </StoryLink>
        </div>
      </section>
    </>
  );
}
function Blog() {
  return (
    <>
      <section className="hero interior">
        <p className="eyebrow">Notes & reflections</p>
        <h1>
          Things learned.
          <br />
          Written down.
        </h1>
        <p className="hero-copy">
          On software, side projects, and life beyond the screen. An archive of
          writing on building, learning, and life.
        </p>
      </section>
      <section className="writing-list" aria-label="Writing archive">
        {posts.map((post) => (
          <article key={post.id}>
            <time
              dateTime={new Date(post.createdAt).toISOString().slice(0, 10)}
            >
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
                timeZone: "UTC",
              })}
            </time>
            <h2>
              <a href={post.url}>
                {post.title}
                <Arrow />
              </a>
            </h2>
          </article>
        ))}
      </section>
    </>
  );
}
function ArticleRoute() {
  const { slug } = useParams();
  const post = localArticles.find((article) => article.slug === slug);
  return post ? <ArticleView article={post} /> : <Missing />;
}
function ProjectRoute() {
  const { slug } = useParams();
  const project = localProjects.find((item) => item.slug === slug);
  return project ? <ProjectView project={project} /> : <Missing />;
}
function Missing() {
  return (
    <section className="hero interior">
      <p className="eyebrow">404</p>
      <h1>A little off track.</h1>
      <p className="hero-copy">
        This page isn’t here, but there’s plenty to explore.
      </p>
      <Link className="text-link" to="/">
        Back home <Arrow />
      </Link>
    </section>
  );
}
function ScrollPosition() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
    const localPost = localArticles.find(
      (post) => post.url.replace(/\/$/, "") === pathname.replace(/\/$/, ""),
    );
    if (localPost) {
      document.title = `${localPost.title} — Akshay Mattoo`;
      return;
    }
    const localProject = localProjects.find(
      (project) =>
        project.url.replace(/\/$/, "") === pathname.replace(/\/$/, ""),
    );
    if (localProject) {
      document.title = `${localProject.title} — Akshay Mattoo`;
      return;
    }
    document.title = `${pathname.replace(/\/$/, "") === "/about" ? "About" : pathname.replace(/\/$/, "") === "/blog" ? "Writing" : "Software & Curiosity"} — Akshay Mattoo`;
  }, [pathname, hash]);
  return null;
}
function AppRoutes() {
  const { pathname } = useLocation();
  return (
    <SiteFrame
      current={
        pathname.startsWith("/blog")
          ? "blog"
          : pathname === "/about"
            ? "about"
            : ""
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<ArticleRoute />} />
        <Route path="/projects/:slug" element={<ProjectRoute />} />
        <Route
          path="/portfolio"
          element={
            <>
              <section className="hero interior">
                <p className="eyebrow">Projects & experiments</p>
                <h1>Ideas into practice.</h1>
              </section>
              <Work />
            </>
          }
        />
        <Route path="*" element={<Missing />} />
      </Routes>
    </SiteFrame>
  );
}
function App() {
  return (
    <BrowserRouter>
      <ScrollPosition />
      <AppRoutes />
    </BrowserRouter>
  );
}
export default App;
