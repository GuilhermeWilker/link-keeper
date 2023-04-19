<script setup>
let linkTitle = "Lapa Ninja";
</script>

<template>
  <main>
    <header>
      <h2>Sites de Referências para Design</h2>
      <div class="modal">
        <input type="text" placeholder="Nome do site.." />
        <input type="text" placeholder="https://..." />
        <button>
          <img src="/images/icons/plus-icon.png" />
        </button>
      </div>
    </header>

    <article class="link_card">
      <div class="link_card-img">
        <img src="/images/pic/template-img-link.png" alt="" />
      </div>

      <h3 class="link_card-title">
        {{ linkTitle }}
      </h3>
    </article>
  </main>
</template>

<style scoped>
main {
  margin: 140px auto;
  width: 935px;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal {
  padding: 15px;
  margin-top: 14px;
  width: 400px;

  background: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  display: flex;
  align-items: center;
  gap: 10px;
}

.modal input {
  padding: 8px;
}

.modal button {
  object-fit: fill;
  width: 50px;
  height: 40px;

  cursor: pointer;
  background-color: transparent;
  border: none;
}

.modal button img {
  width: 100%;
}

.link_card {
  margin-top: 40px;
  width: 303px;
  height: 268px;

  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  padding: 15px;
}

.link_card-img {
  background-color: #b9b9b9;
  border-radius: 5px;
  width: 272px;
  height: 197px;

  margin-bottom: 14px;
}
</style>
