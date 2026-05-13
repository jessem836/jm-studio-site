<template>
  <main>

    <!-- ═══════════════ HERO ═══════════════ -->
    <section class="eb-hero">
      <div class="eb-hero-grid"></div>
      <div class="eb-hero-glow"></div>
      <div class="container eb-hero-content">
        <h1 class="eb-title">EARTHBORN EVO</h1>
        <p class="eb-tagline">Top-Down Arcade · Roguelike · Endless Combat · Sci-Fi</p>
        <p class="eb-desc">
          Humanity is fighting a war against the Xiual Mind. Take flight and collect powerful
          Shards, adapt your build each run, and push further towards the Conduit.
          The United Earthborn Systems needs your help...
        </p>
        <div class="eb-status">
          <span class="status-dot"></span>
          <span>In active development — Unreal Engine 5</span>
        </div>
      </div>
    </section>
    
  <!-- ═══════════════ LORE  ═══════════════ -->
    <section class="section">
      <div class="container">
        <p class="section-label">Lore</p>
        <h2 class="section-title">The Story So Far</h2>
        <p class="mech-body">
          In the far future, where humanity, united after a near-extinction nuclear war in 2100, built a Solar System empire 
          and eventually a galactic one after discovering Psionic Energy, a psychic force of unknown origin, and using it to develop the Jump-Drive, 
          enabling faster-than-light travel across the Milky Way. What humanity never knew was that this energy wasn't a natural phenomenon, 
          it was the ambient output of the Xiual Gestalt Consciousness, an ancient alien hive mind from Andromeda that had long ago voluntarily 
          abandoned their physical bodies, uploading their souls into a megastructure known as the Conduit to exist as a unified gestalt consciousness. 
          Every Jump-Drive activation humanity created sent psychic shockwaves rippling back toward the Conduit, and after centuries of expansion, 
          The accumulated backlash tore through the Xiual like a storm, annihilating a majority of all Xiual souls forever.
          The Xiual located the source of the disturbance and sent a response. The War of Extinction began without a word, without an ultimatum.
          Struggling against a technologically and psychically superior enemy, UES High Command launched Project: Evo: 
          One hundred pilots in experimental fighters built from salvaged Xiual technology, paired with the sapient 
          AI co-pilot VISAR, armed with weaponized Psionic Energy and a single objective: find the Conduit deep in Andromeda and destroy it.
        </p>
      </div>
    </section>

    <!-- ═══════════════ MECHANICS ═══════════════ -->
    <section class="section">
      <div class="container">
        <p class="section-label">Gameplay</p>
        <h2 class="section-title">Core Mechanics</h2>
        <div class="mechanics-grid">
          <div class="mechanic-card" v-for="m in mechanics" :key="m.title">
            <span class="mech-icon">{{ m.icon }}</span>
            <h3 class="mech-title">{{ m.title }}</h3>
            <p class="mech-body">{{ m.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="container"><div class="divider"></div></div>

    <!-- ═══════════════ DEV NOTES ═══════════════ -->
    <section class="section">
      <div class="container">
        <p class="section-label">Dev Blog</p>
        <h2 class="section-title">Dev Notes</h2>
        <p class="dev-intro">
          Progess updates as well as notes during development.
        </p>
        <div class="devnotes-list">
          <article class="devnote-card" v-for="note in devNotes" :key="note.date">
            <div class="devnote-meta">
              <span class="devnote-date">{{ note.date }}</span>
              <span class="devnote-tag" v-if="note.tag">{{ note.tag }}</span>
            </div>
            <h3 class="devnote-title">{{ note.title }}</h3>
            <p class="devnote-body">{{ note.body }}</p>
          </article>
        </div>

        <p class="devnotes-placeholder">
          More dev notes coming soon. Follow along on
          <a href="https://www.instagram.com/hoots.games/" target="_blank">Instagram via Hoots Games</a>.
        </p>
      </div>
    </section>

    <!-- ═══════════════ Screenshots ═══════════════ -->
    <section class="section eb-sc-section">
      <div class="container">
        <p class="section-label">Screenshots</p>
        <h2 class="section-title">Latest Builds</h2>
        <p class="dev-intro">
          Screenshots from each Dev Note, with the most recent at the top.
        </p>
        <div class="sc-chips">
          <p class="devnotes-placeholder">Solar Hazard Level WIP</p>
          <img src="/img/DevImg_1.jpg" alt="Dev Note 1">
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
const mechanics = [
  {
    title: 'Arcade Combat',
    body: 'Classic top-down shooter feel inspired by Space Invaders and Galaga, but with a twist. Race to destroy the Conduit or fight endlessly against the Xiual Mind.',
  },
  {
    title: 'Roguelike System',
    body: 'Between waves, or when dropped from an enemy, choose from randomized Shards that permanently modify your ship\'s stats and abilities. Be cautious, death is permanent.',
  },
  {
    title: 'Stage Progression',
    body: 'Each wave cycles through distinct stage environments with unique enemy types, envionmental hazards, and objectives.',
  },

]

const devNotes = [
  {
    date: 'May 2026',
    tag: 'Anniversary',
    title: 'First Dev Note',
    body: 'Marking the 2 year anniversary of the project\'s inception, I have created the Dev Notes section to document my progress and insights. At this moment in time, I am completing the enviornmental stages. The final one is the Solar Hazard. Solar Flares rain down periodically applying Scorch as you fight the Xiual.',
  },
  {
    date: 'May 2024',
    tag: 'Start',
    title: 'Development Begins',
    body: 'Following inspiration from the original Earthborn Evolution, https://www.construct.net/en/free-online-games/earthborn-evolution-1164/play, development for its remake / sequel  has begun under Hoots Games.', 
  }
]

const screenshots = [
  
]
</script>

<style scoped>
/* ── Game Hero ─────────────────────────────────────────────── */
.eb-hero {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.eb-hero-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to top, #07090d 0%, rgba(255,255,255,0) 15%),url("/img/EE_BG.JPG");
 
  
  mask-image: radial-gradient(ellipse at 30% 50%, transparent 0%, black 70%);
}

.eb-hero-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 15% 60%, rgba(43,150,255,0.07) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 30%, rgba(60, 80, 180, 0.08) 0%, transparent 50%);
}

