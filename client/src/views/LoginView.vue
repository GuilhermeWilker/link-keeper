<script setup></script>

<template>
  <div>
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

      <form class="form">
        <h2>Comece gerenciar seus links e sem perde-los de vista!</h2>

        <div class="email_input">
          <label>Email </label>
          <input type="email" placeholder="joabmanoel@email.com" />
        </div>
        <div class="senha_input">
          <label>Senha </label>
          <input type="password" placeholder="********" />
        </div>

        <div class="cadastre-se">
          <router-link to="/register">
            Não possui conta? <span>Cadastre-se aqui!</span>
          </router-link>
        </div>

        <router-link to="/">
          <button>Login</button>
        </router-link>
      </form>
    </main>
  </div>
</template>

<style scoped>
div {
  margin: 0 auto;
  width: 100%;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  margin: 8px 0;
  color: red;
}

.hero {
  border-radius: 8px;
  background-image: url(/images/pic/Gradient.png);
  background-size: cover;
  width: 720px;
  height: 90vh;

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

  height: 115px;
  overflow-y: hidden;
}

.title span {
  display: block;
  height: 120px;

  margin-inline: auto;

  animation: spin_words ease-in-out 6s infinite;
}
.form {
  margin-inline: auto;
  display: flex;
  flex-direction: column;

  padding: 25px;

  width: 390px;
}

.form h2 {
  margin-bottom: 25px;
  font-size: 25px;
}

.form .email_input {
  display: flex;
  flex-direction: column;
}

.form .email_input label {
  font-weight: 600;
}

.form .email_input input {
  padding: 12px 8px;

  border: 1px solid black;
  border-radius: 3px;
  margin-bottom: 15px;
}

.form .senha_input {
  display: flex;
  flex-direction: column;
}

.form .senha_input label {
  font-weight: 600;
}

.form .senha_input input {
  padding: 12px 8px;

  border: 1px solid black;
  border-radius: 3px;
  margin-bottom: 15px;
}

.cadastre-se {
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  color: #a5a5a5;
}

.cadastre-se span {
  text-decoration: underline;
}

.form button {
  cursor: pointer;
  height: 50px;
  width: 100%;

  background-color: #141313;
  border: 1px solid #141313;
  color: #fff;

  font-weight: 600;
  margin-inline: auto;
}

.form button:hover {
  background-color: #2e2d2d;
}
</style>
