<template>
  <main>
    <!-- Hero Section -->
    <section>
      <h1>Welcome to my Github Page</h1>
      <p>Game Developer & Programmer</p>
      <div class="link-buttons">
        <router-link to="/games" class="btn-primary">Projects</router-link>
        |
        <router-link to="/about" class="btn-outline">About Me</router-link>
      </div>
    </section>

    <!-- Featured Project -->
    <section>
      <h2 class="home-headers">Featured Project</h2>
      <div>
        <img src="/icon/Logo.png" alt="Featured Game" class="rounded mb-4" style="width: 50%;"/>
        <h3>Earthborn Evo</h3>
        <p>
          An action rogue-like space-shooting game.
        </p>
        <a href="/jm-studio-site/games" class="text-blue-400 hover:underline">Learn more →</a>
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
      <h2 class="home-headers">A Bit About Me</h2>
      <p>
        I am a student at Western Governors University, pursuing a degree in Computer Science. I am also a self-taught game developer utilizing Unreal Engine 5.
      </p>
      <router-link to="/about" class="btn-primary">Read More</router-link>
    </section>

    <!-- Footer -->
    <footer>
      <p>© 2025 Jesse Mota</p>
      <div class="link-buttons">
        <a href="https://github.com/jessem836/" target="_blank" class="hover:text-white">GitHub</a>
        <a href="jessemota836@gmail.com" class="hover:text-white">Email</a>
      </div>
    </footer>
  </main>
</template>
