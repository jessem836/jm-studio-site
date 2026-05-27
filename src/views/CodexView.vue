<template>
  <main>

    <!-- ═══════════════ HERO ═══════════════ -->
    <section class="codex-hero">
      <div class="codex-hero-grid"></div>
      <div class="container codex-hero-content">
        <p class="section-label">Earthborn Evo</p>
        <h1 class="codex-title">CODEX</h1>
        <p class="codex-sub">Lore Archives &amp; Enemy Intelligence</p>
      </div>
    </section>

    <!-- ═══════════════ TAB NAV ═══════════════ -->
    <div class="codex-tabs-wrap">
      <div class="container">
        <div class="codex-tabs">
          <button
            class="codex-tab"
            :class="{ active: activeTab === 'lore' }"
            @click="activeTab = 'lore'; selectedEnemy = null"
          >Lore Archives </button>
          <button
            class="codex-tab"
            :class="{ active: activeTab === 'enemies' }"
            @click="activeTab = 'enemies'"
          >Enemy Codex </button>
        </div>
      </div>
    </div>

    <!-- ═══════════════ LORE ═══════════════ -->
    <section v-show="activeTab === 'lore'" class="section">
      <div class="container">
        <p class="section-label">Lore &amp; World</p>
        <h2 class="section-title">Lore Archives</h2>
        <p class="codex-intro">
          Classified intel recovered from the UES. Expand each entry to read.
        </p>

        <div class="lore-list">
          <div
            v-for="entry in loreEntries"
            :key="entry.id"
            class="lore-item"
            :class="{ open: openLore === entry.id }"
          >
            <button class="lore-header" @click="toggleLore(entry.id)">
              <div class="lore-header-left">
                <span class="lore-tag">{{ entry.tag }}</span>
                <span class="lore-title">{{ entry.title }}</span>
              </div>
              <span class="lore-chevron">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 5l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
            <Transition name="accordion">
              <div v-if="openLore === entry.id" class="lore-body">
                <div class="lore-body-inner">
                  <p v-for="(para, i) in entry.content" :key="i" class="lore-para">{{ para }}</p>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ ENEMY CODEX ═══════════════ -->
    <section v-show="activeTab === 'enemies'" class="section">
      <div class="container">
        <p class="section-label">Threat Assessment</p>
        <h2 class="section-title">Enemy Codex</h2>
        <p class="codex-intro">
          Catalogued Xiual units encountered in combat. Select an entry for a full report.
        </p>

        <!-- Filter -->
        <div class="enemy-filters">
          <button
            v-for="tier in tierFilters"
            :key="tier"
            class="filter-btn"
            :class="{ active: activeTier === tier }"
            @click="activeTier = tier"
          >{{ tier }}</button>
        </div>

        <!-- Grid -->
        <div class="enemy-grid" :class="{ 'panel-open': selectedEnemy }">
          <button
            v-for="enemy in filteredEnemies"
            :key="enemy.id"
            class="enemy-card"
            :class="{ selected: selectedEnemy?.id === enemy.id }"
            @click="selectEnemy(enemy)"
          >
            <div class="enemy-card-img">
              <img :src="enemy.img" :alt="enemy.name" />
              <span class="enemy-tier-badge" :class="`tier-${enemy.tier.toLowerCase()}`">{{ enemy.tier }}</span>
            </div>
            <div class="enemy-card-info">
              <p class="enemy-name">{{ enemy.name }}</p>
              <p class="enemy-class">{{ enemy.class }}</p>
            </div>
          </button>
        </div>
      </div>
    </section>

    <!-- ═══════════════ ENEMY DETAIL PANEL ═══════════════ -->
    <Transition name="panel">
      <div v-if="selectedEnemy && activeTab === 'enemies'" class="enemy-panel-overlay" @click.self="selectedEnemy = null">
        <div class="enemy-panel">

          <button class="panel-close" @click="selectedEnemy = null">✕</button>

          <div class="panel-header">
            <div class="panel-img">
              <img :src="selectedEnemy.img" :alt="selectedEnemy.name" />
            </div>
            <div class="panel-title-block">
              <span class="enemy-tier-badge lg" :class="`tier-${selectedEnemy.tier.toLowerCase()}`">{{ selectedEnemy.tier }}</span>
              <h2 class="panel-name">{{ selectedEnemy.name }}</h2>
              <p class="panel-class">{{ selectedEnemy.class }}</p>
            </div>
          </div>

          <!-- Stats -->
          <div class="panel-section">
            <p class="panel-section-label">Stats</p>
            <div class="stats-grid">
              <div class="stat-row" v-for="stat in selectedEnemy.stats" :key="stat.label">
                <span class="stat-label">{{ stat.label }}</span>
                <div class="stat-bar-wrap">
                  <div class="stat-bar" :style="{ width: stat.value + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mechanics -->
          <div class="panel-section">
            <p class="panel-section-label">Combat Mechanics</p>
            <ul class="mechanic-list">
              <li v-for="m in selectedEnemy.mechanics" :key="m" class="mechanic-item">
                <span class="mechanic-dot"></span>{{ m }}
              </li>
            </ul>
          </div>

          <!-- Lore -->
          <div class="panel-section">
            <p class="panel-section-label">Intelligence Report</p>
            <p class="panel-lore">{{ selectedEnemy.lore }}</p>
          </div>

        </div>
      </div>
    </Transition>

  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

