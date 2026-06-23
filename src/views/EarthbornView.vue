<template>
  <main>

    <!-- ═══════════════ HERO ═══════════════ -->
    <section class="eb-hero">
      <div class="eb-hero-grid">
      </div>
      <div class="container eb-hero-content">
        <h1 class="eb-title">EARTHBORN EVO</h1>
        <p class="eb-tagline">Top-Down Arcade · Roguelike · Endless Combat · Sci-Fi</p>
        <p class="eb-desc">
          Humanity is fighting a war against the Xiual Mind, an ancient psychic xenos race. Take flight and collect powerful
          Shards, adapt your build each run, and push further towards the Conduit.
        </p>
      </div>
    </section>
    
  <!-- ═══════════════ LORE  ═══════════════ -->

    <section class="section">
      <div class="container">
        <p class="section-label">Lore</p>
        <h2 class="section-title">Earthborn Evo Codex</h2>
          
        <RouterLink to="/codex" class="preview-card preview-game">
            <div class="preview-tag">Archives and Enemy Codex</div>
            <h3 class="preview-title">The Codex</h3>
            <p class="preview-body">
              Explore the Codex, a compendium of lore entries, enemy profiles, and world-building details that expand on the Earthborn Evo universe. 
              Dive into the history of the Xiual Mind, the United Earthborn Systems, or uncover the secrets of the Conduit. 
              The Codex also contains detailed profiles of the various enemy types and their mechanics and stats.
        </p>
            <span class="preview-cta">Lore and Codex Entries →</span>
          </RouterLink>
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
        <h2 class="section-title">Images for Dev Notes</h2>
        <p class="dev-intro">
          Screenshots from each Dev Note, with the most recent at the top.
        </p>
        <div class="sc-chips">
          <p class="devnotes-placeholder">Command Center for Achievements and the Shop</p>
          <img src="/img/DevImg_2.jpg" alt="Dev Note 2">
          <p class="devnotes-placeholder">Solar Hazard Environment</p>
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
    date: 'June 2026',
    tag: 'Progression',
    title: 'Achievements and the Shop',
    body: 'I have recently begun adding Achievements and the Shop (name pending) to the game. Achievements are permanent unlocks that can be earned by completing specific objectives, while the Shop allows you to purchase ships, shields, and upgrades. So far the new menu where you can view your Achievements and access the Shop is complete. Achievements requires integration with Steam, so Earthborn Evo will officially be on Steam when the Achievements are complete (but not available yet).',
  },
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
</script>

<style scoped>
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
  background-image: linear-gradient(to top, #07090d 0%, rgba(255,255,255,0) 25%),url("/img/EE_BG.JPG");
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
