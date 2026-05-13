<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-inner">
        <span class="footer-brand">JM<span class="dot">.</span></span>
        <p class="footer-copy">© {{ year }} Jesse M. and Hoots Games | Built with Vue 3 + Vite.</p>
        <div class="footer-links">
          <a href="https://github.com/jessem836" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border);
  padding: 2rem 0;
  margin-top: 4rem;
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.footer-brand {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--text);
}
.footer-brand .dot { color: var(--accent); }
.footer-copy { color: var(--text-dim); font-size: 0.85rem; }
.footer-links { display: flex; gap: 1.5rem; }
.footer-links a {
  font-size: 0.85rem;
  color: var(--text-muted);
  transition: color 0.2s;
}
.footer-links a:hover { color: var(--accent); }
</style>
