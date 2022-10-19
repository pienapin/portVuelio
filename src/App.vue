<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeroSection from "./components/HeroSection.vue";
</script>

<template>
  <header>
    <img
      alt="Alvien Cenna"
      class="logo"
      src="./assets/me.png"
      width="200"
      height="200"
    />

    <div class="wrapper">
      <HeroSection />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  margin-bottom: 2rem;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 0.25rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  transition: 0.3s;
}

nav a:first-of-type {
  border: 0;
}
</style>
