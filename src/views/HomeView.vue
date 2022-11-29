<script setup>
import { NButton } from "naive-ui";
</script>

<script>
export default {
  props: ["decks"],

  methods: {
    clickedCreateDeck() {
      console.log("Create a deck");
    },
    clickedReviewListACB(deck) {
      console.log("review deck: " + deck.name + " " + deck.id);
    },
    clickedDeleteListACB(deck) {
      console.log("delete deck: " + deck.name + " " + deck.id);
    },
  },
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
  <n-button
    type="primary"
    size="large"
    class="createDeck"
    @click="clickedCreateDeck"
    >Create a deck</n-button
  >
  <p class="title">{{ "Review a deck" }}</p>
  <div v-for="deck in decks" v-bind:key="deck">
    <div class="deck">
      <span class="deckName">{{ deck.name }}</span>
      <span class="deckLanguages">{{ deck.lang1 }} to {{ deck.lang2 }} </span>
      <span class="deckButtons">
        <n-button type="info" @click="clickedReviewListACB(deck)">Review</n-button>
        <n-button
          type="error"
          @click="clickedDeleteListACB(deck)"
          >Delete</n-button
        >
      </span>
    </div>
  </div>
</template>

<style scoped>
.logo {
  margin-bottom: 75px;
}
.createDeck {
  margin-bottom: 50px;
}

.title {
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 24px;
}
.deck {
  margin: 5px auto;
  color: rgb(0, 255, 13);
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  width: 435px;
  border-radius: 8px;
  border: 2px solid rgb(206, 50, 50);
}

.deckName {
  margin-right: 10px;
  width: 100px;
  display: inline-block;
  font-weight: bold;
}

.deckLanguages {
  font-size: 12px;
  color: rgb(48, 48, 48);
  display: inline-block;
  margin-right: 30px;
  width: 100px;
}

.deckButtons {
  float: right;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 15px;
}

</style>
