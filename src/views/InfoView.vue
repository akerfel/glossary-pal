<script setup></script>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div>
    <img
      alt="Glossary Pal logo"
      class="logo"
      src="@/assets/logo.png"
      width="400"
      height="125"
    />
  </div>

  <p class="text">
    Hi and welcome to Glossary Pal; a project for the course DH2642 at KTH.
  </p>
  <p class="text">
    This app can be used as a tool for language learning through vocabulary
    quizzes.
  </p>
  <p class="text">
    You can create your own vocabulary quizzes by pressing the "Create a deck"
    button on the home page. You can give your deck a name, and choose languages
    for the deck. When you add words to your deck, you may manually enter the
    word in the two languages.
  </p>
  <p class="text">
    If you don't know the translation of the word when creating the deck, you
    can press the "Get translation" button to get Google Translate's recommended
    translation of the word. You may also delete words from your decks by
    pressing the red "Delete" button.
  </p>
  <p class="text">
    To start cramming, press the "Review" button on the homepage to start a quiz
    on your chosen deck.
  </p>
  <p class="text">Enjoy the app!</p>
  <p class="text">//Carl, David, Magnus and Shotaro</p>
</template>

<style scoped>
a:link {
  color: blue;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: purple;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}

.logo {
  margin-bottom: 75px;
}

.text {
  color: rgb(255, 255, 255);
  padding-bottom: 10px;
}
</style>
