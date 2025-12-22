<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>ABIKO — Portfolio</title>
  <meta name="description" content="ABIKO-dev — Full‑stack developer. Portfolio showcasing projects, skills, and contact information." />
  <meta name="author" content="ABIKO-dev" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
  <!-- <link rel="stylesheet" href="assets/css/styles.css"> -->
  <link rel="stylesheet" href="PORTFOLIO/styles.css">
      <script src="main.js"></script>

  <meta property="og:title" content="ABIKO-dev — Portfolio">
  <meta property="og:description" content="ABIKO-dev — Full‑stack developer. Portfolio showcasing projects, skills, and contact information.">
  <meta property="og:type" content="website">
  <meta name="theme-color" content="#0b1220">
</head>
<body>
<!-- css srtarted here -->
    <style>
        /* Simple responsive portfolio styles */
:root{
  --bg:#0b1220;
  --surface:#0f1724;
  --muted:#94a3b8;
  --text:#e6eef8;
  --accent:#2dd4bf;
  --max-width:1100px;
  --radius:12px;
  font-size:16px;
  color-scheme: dark;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial;
  background:linear-gradient(180deg,var(--bg),#071024 60%);
  color:var(--text);
  line-height:1.5;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}

.container{max-width:var(--max-width);margin:0 auto;padding:2rem}

.site-header{position:sticky;top:0;background:linear-gradient(180deg,rgba(11,18,32,0.8),rgba(11,18,32,0.6));backdrop-filter:blur(6px);z-index:60}
.header-inner{display:flex;align-items:center;justify-content:space-between}
.brand{font-weight:700;color:var(--text);text-decoration:none}
.nav-toggle{display:none;background:none;border:0;color:var(--muted);font-size:1.4rem;padding:.25rem}
.primary-nav ul{display:flex;gap:1rem;list-style:none;margin:0;padding:0}
.primary-nav a{color:var(--muted);text-decoration:none;padding:.25rem .5rem;border-radius:6px}
.primary-nav a:hover{color:var(--text);background:rgba(255,255,255,0.02)}

/* Hero */
.hero{padding:4rem 0 6rem}
.hero-inner{display:grid;grid-template-columns:1fr 380px;gap:2rem;align-items:center}
.hero-text h1{font-size:2rem;margin:.25rem 0}
.lead{color:var(--muted);font-size:1rem}
.cta-row{margin-top:1.25rem}
.btn{display:inline-block;background:var(--accent);color:#052022;padding:.6rem .9rem;border-radius:8px;text-decoration:none;font-weight:600}
.btn-outline{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--text)}

/* Code block in hero */
.hero-code pre{background:linear-gradient(180deg,#071428,#0b1530);padding:1rem;border-radius:10px;overflow:auto;color:#a7f3d0;font-size:0.9rem}

/* Sections */
section h2{margin-top:0}
.about-grid{display:grid;grid-template-columns:1fr 220px;gap:1.5rem}
.about-stats ul{list-style:none;padding:0;margin:0;color:var(--muted)}
.project-controls{margin:1rem 0;color:var(--muted)}
.project-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}
.project-card{background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01));padding:1rem;border-radius:12px;display:flex;gap:1rem;align-items:flex-start}
.project-thumb{width:84px;height:64px;border-radius:8px;background:linear-gradient(135deg,#0b1220,#082234)}
.project-title{margin:.2rem 0}
.project-desc{color:var(--muted);margin:.4rem 0}
.project-meta{font-size:.85rem;color:var(--muted);}

/* Skills */
.skill-list{display:flex;flex-wrap:wrap;gap:.75rem;list-style:none;padding:0;margin:0}
.skill-list li{background:rgba(255,255,255,0.03);padding:.5rem .75rem;border-radius:999px;color:var(--muted)}

/* Contact */
.contact-form{display:grid;gap:.75rem;max-width:640px}
.contact-form label{display:block}
.contact-form input, .contact-form textarea, .contact-form select{
  width:100%;padding:.6rem;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:var(--text);
}
.form-actions{display:flex;gap:.5rem;align-items:center}

/* Footer */
.site-footer{padding:1.25rem 0;border-top:1px solid rgba(255,255,255,0.03);margin-top:3rem}
.footer-inner{display:flex;justify-content:space-between;align-items:center;gap:1rem}
.footer-social a{color:var(--muted);text-decoration:none;margin-left:.75rem}

/* Small responsive tweaks */
@media (max-width:900px){
  .hero-inner{grid-template-columns:1fr}
  .nav-toggle{display:inline-block}
  .primary-nav{position:absolute;right:1rem;top:64px;background:var(--surface);padding:1rem;border-radius:10px;display:none}
  .primary-nav[aria-hidden="false"],.primary-nav.open{display:block}
  .primary-nav ul{flex-direction:column}
  .about-grid{grid-template-columns:1fr}
}
.muted{color:var(--muted)}
.small{font-size:.9rem}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
        .profile-photo {
    /* 1. Set the size */
    width: 200px; /* Adjust as needed */
    height: 200px; /* Must match the width for a perfect circle/square */

    /* 2. Make it a circle */
    border-radius: 50%;

    /* 3. Ensure the image covers the area without distortion */
    object-fit: cover;

    /* 4. Optional: Add a subtle border */
    border: 3px solid #007bff; /* Change the color */

    /* 5. Optional: Add space around the photo */
    margin-bottom: 20px;
}
    </style>
    <!-- css end here -->
     <!-- javascriprt started here -->
      <script>
// Minimal JS for nav toggle, year, and project filtering
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.getAttribute('aria-hidden') === 'false' || nav.classList.contains('open');
      navToggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open');
      nav.setAttribute('aria-hidden', String(open));
    });
  }

  // Project filter
  const filter = document.getElementById('project-filter');
  const list = document.getElementById('project-list');
  if (filter && list) {
    filter.addEventListener('change', (e) => {
      const val = e.target.value;
      const cards = list.querySelectorAll('.project-card');
      cards.forEach(card => {
        const type = card.getAttribute('data-type') || 'all';
        if (val === 'all' || type === val) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});

      </script>
      <!-- javasript end here -->
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#home">ABIKO</a>
      <button id="nav-toggle" aria-controls="primary-nav" aria-expanded="false" class="nav-toggle">
        <span class="sr-only">Toggle navigation</span>
        ☰
      </button>
      <nav id="primary-nav" class="primary-nav" aria-label="Primary navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <section id="home" class="hero">
      <div class="container hero-inner">
        <div class="hero-text">
          <h1>Hi, I’m <span class="accent">ABDO KEDIR</span>.</h1>
          <p class="lead">I build modern web apps and delightful user experiences — frontend, backend, and everything in between.</p>
          <p class="cta-row">
            <a class="btn" href="#projects">View Projects</a>
            <a class="btn btn-outline" href="#contact">Get in touch</a>
          </p>
        </div>
        <img src="image/1000047909.jpg" alt="A professional headshot of [Your Name]" class="profile-photo">

        <div class="hero-code" aria-hidden="true">
          <pre><code>
            // Example
const greet = (name) => `Hi, ${name}!`;

console.log(greet('World'));</code></pre>
        </div>
      </div>
    </section>

    <section id="about" class="about container">
      <h2>About</h2>
      <div class="about-grid">
        <div class="about-bio">
          <p>I'm a passionate developer focused on building performant, accessible, and maintainable web applications. I enjoy problem solving, collaborating with designers, and shipping features that users love.</p>
          <p>Currently open to freelance projects and full-time opportunities.</p>
          <p>
            <a class="link" href="#contact">Contact me</a> or download my <a class="link" href="#">résumé</a>.
          </p>
        </div>
        <div class="about-stats">
          <ul>
            <li><strong>2+</strong> years building web apps</li>
            <li><strong>10+</strong> projects shipped</li>
            <li><strong>React / Node / TypeScript</strong></li>
          </ul>
        </div>
      </div>
    </section>

    <section id="projects" class="projects container">
      <h2>Projects</h2>
      <p class="muted">A few selected projects. Replace these with your own work.</p>
      <div class="project-controls">
        <label>Filter:
          <select id="project-filter" aria-label="Filter projects">
            <option value="all">All</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Full‑stack</option>
          </select>
        </label>
      </div>

      <div id="project-list" class="project-list">
        <!-- Project card 1 -->
        <article class="project-card" data-type="fullstack">
          <div class="project-thumb" aria-hidden="true"></div>
          <div class="project-body">
            <h3 class="project-title"><a href="#" target="_blank" rel="noopener">Project Alpha</a></h3>
            <p class="project-desc">A full‑stack app for managing tasks with realtime sync and offline support.</p>
            <p class="project-meta">React · Node.js · WebSockets · PostgreSQL</p>
            <p><a class="link" href="#" target="_blank" rel="noopener">View code</a></p>
          </div>
        </article>

        <!-- Project card 2 -->
        <article class="project-card" data-type="frontend">
          <div class="project-thumb" aria-hidden="true"></div>
          <div class="project-body">
            <h3 class="project-title"><a href="#" target="_blank" rel="noopener">Portfolio Generator</a></h3>
            <p class="project-desc">A static site generator focused on performance and accessibility.</p>
            <p class="project-meta">TypeScript · Vite · CSS‑Modules</p>
            <p><a class="link" href="#" target="_blank" rel="noopener">Live demo</a></p>
          </div>
        </article>

        <!-- Project card 3 -->
        <article class="project-card" data-type="backend">
          <div class="project-thumb" aria-hidden="true"></div>
          <div class="project-body">
            <h3 class="project-title"><a href="#" target="_blank" rel="noopener">API Service</a></h3>
            <p class="project-desc">High‑performance REST API with robust auth and monitoring.</p>
            <p class="project-meta">Node.js · Express · Redis · Docker</p>
            <p><a class="link" href="#" target="_blank" rel="noopener">Repository</a></p>
          </div>
        </article>
      </div>
    </section>

    <section id="skills" class="skills container">
      <h2>Skills</h2>
      <p class="muted">Technologies I use regularly.</p>
      <ul class="skill-list">
        <li>JavaScript / TypeScript</li>
        <li>React / Next.js</li>
        <li>Node.js / Express</li>
        <li>PostgreSQL / Redis</li>
        <li>Testing (Jest, Playwright)</li>
        <li>CI/CD, Docker, Cloud</li>
      </ul>
    </section>

    <section id="contact" class="contact container">
      <h2>Contact</h2>
      <p>Want to work together? Send a short message and I’ll get back to you.</p>

      <form id="contact-form" class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
        <label>
          Name
          <input type="text" name="name" required placeholder="Your name">
        </label>
        <label>
          Email
          <input type="email" name="email" required placeholder="you@example.com">
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required placeholder="Short message"></textarea>
        </label>
        <div class="form-actions">
          <button class="btn" type="submit">Send message</button>
          <a class="btn btn-outline" href="mailto:you@example.com">Email me</a>
        </div>
        <p class="muted small">Alternatively, email: <a href="mailto:you@example.com">you@example.com</a></p>
      </form>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <p>© <span id="year"></span> ABIKO-dev — Built with ❤️ OK</p>
      <nav class="footer-social" aria-label="Social links">
        <a href="#" target="_blank" rel="noopener">GitHub</a>
        <a href="#" target="_blank" rel="noopener">LinkedIn</a>
        <a href="#" target="_blank" rel="noopener">Twitter</a>
        <!-- <a href="https://www.Linkedin.com/in//abdo-dawud?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener">LinkedIn</a> -->

      </nav>
    </div>
  </footer>

  <script src="PORTFOLIO/main.js" defer></script>
</body>
</html>
 