// ── Tab state ──────────────────────────────────────────────
const activeTab = ref('lore')

// ── Lore ───────────────────────────────────────────────────
const openLore = ref(null)

function toggleLore(id) {
  openLore.value = openLore.value === id ? null : id
}

const loreEntries = [
  {
    id: 'Origins',
    tag: 'Origins',
    title: 'Nuclear Unification & Solar Colonization',
    content: [
      'In the nuclear fires of an atomic war in the 22nd century, the surviving nations of the world united to bring unity, progress, and enlightenment. The United Earthborn Nations was created, this new global government ushered in an era of unprecedented cooperation and technological advancement.',
      'After centuries of advancement, humanity had conqurered the Solar System, terraforming Mars and colonizing the moons of Jupiter and Saturn. The UEN was at the height of its power, with a thriving interplanetary civilization and a utopian society on Earth.',
      'Even with all their advancements, the great vastness of the universe had kept humanity confined to the Solar System.'
    ]
  },

  {
    id: 'UES',
    tag: 'Origins',
    title: 'Psionic Energy & United Earthborn Systems',
    content: [
      'Near the beginning of the 4th millennium, satellites beyond the Oort Cloud began detecting strange energy readings. Dubbed "Psionic Energy", this mysterious force seemed to defy the known laws of physics, exhibiting psychic potential.',
      'The UEN then spent nearly a century researching and harnessing Psionic Energy, when it was discovered that it could be used to tear holes in the fabric of space-time, creating wormholes.',
      'This discovery soon led to the creation of the Jump-Drive, a device placed on colony and starships that allowed for near-instantaneous travel across the Milky Way. Soon, humanity began exploring and colonizing on a galactic scale.',
      'The UEN was restructured into the United Earthborn Systems (UES) to better manage humanity’s interstellar civilization, and the UES High Command for potential extraterrestrial threats or rebellions.',
    ]
  },

  {
    id: 'Xiual',
    tag: 'Origins',
    title: 'The Xiual Mind & The Conduit',
    content: [
      'Deep in the Andromeda galaxy, the Xiual first came into being. Their origins are shrouded in mystery, but it is believed that sometime in the distant past, they were once latent psionic lifeforms with no connection to a greater consciousness.',
      'At some point, the Xiual began construction of a megastructure in their home system, known as the Conduit. When the machine was completed, the Xiual created Psionic Shards and placed these psychic stones within their vessels and machines, so that they could link their minds to their machines and pilot them from within the Conduit.',
      'Then, one by one, the Xiual stepped into the Conduit, where their bodies were torn apart and their mind and souls were uploaded into the Conduit to merge as one consciousness. This merging of minds was the source of the Psionic Energy that now permeates the universe.',
    ]
  },

  {
    id: 'FC',
    tag: 'Current',
    title: 'First Contact & The Existential War',
    content: [
      'By the 5th millennium, humanity had colonized thousands of star systems, but their rampant use of the Jump-Drive had unknowingly rippled volatile energy back to the Conduit. When the psychic backlash reached the Conduit, trillions of Xiual minds were instantly erased from reality and the surviving Xiual were left reeling from the violent psychic wave.',
      'The Xiual Mind soon located the source of the psychic disturbance and traced it back to humanity. The Xiual sent fleets to the edges of the Milky Way, where UES High Command sent a squad of scout ships to investigate the psychic disturbance.',
      'Upon arrival, the scout ships were ambused by the Xiual fleet, but a lone fighter destroyed dozens of ships and sent back a distress signal. UES High Command sent reinforcements, but the Xiual had already left and begun their invasion of the Milky Way. The Existential War had begun.',
      'The UES could not match the Xiual’s psionic technology, so the UES HC began reverse engineering the debris of destroyed Xiual ships and created their own psionic tech, Project: Evo had begun.',
    ]
  },

  {
    id: 'PE',
    tag: 'Current',
    title: 'Earthborn Evo',
    content: [
      'Using the salvaged Xiual technology and harnessing the power of the Psionic Shards, the UES created experimental fighter units equipped with sapient combat AI, VISAR. UES High Command located the Xiual home system and launched Project: Evo, 100 pilots were selected to fly the new experimental fighters into the heart of the Xiual Mind and strike at the Conduit itself.',
      'The story continues in Earthborn Evo, where the player takes on the role of one of the 100 pilots of Project: Evo, fighting through waves of Xiual forces to reach the Conduit and end the war once and for all.',
    ]
  },

  {
    id: 'Shards',
    tag: 'Misc',
    title: 'Psionic Shards, Resonance, & VISAR',
    content: [
      'VISAR, Virtual Integrated Support & Adaptive Reconnaissance, is the sapient combat AI developed for the experimental fighter of Project: Evo. VISAR is designed to interface with the HUD of the pilot and provide combat information.',
      'Its main task is to harness Resonance, highly concentrated Psionic Eenergy, and use it to power the fighter’s systems and weapons. Psionic Shards can also be harvested from destroyed Xiual vessels. VISAR can harness the reality bending psychic potential within the Shards to augment the fighter’s abilities and stats.',

    ]
  }
]

