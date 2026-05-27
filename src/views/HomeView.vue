<template>
  <main>
 <!-- ═══════════════ HERO ═══════════════ -->
    <section class="personal-hero">
      <div class="ph-grid"></div>
      <div class="container ph-content">
        <p class="hero-eyebrow">Welcome to my site!</p>
        <h1 class="ph-title">Jesse Mota</h1>
        <p class="ph-sub">Game Developer&nbsp;&nbsp;·&nbsp;&nbsp;IT&nbsp;&nbsp;·&nbsp;&nbsp;Student</p>
        <p class="hero-body">
          An aspiring game developer and student of computer science, trying to break into the IT industry and share my journey along the way.
        </p>
      </div>
    </section>

    <!-- ═══════════════ ABOUT ═══════════════ -->
    <section id="about" class="section about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <p class="section-label">About</p>
            <h2 class="section-title">Who I Am</h2>
            <p class="about-body">
             I am currently a student at Western Governors University, pursuing a bachelor's degree in Computer Science. 
             So far, I am certified in LPI Linux and ITIL 4. My next goal is to become CompTIA Security+ certified. I am also a self-taught 
             game developer, creating Earthborn Evo, a top-down arcade roguelike in Unreal Engine 5. 
             <br><br>
             Currently, I am employed at ThredUP as an IT Tech Support Technician, 
             handling tickets submitted by warehouse associates and managers, as well as ensuring all applications and computers are up to date and running.
            <br><br>
             I am passionate about learning and growing in the IT and game development fields, and I am excited to share my journey with you through this site.
            </p>
          </div>
          <div class="about-aside">
            <div class="about-stat-card">
              <div class="stat">
                <span class="stat-num">1</span>
                <span class="stat-label">Years in IT</span>
              </div>
              <div class="divider" style="margin: 1.25rem 0;"></div>
              <div class="stat">
                <span class="stat-num">UE5</span>
                <span class="stat-label">Primary Game Engine</span>
              </div>
              <div class="divider" style="margin: 1.25rem 0;"></div>
              <div class="stat">
                <span class="stat-num">B.S.</span>
                <span class="stat-label">Computer Science @ WGU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ SKILLS ═══════════════ -->
    <section class="section skills-section">
      <div class="container">
        <p class="section-label">Capabilities</p>
        <h2 class="section-title">Skills & Certs</h2>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.name" class="skill-card">
            <span class="skill-icon">{{ skill.icon }}</span>
            <div>
              <p class="skill-name">{{ skill.name }}</p>
              <p class="skill-cat">{{ skill.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ PAGE PREVIEWS ═══════════════ -->
    <section class="section previews-section">
      <div class="container">
        <p class="section-label">Explore</p>
        <h2 class="section-title">What's Here</h2>
        <div class="previews-grid">

          <RouterLink to="/earthborn" class="preview-card preview-game">
            <div class="preview-tag">Game Dev</div>
            <h3 class="preview-title">Earthborn Evo</h3>
            <p class="preview-body">
              A top-down arcade roguelike — Galaga meets Risk of Rain.
              Pilot a ship, collect Shards, survive endless alien hordes.
              Follow the dev journey.
            </p>
            <span class="preview-cta">Explore the game →</span>
          </RouterLink>

          <RouterLink to="/personal" class="preview-card preview-personal">
            <div class="preview-tag">Personal</div>
            <h3 class="preview-title">About Me</h3>
            <p class="preview-body">
              National Parks photography, Warhammer 40K, and a
              deeper look at who I am outside of IT and game development.
            </p>
            <span class="preview-cta">See the gallery →</span>
          </RouterLink>

        </div>
      </div>
    </section>

    <!-- ═══════════════ CONTACT ═══════════════ -->
    <section id="contact" class="section contact-section">
      <div class="container">
        <div class="contact-inner">
          <p class="section-label">Get In Touch</p>
          <h2 class="section-title">Contact</h2>
          <p class="contact-sub">
            Have a question or want to get in touch?
          </p>
          <div class="contact-links">
            <a href="mailto:your@email.com" class="contact-link">
              <span class="contact-link-icon">✉</span>
              <span>jessemota836@gmail.com</span>
            </a>
            <a href="https://github.com/jessem836" target="_blank" rel="noopener" class="contact-link">
              <span class="contact-link-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
              </span>
              <span>github</span>
            </a>
            <a href="https://www.linkedin.com/in/jessem836/" target="_blank" rel="noopener" class="contact-link">
            <span class="contact-link-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>   
            </span>
            <span>linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>

const skills = [
  {  name: 'B.S. Computer Science',  category: 'Education' },
  {  name: 'ITIL 4 Certified',      category: 'Certification' },
  {  name: 'LPI Linux Certified',   category: 'Certification' },
  {  name: 'Springboot, C++, Python',       category: 'Backend' },
  {  name: 'Unreal Engine 5',         category: 'Game Engine' },
  {  name: 'Vue.js, HTML, CSS',             category: 'Frontend' },
  {  name: 'IT Tech Support',        category: 'Experience' },
  {  name: 'Ticket Systems, A.I.',          category: 'Systems' },
]
</script>

<style scoped>
/* ── Hero ──────────────────────────────────────────────────── */
.personal-hero {
  position: relative;
  min-height: 45vh;
  display: flex;
  align-items: flex-end;
  padding-bottom: 4rem;
  overflow: hidden;
}
.ph-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(28, 35, 54, 0.4) 1px, transparent 1px),
    linear-gradient(90deg, rgba(28, 35, 54, 0.4) 1px, transparent 1px);
  background-size: 60px 60px;
}
.ph-content { 
position: relative; z-index: 1; padding-top: 8rem; 
}
.ph-title {
  font-size: clamp(3.5rem, 9vw, 6rem);
  font-weight: 625;
  line-height: 1;
  color: var(--text);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}
