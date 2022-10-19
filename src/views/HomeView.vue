<script setup></script>

<template>
  <div class="about">
    <h1>About</h1>
    <h2>Hi, it's Alvien Cenna!</h2>
    <p>
      I am a perfectionist task-driven solution-oriented person. Generalist who
      seeks to gain expertise in a field. Skill and knowledge of programming
      with decent problem-solving and good background of mathematics and
      algorithm. Familiar with Microsoft Office, Adobe Photoshop and Adobe
      Illustrator. A Linux and Open-Source enthusiast. Interest in innovating,
      developing and building things.
    </p>
  </div>

  <div class="divider"></div>

  <div class="proj">
    <h1>Project</h1>
    <h3>Some projects i built</h3>
    <div class="projects">
      <router-link to="/projects/kukertui">
        <div class="project">
          <img src="/src/assets/kukertui.gif" alt="kukertui" width="85%" />
          <h3>KukerTUI</h3>
        </div>
      </router-link>
      <router-link to="/projects/gettinboxed">
        <div class="project">
          <img src="/src/assets/gettinboxed.png" alt="gettinboxed" width="80%" />
          <h3>GettinBoxed</h3>
        </div>
      </router-link>
      <router-link href="/projects/portfoliotailwind">
        <div class="project">
          <img
            src="/src/assets/portfoliotailwind.png"
            alt="portfoliotailwind"
            width="92%"
          />
          <h3>Portfolio Website with Tailwind</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
}

.about h1 {
  margin-bottom: 1rem;
}

.proj {
  text-align: center;
}

.proj h3 {
  margin-bottom: 1rem;
}

.projects {
  display: grid;
  grid-auto-flow: column;
}

.project {
  align-self: center;
}

.divider {
  width: 95%;
  border-top: 2px solid black;
  margin: 2rem auto 2rem;
}

@media (max-width: 768px) {
  .projects {
    grid-auto-flow: row;
  }
}
</style>