// ── Enemies ────────────────────────────────────────────────
const activeTier    = ref('All')
const selectedEnemy = ref(null)

const tierFilters = ['All', 'Light', 'Medium', 'Heavy']

const enemies = [
  {
    id: 'kolim',
    name: 'Kolim',
    class: 'Swarm',
    tier: 'Light',
    img: new URL('/img/enemies/Kolim.png', import.meta.url).href ,
    stats: [
      { label: 'HP',         value: 25 },
      { label: 'Armor',      value: 33 },
      { label: 'Damage',     value: 25 },
      { label: 'Firerate',  value: 100 },
      { label: 'Speed',      value: 83 },
    ],
    mechanics: [
      'Spawns in groups of 3',
      'Rapidly fires single low-damage projectiles',
      'No Shields'
    ],
    lore: 'Lore to be added'
  },

  {
    id: 'kol',
    name: 'Kol',
    class: 'Fighter',
    tier: 'Medium',
    img: new URL('/img/enemies/Kol.png', import.meta.url).href ,
    stats: [
      { label: 'HP',         value: 50 },
      { label: 'Armor',      value: 66 },
      { label: 'Damage',     value: 50 },
      { label: 'Firerate',  value:  75 },
      { label: 'Speed',      value: 66 },
    ],
    mechanics: [
      'Spawns in groups of 2',
      'Well rounded fighter with balanced stats',
      'Light Shields'
    ],
    lore: 'Lore to be added'
  },

  {
    id: 'ulta',
    name: 'Ulta',
    class: 'Artillery',
    tier: 'Medium',
    img: new URL('/img/enemies/Ulta.png', import.meta.url).href,
    stats: [
      { label: 'HP',         value: 25 },
      { label: 'Armor',      value: 100 },
      { label: 'Damage',     value: 75 },
      { label: 'Firerate',  value:  25 },
      { label: 'Speed',      value: 33 },
    ],
    mechanics: [
      'Charges and fires a powerful blast',
      'The blast deals +50% Base Damage to Hulls',
      'Heavy Shields'
    ],
    lore: 'Lore to be added'
  },

  {
    id: 'napalu',
    name: 'Napalu',
    class: 'Rusher',
    tier: 'Medium',
    img: new URL('/img/enemies/Napalu.png', import.meta.url).href,
    stats: [
      { label: 'HP',        value: 100 },
      { label: 'Armor',      value: 33 },
      { label: 'Damage',     value: 75 },
      { label: 'Firerate',   value:  0 },
      { label: 'Speed',     value: 100 },
    ],
    mechanics: [
      'Cannot fire, but rushes the player at high speed',
      'On death, it creates 3 mines, the mines explode after a short delay or on contact, dealing area damage indiscriminately',
      'Instant death on contact with the player or mines',
      'No Shields'
    ],
    lore: 'Lore to be added'
  },

  {
    id: 'kolotl',
    name: 'Kolotl',
    class: 'Juggernaut',
    tier: 'Heavy',
    img: new URL('/img/enemies/Kolotl.png', import.meta.url).href,
    stats: [
      { label: 'HP',         value: 75 },
      { label: 'Armor',     value: 100 },
      { label: 'Damage',    value: 100 },
      { label: 'Firerate',  value:  50 },
      { label: 'Speed',      value: 50 },
    ],
    mechanics: [
      'Slow, but heavily armored and powerful',
      'Fires slow, high-damage projectiles',
      'Medium Shields'
    ],
    lore: 'Lore to be added'
  },

  {
    id: 'tlazual',
    name: 'Tlazual',
    class: 'Support',
    tier: 'Heavy',
    img: new URL('/img/enemies/Tlazual.png', import.meta.url).href,
    stats: [
      { label: 'HP',        value: 100 },
      { label: 'Armor',      value: 66 },
      { label: 'Damage',      value: 0 },
      { label: 'Firerate',   value:  0 },
      { label: 'Speed',      value: 16 },
    ],
    mechanics: [
      'Slow and unarmed, but provides support to other enemies',
      'Equipped with a +10 Cure Aura that periodically heals nearby allies',
      'No Shields'
    ],
    lore: 'Lore to be added'
  }
]

