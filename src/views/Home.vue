<template>
  <main>
    <!-- Hero Section -->
    <section>
      <h1>Website Under Construction!</h1>
      <p>Take a look around in the meantime!</p>
      <div class="link-buttons">
        <router-link to="/games" class="btn-primary">Projects</router-link>
        |
        <router-link to="/gallery" class="btn-outline">Gallery</router-link>
      </div>
    </section>

    <!-- Featured Project -->
    <section>
      <h2 class="home-headers">Featured Project</h2>
      <div>
        <img src="/icon/Logo.png" alt="Featured Game" class="rounded mb-4" style="width: 50%;"/>
        <h3>Earthborn Evo</h3>
        <p>
          A fast-paced rogue-like space shooter where you pilot experimental ships against waves of alien fleets.
          <br>
          The United Earthborn Systems must defend against the Xiual Mind's invasion by destroying their Conduit, a powerful megastructure.
          Collect psionic shards from defeated ships to evolve your ship and adapt to the challenges ahead.
        </p>
        <router-link to="/games" class="btn-primary">Learn more →</router-link>
      </div>
    </section>

    <!-- Skills Snapshot -->
    <h2 class="home-headers">Technical Skills</h2>
    <section class="skills-snapshot">

      <div class="skills">
        <h3>Languages</h3>
        <ul>
          <li>C++</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>Blueprint Visual Script</li>
        </ul>
      </div>

      <div class="skills">
        <h3>Front-End</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Vite + Vue</li>
        </ul>
      </div>

      <div class="skills">
        <h3>Tools, Database, and OS</h3>
        <ul>
          <li>Unreal Engine 5</li>
          <li>SQL</li>
          <li>Windows</li>
          <li>Github</li>
        </ul>
      </div>
    </section>

    <!-- Mini About -->
    <section>
      <h2 class="home-headers">About</h2>
      <p>
        Hello, my name is Jesse Mota and I am currently a student at Western Governors University, pursuing a degree in Computer Science.
        <br>
        I am also a self-taught game developer utilizing Unreal Engine 5.
      </p> 

      <p>
        In my free time I enjoy miniature painting, playing video games, reading, and exploring the National Parks. 
        <br>
        Check out my gallery for more pictures of my hobbies and projects!
      </p>

    <section class="home_images">
      <div
        class="img_home_container"
        @mouseenter="hoveredText = 'Mt. Rainier National Park'"
        @mouseleave="hoveredText = null"
      ><a href="/jm-studio-site/img/Rainier_2.jpg" target="_blank" rel="noopener noreferrer">
        <img src="/img/Rainier_2.jpg" alt="Mt Rainier" class="img_home" />
      </a>
      </div>

      <div
        class="img_home_container"
        @mouseenter="hoveredText = 'Saguaro National Park'"
        @mouseleave="hoveredText = null"
      >
      <a href="/jm-studio-site/img/Saguaro_1.jpg" target="_blank" rel="noopener noreferrer">
        <img src="/img/Saguaro_1.jpg" alt="Saguaro" class="img_home" />
      </a>
      </div>

      <div
        class="img_home_container"
        @mouseenter="hoveredText = 'Olympic National Park'"
        @mouseleave="hoveredText = null"
      ><a href="/jm-studio-site/img/Olympic_1.jpg" target="_blank" rel="noopener noreferrer">
        <img src="/img/Olympic_1.jpg" alt="Olympics" class="img_home" />
      </a>
      </div>

     
    </section>
     <div class="overlay-text">
        {{ hoveredText || 'National Park Photos' }}
      </div>
    <router-link to="/gallery" class="btn-primary">More Here</router-link>

    </section>

    <!-- Footer -->
    <footer>
      <p>© 2025 Jesse Mota</p>
      <div class="link-buttons">
        <a href="https://github.com/jessem836/" target="_blank" class="hover:text-white">GitHub</a>
      </div>
    </footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      hoveredText: null
    };
  }
};
</script>