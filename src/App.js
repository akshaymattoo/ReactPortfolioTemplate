import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import { mediumArticles } from './data/data';
import './Editorial.css';

const posts = [...mediumArticles.data.posts].sort((a, b) => b.createdAt - a.createdAt);
const article = (id) => posts.find(post => post.id === id);
const projects = [
  { name: 'Karyaa', label: '01 / Startup experiment', text: 'The first startup in my 12 × 12 challenge. Notes from taking an idea into a personal project.', id: '246f2cac2ad' },
  { name: 'VsCodeSetup', label: '02 / Side project', text: 'The second project in the series. A look at VsCodeSetup and the next step in my building journey.', id: 'f45e67c8fa9c' },
];
function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }
function StoryLink({ id, children }) { return <a className="text-link" href={article(id).url}>{children}<Arrow /></a>; }
function Work() {
  return <section id="work" className="section" aria-labelledby="work-title">
    <div className="section-heading"><h2 className="eyebrow" id="work-title">Selected work</h2><span className="small-note">Ideas put into practice</span></div>
    <div className="project-grid">{projects.map(project => <article className="project" key={project.id}>
      <p className="project-label">{project.label}</p><h3>{project.name}</h3><p>{project.text}</p>
      <StoryLink id={project.id}>Read the story</StoryLink>
    </article>)}</div>
  </section>;
}
function Home() {
  return <>
    <section className="hero"><p className="eyebrow intro-label">Software engineer · Curious builder</p>
      <h1>Building software.<br /><span>Following curiosity.</span></h1>
      <p className="hero-copy">I’m Akshay, a software engineer who enjoys experimenting with ideas and sharing what I learn.</p>
      <Link className="text-link" to="/about">A little about me<Arrow /></Link>
    </section>
    <Work />
    <section className="section approach" aria-labelledby="approach-title"><h2 className="eyebrow" id="approach-title">Learning through doing</h2>
      <p className="statement">An idea. An experiment.<br />Something learned along the way.</p>
      <div className="approach-bottom"><p>My 12 × 12 challenge started with a collection of ideas and a decision to begin. I write about the projects and the things I learn as I go.</p><StoryLink id="c3d38dddcbcd">How it started</StoryLink></div>
    </section>
    <section className="section personal-grid"><div><h2 className="eyebrow">Outside of work</h2><p className="personal-statement">Running, lifting, cooking,<br />and a good cup of chai.</p><p className="muted">Also in the mix: audiobooks, podcasts, and a little too much YouTube.</p></div>
      <div className="selected-notes"><h2 className="eyebrow">Selected writing</h2>
        <StoryLink id="c3d38dddcbcd">The 12 × 12 challenge</StoryLink>
        <StoryLink id="ffef310a434d">Embarrassment Driven Development</StoryLink>
        <StoryLink id="11e117463726">A night half marathon in Zion</StoryLink>
        <Link className="archive-link" to="/blog">All writing <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  </>;
}
function About() { return <>
  <section className="hero interior"><p className="eyebrow">A little about me</p><h1>Curiosity, on<br />and off the screen.</h1><p className="hero-copy">I’m Akshay Mattoo. I build software, experiment with different technologies, and write about what I learn.</p></section>
  <section className="section about-grid"><h2>At the keyboard.</h2><div><p>I work with JavaScript, React, Node.js, HTML, and CSS. My projects give me a place to explore ideas and try things out.</p><p>I started the 12 × 12 project and startup challenge in 2023. Karyaa and VsCodeSetup are two projects I’ve written about along the way.</p><StoryLink id="c3d38dddcbcd">Read about the challenge</StoryLink></div></section>
  <section className="section about-grid"><h2>Beyond the screen.</h2><div><p>I enjoy running, lifting, cooking, and listening to audiobooks and podcasts. And there’s usually a cup of chai nearby.</p><p>Running has also found its way into my writing, from everyday exercise to a night half marathon in Zion.</p><StoryLink id="11e117463726">Notes from Zion</StoryLink></div></section>
  <section className="section about-grid"><h2>Ideas in writing.</h2><div><p>My writing is where I share technical discoveries, reflect on building, and explore experiences outside work.</p><StoryLink id="ffef310a434d">Embarrassment Driven Development</StoryLink><br /><StoryLink id="717a7c76feef">Exercise is the most underrated power we have</StoryLink></div></section>
</>; }
function Blog() { return <><section className="hero interior"><p className="eyebrow">Notes & reflections</p><h1>Things learned.<br />Written down.</h1><p className="hero-copy">On software, side projects, and life beyond the screen. An archive of writing from 2020–2023.</p></section>
<section className="writing-list" aria-label="Writing archive">{posts.map(post => <article key={post.id}><time dateTime={new Date(post.createdAt).toISOString().slice(0,10)}>{new Date(post.createdAt).toLocaleDateString('en-US', {month:'short', year:'numeric', timeZone:'UTC'})}</time><h2><a href={post.url}>{post.title}<Arrow /></a></h2></article>)}</section></>; }
function Missing() {return <section className="hero interior"><p className="eyebrow">404</p><h1>A little off track.</h1><p className="hero-copy">This page isn’t here, but there’s plenty to explore.</p><Link className="text-link" to="/">Back home <Arrow /></Link></section>;}
function App() { return <BrowserRouter><a className="skip-link" href="#main">Skip to content</a><div className="site-shell">
<header className="site-header"><Link className="wordmark" to="/">Akshay Mattoo<span className="wordmark-dot">.</span></Link><nav aria-label="Main navigation"><a href="/#work">Work</a><NavLink to="/about">About</NavLink><NavLink to="/blog">Writing</NavLink></nav></header>
<main id="main"><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/blog" element={<Blog />} /><Route path="/portfolio" element={<><section className="hero interior"><p className="eyebrow">Projects & experiments</p><h1>Ideas into practice.</h1></section><Work /></>} /><Route path="*" element={<Missing />} /></Routes></main>
<footer className="site-footer"><a className="footer-invite" href="mailto:akshaymattoo@gmail.com">Let’s talk.<Arrow /></a><div className="footer-links"><a href="mailto:akshaymattoo@gmail.com">Email</a><a href="https://github.com/akshaymattoo">GitHub</a><a href="https://www.linkedin.com/in/akshaymattoo">LinkedIn</a></div><p className="footer-note">Akshay Mattoo · A small corner of the internet.</p></footer>
</div></BrowserRouter>; }
export default App;