const filteredEnemies = computed(() =>
  activeTier.value === 'All' ? enemies : enemies.filter(e => e.tier === activeTier.value)
)

function selectEnemy(enemy) {
  selectedEnemy.value = selectedEnemy.value?.id === enemy.id ? null : enemy
}
</script>

<style scoped>
/* ── Codex Hero ────────────────────────────────────────────── */
.codex-hero {
  position: relative;
  min-height: 40vh;
  display: flex;
  align-items: flex-end;
  padding-bottom: 3.5rem;
  overflow: hidden;
}
.codex-hero-grid {
position: absolute;
  inset: 0;
  background-image: linear-gradient(to top, #07090d 0%, rgba(255,255,255,0) 25%),url("/img/Codex.JPG");
}
.codex-hero-content { position: relative; z-index: 1; padding-top: 8rem; }
.codex-title {
  font-size: clamp(3rem, 9vw, 7rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--text);
  line-height: 1;
  margin: 0.4rem 0 0.5rem;
  text-shadow: 0 0 80px rgba(43,150,255,0.18);
}
.codex-sub {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
}

/* ── Tab Nav ───────────────────────────────────────────────── */
.codex-tabs-wrap {
  position: sticky;
  top: 50px;
  z-index: 50;
  background: rgba(7,9,13,0.9);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}
.codex-tabs {
  display: flex;
  gap: 0;
}
.codex-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.75rem;
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: -1px;
}
.codex-tab:hover { color: var(--text); }
.codex-tab.active {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

/* ── Shared ────────────────────────────────────────────────── */
.codex-intro {
  color: var(--text-muted);
  font-size: 0.95rem;
  max-width: 580px;
  margin-bottom: 2.5rem;
  line-height: 1.7;
}

/* ── Lore Accordion ────────────────────────────────────────── */
.lore-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 800px;
}

.lore-item {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: border-color 0.1s ease;
}
.lore-item.open {
  border-color: var(--accent);
}

.lore-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  gap: 1rem;
  text-align: left;
}
.lore-header:hover .lore-title { color: var(--accent); }

.lore-header-left {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}
.lore-tag {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-dim);
  border-radius: 3px;
  padding: 0.15rem 0.55rem;
  white-space: nowrap;
  flex-shrink: 0;
}
.lore-title {
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  transition: color 0.1s ease;
}

.lore-chevron {
  color: var(--text-dim);
  flex-shrink: 0;
  transition: transform 0.25s ease, color 0.1s ease;
  display: flex;
  align-items: center;
}
.lore-item.open .lore-chevron {
  transform: rotate(180deg);
  color: var(--accent);
}

.lore-body { overflow: hidden; }
.lore-body-inner {
  padding: 0 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  border-top: 1px solid var(--border);
  padding-top: 1.25rem;
}
.lore-para {
  color: var(--text-muted);
  font-size: 0.93rem;
  line-height: 1.8;
}

