<template>
  <header class="navbar" :class="{ scrolled: scrolled }">
    <div class="nav-inner">
      <RouterLink to="/" class="nav-brand">
        <span class="brand-jm">JM</span><span class="brand-dot">.</span>
      </RouterLink>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <RouterLink to="/" exact-active-class="active" @click="menuOpen = false">Home</RouterLink>
        <RouterLink to="/earthborn" active-class="active" @click="menuOpen = false">Earthborn Evo</RouterLink>
        <RouterLink to="/personal" active-class="active" @click="menuOpen = false">Personal</RouterLink>
      </nav>

      <button class="nav-toggle" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled   = ref(false)
const menuOpen   = ref(false)

function onScroll() { scrolled.value = window.scrollY > 40 }

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1.1rem 0;
  transition: all 0.3s ease;
}
.navbar.scrolled {
  background: rgba(7, 9, 13, 0.92);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  padding: 0.75rem 0;
}

.nav-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  letter-spacing: 0.04em;
  text-decoration: none;
  line-height: 1;
}
.brand-jm  { color: var(--text); }
.brand-dot { color: var(--accent); }

.nav-links {
  display: flex;
  gap: 2.5rem;
}
.nav-links a {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  text-decoration: none;
  position: relative;
  transition: color 0.2s;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -3px; left: 0;
  width: 0; height: 1px;
  background: var(--accent);
  transition: width 0.25s ease;
}
.nav-links a:hover,
.nav-links a.active {
  color: var(--text);
}
.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

/* Toggle */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 28px; height: 28px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.nav-toggle span {
  display: block;
  height: 1.5px;
  background: var(--text-muted);
  border-radius: 2px;
  transition: all 0.25s ease;
  transform-origin: center;
}
.nav-toggle.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.nav-toggle.open span:nth-child(2) { opacity: 0; }
.nav-toggle.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

@media (max-width: 680px) {
  .nav-toggle { display: flex; }
  .nav-links {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(7, 9, 13, 0.97);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease;
  }
  .nav-links.open {
    opacity: 1;
    pointer-events: auto;
  }
  .nav-links a {
    font-size: 1.6rem;
  }
}
</style>
