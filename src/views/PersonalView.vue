<template>
  <main>

    <!-- ═══════════════ HERO ═══════════════ -->
<section class="personal-hero">
      <div class="ph-grid"></div>
      <div class="container ph-content">
        <p class="hero-eyebrow">More about me</p>
        <h1 class="ph-title">Personal</h1>
        <p class="hero-body">
          A more personal look into my hobbies and interests outside of game development and IT. I am a metal music 
          enthusiast, music CD collector, national park explorer, and a minifig painter. I also have a soft spot for sci-fi or dark fantasy, both in books and games.
        </p>
      </div>
    </section>

    <!-- ═══════════════ ABOUT ═══════════════ -->
    <section class="section">
      <div class="container">
        <p class="section-label">personal</p>
        <h2 class="section-title">Hobbies</h2>
        <div class="about-extended">
          <div class="about-block">
            <h3 class="about-block-title">National Parks</h3>
            <p>
              I am by no means a photographer, but I have always wanted to see all the National Parks with my significant other. So far, as of writing this, 
              I have visited all the parks in Arizona and Washington. 
              <br><br>
              Next on my list are Zion and Bryce Canyon National Parks, located in Utah. With 
              Glacier National Park or Yellowstone and Teton National Park being next after that. 
              I have a long way to go, but I am excited to see more of the beautiful nature this country has to offer.
            </p>
            <p>
              Out of the 6 I have visited, Mount Rainier is by far my favorite and recommend anyone visit it. Below are some images I captured on my travels.
            </p>
          </div>
          <div class="about-block">
            <h3 class="about-block-title">Warhammer 40K</h3>
            <p>
              Another hobby I enjoy is anything Warhammer 40K. Warhammer is a sci-fi fantasy universe set in the grim far distant future of the year
              40,000. 
            </p>
            <p>
              I enjoy reading books about the lore and history of the universe. My favorite book is the Night Lord omnibus, following the 
              traitorous Night Lords as they try to survive in a hostile galaxy. 
              <br> <br>
              Another aspect I enjoy is minifig painting, below are some images of figures I have painted. 
              I also have a large collection of unpainted figures that I hope to get to one day.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="container"><div class="divider"></div></div>

<!-- ═══════════════ NATIONAL PARKS ═══════════════ -->
    <section class="section">
      <div class="container">
        <p class="section-label">Photography</p>
        <h2 class="section-title">National Parks</h2>
        <p class="gallery-intro">
          Highlights of my favorite pictures taken at various National Parks.
        </p>

        <div class="photo-filter">
          <button
            v-for="park in parkFilters"
            :key="park"
            class="filter-btn"
            :class="{ active: activePark === park }"
            @click="activePark = park"
          >{{ park }}</button>
        </div>

        <div class="photo-grid">
          <div
            v-for="(photo, i) in filteredParks"
            :key="i"
            class="photo-card"
            @click="openLightbox(photo)"
          >
            <div class="photo-placeholder">
             <img :src="photo.src" :alt="photo.title" class="photo-placeholder" />
            </div>
            <div class="photo-overlay">
              <span class="photo-name">{{ photo.title }}</span>
              <span class="photo-park">{{ photo.park }}</span>
            </div>
          </div>
        </div>

        <p class="photo-note">
          View the full gallery <a href="https://drive.google.com/drive/folders/1qRQXx95F7FTv0aPTb5pvRY5adtUkyJJx?usp=sharing" target="_blank">here!</a> <em>Note: I am not a professional photographer</em>
        </p>
      </div>
    </section>

    <div class="container"><div class="divider"></div></div>