/* Accordion transition */
.accordion-enter-active,
.accordion-leave-active { transition: all 0.2s ease; }
.accordion-enter-from,
.accordion-leave-to { opacity: 0; transform: translateY(-6px); }

/* ── Enemy Filters ─────────────────────────────────────────── */
.enemy-filters {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.filter-btn {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.4rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
}
.filter-btn:hover { border-color: var(--accent); color: var(--accent); }
.filter-btn.active { background: var(--accent); color: #fff; border-color: var(--accent); }

/* ── Enemy Grid ────────────────────────────────────────────── */
.enemy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  transition: margin-right 1s ease;
}
.enemy-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.22s ease;
  text-align: left;
  padding: 0;
}
.enemy-grid.panel-open {
  margin-right: min(480px, 100%)
}
.enemy-card:hover,
.enemy-card.selected {
  border-color: var(--accent);
  box-shadow: 0 0 20px var(--accent-dim);
}

.enemy-card-img {
  position: relative;
  aspect-ratio: 1;
  background: var(--bg-elevated);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}
.enemy-tier-badge {
  position: absolute;
  top: 0.5rem; right: 0.5rem;
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 3px;
  padding: 0.1rem 0.45rem;
}
.enemy-tier-badge.lg {
  position: static;
  font-size: 0.72rem;
  margin-bottom: 0.35rem;
  display: inline-block;
}
.tier-light  { background: rgba(130,130,130,0.2); color: #aaa; }
.tier-medium   { background: rgba(43,150,255,0.15); color: #5aadff; }
.tier-heavy   { background: rgba(180,50,255,0.15); color: #c07aff; }

.enemy-card-info { padding: 0.75rem; }
.enemy-name {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text);
}
.enemy-class {
  font-size: 0.72rem;
  color: var(--text-dim);
  letter-spacing: 0.06em;
  margin-top: 2px;
}

/* ── Enemy Detail Panel ────────────────────────────────────── */
.enemy-panel-overlay {
  position: fixed;
  inset: 0;
  z-index: 150;
  display: flex;
  justify-content: flex-end;

  pointer-events: none;
}

.enemy-panel {
  width: min(480px, 100%);
  height: 100%;
  background: var(--bg-surface);
  border-left: 1px solid var(--border-mid);
  overflow-y: auto;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  pointer-events: auto
}

.panel-close {
  position: absolute;
  top: 1.25rem; right: 1.25rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text-muted);
  width: 32px; height: 32px;
  cursor: pointer;
  font-size: 0.85rem;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
}
.panel-close:hover { color: var(--accent); border-color: var(--accent); }

.panel-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding-right: 2.5rem;
}
.panel-img {
  width: 100px; height: 100px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-mid);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  flex-shrink: 0;
}
.panel-icon { line-height: 1; }
.panel-title-block { display: flex; flex-direction: column; }
.panel-name {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.1;
}
.panel-class {
  font-size: 0.8rem;
  color: var(--text-dim);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 0.3rem;
}

.panel-section {}
.panel-section-label {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.panel-section-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

/* Stat bars */
.stats-grid { display: flex; flex-direction: column; gap: 0.7rem; }
.stat-row { display: grid; grid-template-columns: 80px 1fr 80px; align-items: center; gap: 0.75rem; }
.stat-label {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.stat-bar-wrap {
  height: 4px;
  background: var(--bg-elevated);
  border-radius: 2px;
  overflow: hidden;
}
.stat-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-bright));
  border-radius: 2px;
  transition: width 0.5s ease;
}

/* Mechanic list */
.mechanic-list { display: flex; flex-direction: column; gap: 0.6rem; }
.mechanic-item {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.6;
}
.mechanic-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.panel-lore {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.8;
  font-style: italic;
  border-left: 2px solid var(--accent);
  padding-left: 1rem;
}

/* Panel slide-in */
.panel-enter-active,
.panel-leave-active { transition: all 0.3s ease; }
.panel-enter-from,
.panel-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

/* ── Responsive ─────────────────────────────────────────────── */
@media (max-width: 600px) {
  .enemy-grid { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); }
  .enemy-panel { padding: 1.5rem; }
  .stat-row { grid-template-columns: 65px 1fr 65px; }
}
</style>
