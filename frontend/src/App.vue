<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Produtos</RouterLink>
    <RouterLink to="/cadastrarProduto">Cadastrar Produtos</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
.container {
  margin-top: 2rem;
  line-height: 1.5;
  min-height: 100vh;
}

nav {
  width: 100%;

  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .container {
    line-height: 1.5;
    min-height: 100vh;
  }

  nav {
    margin-left: -1rem;
    font-size: 1rem;

    padding: 0;
  }
}
</style>
