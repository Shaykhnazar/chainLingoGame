<template>
  <div class="min-h-screen flex flex-col items-center bg-gray-100">
    <!-- Header -->
    <header class="w-full py-4 bg-blue-600 text-white text-center shadow-lg">
      <h1 class="text-2xl font-bold">Word Chain Game</h1>
    </header>

    <!-- Main Game Area -->
    <main class="flex-1 flex flex-col items-center justify-center w-full p-4">
      <GameArea />
    </main>

    <!-- Footer -->
    <footer class="w-full py-4 bg-blue-600 text-white text-center">
      <p>© 2024 WordChain. All rights reserved.</p>
    </footer>
  </div>
</template>
<script lang="ts">
import GameArea from './components/GameArea.vue'

export default {
  name: 'App',
  components: {
    GameArea,
  },
}
</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