.eb-hero-content {
  position: relative;
  z-index: 1;
  padding-top: 8rem;
  padding-bottom: 5rem;
}

.eb-title {
  font-size: clamp(2.8rem, 8vw, 6.5rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--text);
  line-height: 1;
  margin: 0.4rem 0 0.75rem;
  text-shadow: 0 0 60px rgba(43,150,255,0.2);
}

.eb-tagline {
  font-family: 'Rajdhani', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.eb-desc {
  max-width: 560px;
  font-size: 1rem;
  line-height: 1.75;
  margin-bottom: 2rem;
}

.eb-status {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  
  

  border: 1px solid var(--border);
  border-color: aliceblue;
  border-radius: 100px;
  padding: 0.4rem 1rem;
}
.status-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #6eff73;
  box-shadow: 0 0 8px #4caf50;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* ── Mechanics ─────────────────────────────────────────────── */
.mechanics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
  margin-top: 2.5rem;
}
.mechanic-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.75rem;
  transition: all 0.2s ease;
}
.mechanic-card:hover {
  border-color: var(--accent);
  background: var(--bg-elevated);
}
.mech-icon { font-size: 1.8rem; display: block; margin-bottom: 1rem; }
.mech-title {
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.6rem;
}
.mech-body { font-size: 0.9rem; color: var(--text-muted); line-height: 1.65; }

/* ── Dev Notes ─────────────────────────────────────────────── */
.dev-intro {
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  max-width: 560px;
}
.devnotes-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 760px;
}
.devnote-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-left: 2px solid var(--accent);
  border-radius: var(--radius);
  padding: 1.5rem 1.75rem;
  transition: border-color 0.2s;
}
.devnote-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.6rem;
}
.devnote-date {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-dim);
}
.devnote-tag {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-dim);
  border-radius: 3px;
  padding: 0.15rem 0.5rem;
}
.devnote-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.5rem;
}
.devnote-body { font-size: 0.9rem; color: var(--text-muted); line-height: 1.65; }

.devnotes-placeholder {
  margin-top: 2rem;
  color: var(--text-dim);
  font-size: 0.9rem;
}

/* ── Tech ──────────────────────────────────────────────────── */
.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}
.tech-chip {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.45rem 1rem;
  transition: all 0.2s;
}
.tech-chip:hover {
  border-color: var(--accent);
  color: var(--accent);
}

@media (max-width: 600px) {
  .mechanics-grid { grid-template-columns: 1fr; }
}
</style>
