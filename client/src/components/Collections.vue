<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

// Lógica do Modal de adicionar Coleções
const isModalOpen = ref(false);
function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

// Lógica de coleções ao Board
const inputValue = ref("");
const collections = ref([]);

// Renderizando as coleções da API
const loadCollectionsFromStorage = () => {
  fetch("http://localhost:3000/collection")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((collection) => {
        collections.value.push({ id: collection.id, name: collection.name });
      });
    })
    .catch((err) => console.log(err));
};

onMounted(() => {
  loadCollectionsFromStorage();
});

// Adicionando coleções
const createCollection = () => {
  let name = inputValue.value;
  closeModal();

  fetch("http://localhost:3000/collection", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      window.location.reload();
    });
};

// Deletando coleções
const deleteCollection = (id) => {
  fetch(`http://localhost:3000/collection/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Coleção com id ${data.id} excluída`);
      collections.value = collections.value.filter(
        (collection) => collection.id !== data.id
      );

      window.location.reload();
    })
    .catch((err) => console.log(err));
};
</script>

<template>
  <main>
    <!-- Adicionar Coleção -->
    <header class="collection_header">
      <h3>Sua Coleção</h3>
      <button @click="openModal" class="collection_button">
        <img src="/images/icons/plus-icon.png" alt="" />
        Criar nova Coleção
      </button>

      <!-- Modal Adicionar Coleção -->
      <transition name="fade" appear>
        <div v-if="isModalOpen" class="collection_modal">
          <p>Nome da sua coleção</p>
          <input
            type="text"
            v-model="inputValue"
            placeholder="Digite o nome da sua coleção"
          />
          <button @click.prevent="createCollection">Add</button>
        </div>
      </transition>
    </header>

    <!-- Coleções -->
    <aside id="collections" class="collections">
      <!-- Tool tip -->
      <div class="collection_paragraph">
        <p>
          Mantenha seus links ainda mais organizados criando coleções, separando
          por categoria os seus interesses..
        </p>
      </div>

      <!-- Coleções -->
      <div v-for="(collection, index) in collections" :key="index">
        <router-link to="/collection" class="collection">
          <img src="/images/icons/folder-icon.png" />
          <p>{{ collection.name }}</p>
          <button @click="deleteCollection(`${collection.id}`)">&times;</button>
        </router-link>
      </div>
    </aside>
  </main>
</template>

<style scoped>
main {
  width: 100%;
}

.collection button {
  margin-inline-start: 40%;
  border-radius: 50%;
  border: 1px solid #818181;
  padding: 3px 5px;

  font-weight: 800;
  cursor: pointer;
}

.collection_header {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 50px auto;

  width: 385px;

  text-align: center;
}

.collection_button {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 17px;

  width: 320px;
  height: 54px;
  font-size: 15px;

  border: 1px solid #e2e2e2;
  background: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  cursor: pointer;
}

.collection_button:hover {
  background-color: #fcfcfc;
}

.collections {
  padding-top: 20px;
  margin: 0 auto;
  width: 780px;
  margin-top: 50px;
  border-top: 2px solid #eeeeee;

  display: flex;
  flex-wrap: wrap;

  gap: 18px;
}

.collection {
  display: flex;
  align-items: center;
  gap: 25px;
  font-weight: 600;

  font-size: 18px;

  width: 380px;
  height: 55px;
  background: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  cursor: pointer;
}

.collection:hover {
  background-color: #fcfcfc;
}

.collection img {
  padding-left: 20px;
}

.collection_modal {
  padding: 15px;
  margin-top: 14px;
  width: 390px;

  background: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
}
.collection_modal p {
  font-size: 15px;
  text-align: left;
  font-weight: 600;

  margin-bottom: 4px;
}

.collection_modal input {
  width: 300px;
  padding: 8px 5px;
  margin-right: 15px;
}

.collection_modal button {
  padding: 7px;
  cursor: pointer;
}

.collection_paragraph {
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #818181;
}

.collection_paragraph p {
  width: 320px;
  font-family: "Work Sans", sans-serif;
}
</style>