<section onload="autoPlay()">
  <div class="carousel-container">
    <!-- Slides -->
    <div class="carousel-track">
          <div v-for="(fig, index) in minifigs"
                :key="index" class="carousel-slide"
                :class="{ active: index === currentIndex }">
                
        <img :src="fig.src" :alt="fig.name" style="background-image: linear-gradient(to top, #07090d 0%, rgba(255,255,255,0) 25%)" />
        <div class="text">Caption Text</div>
      </div>
    </div>

    <!-- Controls -->
    <button class="prev" @click="prevSlide">◀</button>
    <button class="next" @click="nextSlide">▶</button>

    <!-- Indicators -->
    <div class="indicators">
      <span 
        v-for="(fig, index) in minifigs" 
        :key="index" 
        :class="{ active: index === currentIndex }" 
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</section>

    <!-- ═══════════════ MINIFIGS ═══════════════ -->
    <section class="section">
      <div class="container">
        <p class="section-label">Collection</p>
        <h2 class="section-title">Minifigs</h2>
        <p class="gallery-intro">
          A small selection of painted minifigs.
        </p>
        <div class="photo-grid minifig-grid">
          <div
            v-for="(fig, i) in minifigs"
            :key="i"
            class="photo-card"
          >
            <div class="photo-placeholder">
              <img :src="fig.src" :alt="fig.name" class="photo-placeholder" />
            </div>
            <div class="photo-overlay">
              <span class="photo-name">{{ fig.name }}</span>
              <span class="photo-park">{{ fig.theme }}</span>
            </div>
          </div>
            <p class="photo-note">
            More on <a href="https://www.instagram.com/hootspaint/" target="_blank">Instagram!</a>
            </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════ LIGHTBOX ═══════════════ -->
    <Transition name="lb">
      <div v-if="lightbox" class="lightbox" @click="lightbox = null">
        <div class="lightbox-inner" @click.stop>
          <div class="lightbox-img-wrap">
            <div class="lb-placeholder">
              <img :src="lightbox.src" :alt="lightbox.title" class="photo-placeholder" />n
              <p>{{ lightbox.title }}</p>
              <p style="font-size:0.8rem;color:var(--text-dim);">{{ lightbox.park }}</p>
            </div>
          </div>
          <button class="lb-close" @click="lightbox = null">✕</button>
        </div>
      </div>
    </Transition>

  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const activePark = ref('All')
const lightbox   = ref(null)

const parkPhotos = [
  { title: 'Sunrise',          park: 'Mt. Rainier',         src: new URL('/img/parks/Rainier_3.jpg', import.meta.url).href },
  { title: 'Paradise',         park: 'Mt. Rainier',         src: new URL('/img/parks/Rainier_2.jpg', import.meta.url).href },
  { title: 'Saguaro West',     park: 'Saguaro',             src: new URL('/img/parks/Saguaro_2.jpg', import.meta.url).href },
  { title: 'Blue Mesa',        park: 'Petrified Forest',    src: new URL('/img/parks/Petrified_1.jpg', import.meta.url).href },
  { title: 'Huricane Ridge',   park: 'Olympic',             src: new URL('/img/parks/Olympic_1.jpg', import.meta.url).href   },
  { title: 'Sol Duc',          park: 'Olympic',             src: new URL('/img/parks/Olympic_2.jpg', import.meta.url).href   },
  { title: 'Grandeur Point',   park: 'Grand Canyon',        src: new URL('/img/parks/GrandCanyon_1.jpg', import.meta.url).href   },
  { title: 'Diablo Lake',      park: 'North Cascades',      src: new URL('/img/parks/Cascades_2.jpg', import.meta.url).href   },
  { title: 'Paradise',         park: 'Mt. Rainier',         src: new URL('/img/parks/Rainier_1.jpg', import.meta.url).href   },
  { title: 'Diablo Lake',      park: 'North Cascades',      src: new URL('/img/parks/Cascades_3.jpg', import.meta.url).href   }, 
  { title: 'Saguaro West',     park: 'Saguaro',             src: new URL('/img/parks/Saguaro_1.jpg', import.meta.url).href   },
  { title: 'Diablo Lake',      park: 'North Cascades',      src: new URL('/img/parks/Cascades_1.jpg', import.meta.url).href  },
  { title: 'Mather Point',     park: 'Grand Canyon',        src: new URL('/img/parks/GrandCanyon_2.jpg', import.meta.url).href },
  { title: 'Painted Desert',   park: 'Petrified Forest',    src: new URL('/img/parks/Petrified_2.jpg', import.meta.url).href }
]

const parkFilters = computed(() => {
  const tags = [...new Set(parkPhotos.map(p => p.park))]
  return ['All', ...tags]
})

const filteredParks = computed(() =>
  activePark.value === 'All'
    ? parkPhotos
    : parkPhotos.filter(p => p.park === activePark.value)
)

const minifigs = [
  { name: '1st Claw',                     theme: 'Night Lords',               src: new URL('/img/figures/NL_3.jpg', import.meta.url).href },
  { name: 'Heavy Lokhust Destroyer',      theme: 'Necrons',                   src: new URL('/img/figures/Necron_1.jpg', import.meta.url).href },
  { name: 'Talos Valcoran',               theme: 'Night Lords',               src: new URL('/img/figures/Talos_1.jpg', import.meta.url).href },
  { name: 'Exultia Skirmish',             theme: 'Necron & Night Lords',      src: new URL('/img/figures/NL_2.jpg', import.meta.url).href },
]

