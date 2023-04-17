<script setup></script>

<template>
  <main>
    <section class="hero">
      <h4 class="subtitle">O melhor lugar para salvar links de</h4>
      <h1 class="title">
        <span>ARTIGOS</span>
        <span>VIDEOS</span>
        <span>PODCASTS</span>
        <span>SITES</span>
        <span>ARTIGOS</span>
      </h1>
    </section>
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
  width: 100%;

  padding: 30px;
}

.hero {
  background-image: url(/images/pic/Gradient.png);
  border-radius: 8px;
  background-size: cover;
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.subtitle {
  font-weight: 600;
  font-size: 25px;
}

.title {
  font-weight: 800;
  font-size: 110px;
  font-family: "Montserrat", sans-serif;

  align-items: center;
  display: flex;
  flex-direction: column;

  height: 120px;
  overflow-y: hidden;
}

.title span {
  display: block;
  height: 130px;

  margin-inline: auto;

  animation: spin_words ease-in-out 6s infinite;
}
</style>