.ph-sub {
 font-family: 'Rajdhani', sans-serif;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.hero-eyebrow {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.5rem;
}



/* ── About ─────────────────────────────────────────────────── */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 4rem;
  align-items: center;
}
.about-body {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.75;
  max-width: 560px;
}
.about-aside {}
.about-stat-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
}
.stat { text-align: center; }
.stat-num {
  display: block;
  font-family: 'Rajdhani', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--accent);
}
.stat-label {
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-dim);
}

/* ── Skills ─────────────────────────────────────────────────── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 2.5rem;
}
.skill-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.1rem 1.25rem;
  transition: all 0.2s ease;
}
.skill-card:hover {
  border-color: var(--accent);
  background: var(--bg-elevated);
}
.skill-icon { font-size: 1.4rem; flex-shrink: 0; }
.skill-name {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text);
}
.skill-cat {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-top: 1px;
}

/* ── Page Previews ──────────────────────────────────────────── */
.previews-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2.5rem;
}
.preview-card {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2.25rem;
  text-decoration: none;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
}
.preview-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--accent);
  opacity: 0;
  transition: opacity 0.25s ease;
}
.preview-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.4);
}
.preview-card:hover::before { opacity: 1; }
.preview-tag {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
}
.preview-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text);
}
.preview-body {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
  flex: 1;
}
.preview-cta {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--accent);
  letter-spacing: 0.04em;
  margin-top: 0.5rem;
  transition: gap 0.2s;
}

/* ── Contact ────────────────────────────────────────────────── */
.contact-inner {
  max-width: 640px;
}
.contact-sub {
  color: var(--text-muted);
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.7;
}
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-muted);
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.2s;
}
.contact-link:hover { color: var(--accent); }
.contact-link-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px; height: 34px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--accent);
  font-style: normal;
}

/* ── Responsive ─────────────────────────────────────────────── */
@media (max-width: 800px) {
  .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .about-aside { max-width: 320px; }
  .previews-grid { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .hero-cta { flex-direction: column; }
}
</style>