function openLightbox(photo) { lightbox.value = photo }

const currentIndex = ref(-1);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % minifigs.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + minifigs.length) % minifigs.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

autoPlay();

function autoPlay() {
  nextSlide();
  setTimeout(autoPlay, 5000);
}
</script>

<style scoped>
.text {
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;  
  color: white;
  font-size: 16px;
  font-weight: 700px;
  padding: 8px 12px;
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  margin: 0 auto;
  aspect-ratio: 4/3; /* Ensures container has a height when slides are absolute */
}

.carousel-track {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out;
  z-index: 1;
}

/* The active slide fades in smoothly */
.carousel-slide.active {
  opacity: 1;
  visibility: visible;
  z-index: 2;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Keeps image looking great inside fixed frame */
  display: block;
}

.prev { 
  font-size: 16px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;  
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  left: 10px; 
  z-index: 10;
}
.next { 
  font-size: 16px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;  
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;right: 10px; 
  z-index: 10;
}

.indicators {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.indicators span {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.indicators span.active {
  background: white;
}
/* ── Page Hero ─────────────────────────────────────────────── */
.hero-eyebrow {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.5rem;
}
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
.ph-content { position: relative; z-index: 1; padding-top: 8rem; }
.ph-title {
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 700;
  color: var(--text);
  margin: 0.4rem 0 0.6rem;
}
.ph-sub {
  font-family: 'Rajdhani', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

/* ── About Extended ────────────────────────────────────────── */
.about-extended {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2.5rem;
}
.about-block {}
.about-block-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 1rem;
}
.about-block p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 1rem;
}
.about-block p:last-child { margin-bottom: 0; }
.about-block em { color: var(--text); font-style: normal; }

/* ── Gallery ───────────────────────────────────────────────── */
.gallery-intro {
  color: var(--text-muted);
  font-size: 0.95rem;
  max-width: 600px;
  margin-bottom: 1.75rem;
  line-height: 1.7;
}
.gallery-intro code {
  font-family: 'Fira Mono', monospace;
  font-size: 0.85rem;
  color: var(--accent);
  background: var(--accent-dim);
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
}

/* ── Filter ────────────────────────────────────────────────── */
.photo-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.75rem;
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
.filter-btn.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

/* ── Photo Grid ────────────────────────────────────────────── */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}
.minifig-grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.photo-card {
  position: relative;
  aspect-ratio: 4/3;
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  border: 1px solid var(--border);
  transition: all 0.25s ease;
}
.photo-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.5);
}
.photo-card:hover .photo-overlay { opacity: 1; }

.photo-placeholder {
  width: 100%; height: 100%;
  background: var(--bg-elevated);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.photo-placeholder-icon { font-size: 2.5rem; }
.photo-placeholder-label {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  color: var(--text-dim);
  text-align: center;
  padding: 0 1rem;
}

.photo-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(7,9,13,0.9), transparent);
  opacity: 0;
  transition: opacity 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.photo-name {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text);
}
.photo-park {
  font-size: 0.75rem;
  color: var(--accent);
  letter-spacing: 0.06em;
}

.photo-note {
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: var(--text-dim);
  line-height: 1.6;
}
.photo-note code {
  font-family: 'Fira Mono', monospace;
  color: var(--accent);
  background: var(--accent-dim);
  padding: 0.1rem 0.35rem;
  border-radius: 3px;
  font-size: 0.8rem;
}

/* ── Lightbox ──────────────────────────────────────────────── */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(7,9,13,0.92);
  backdrop-filter: blur(10px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.lightbox-inner {
  position: relative;
  max-width: 875px;
  width: 100%;
}
.lightbox-img-wrap {
  border-radius: var(--radius);
  overflow: hidden;
  border: 1.5px solid var(--border-mid);
}
.lb-placeholder {
  aspect-ratio: 16/9;
  background: var(--bg-elevated);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: var(--text-muted);
}
.lb-close {
  position: absolute;
  top: -2.5rem; right: 0;
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s;
}
.lb-close:hover { color: var(--accent); }

.lb-enter-active, .lb-leave-active { transition: opacity 0.2s ease; }
.lb-enter-from, .lb-leave-to { opacity: 0; }

/* ── Responsive ─────────────────────────────────────────────── */
@media (max-width: 700px) {
  .about-extended { grid-template-columns: 1fr; }
  .photo-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
}
</style>
