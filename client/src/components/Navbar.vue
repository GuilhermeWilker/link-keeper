<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h3 class="logo">Link keeper</h3>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-link class="btn_cta" to="/">Começar hoje</router-link>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 15px 20px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;

  padding: 13px;
  width: 300px;

  background: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
}

nav a:hover {
  font-weight: 600;
}

.btn_cta {
  padding: 15px 20px;
  color: white;
  background-color: #222222;
  transition: 0.2s;
}

.btn_cta:hover {
  background-color: #333333;
}
</style>
