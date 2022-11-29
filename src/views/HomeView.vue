<script setup>
import { NButton, NPopconfirm } from "naive-ui";
</script>

<script>
export default {
  props: ["model", "onDeleteDeck"],

  methods: {
    clickedLogoutACB() {
      console.log("Log out user");
    },
    clickedCreateDeckACB() {
      console.log("Create a deck");
    },
    clickedReviewDeckACB(deck) {
      console.log("review deck: " + deck.name + " " + deck.id);
    },
    clickedDeleteDeckACB(deck) {
      console.log("delete deck: " + deck.name + " " + deck.id);
      this.onDeleteDeck(deck);
    },
  },
};
</script>

<template>
  <div class="homeview">
    <div class="banner">
      <n-button @click="clickedLogout()" type="primary" color="#3d3d39"
        >Log out</n-button
      >
    </div>
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
    <p v-if="model.decks.length > 0" class="title">{{ "Review a deck" }}</p>
    <div v-for="deck in model.decks" v-bind:key="deck">
      <div class="deck">
        <span class="deckName">{{ deck.name }}</span>
        <span class="deckLanguages">{{ deck.lang1 }} to {{ deck.lang2 }} </span>
        <span class="deckButtons">
          <n-button type="info" @click="clickedReviewDeckACB(deck)"
            >Review</n-button
          >
          <n-popconfirm @positive-click="clickedDeleteDeckACB(deck)">
            <template #activator>
              <n-button type="error">Delete</n-button>
            </template>
            Do you really want to delete the deck {{ deck.name }}?
          </n-popconfirm>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.homeview {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 440px;
}

.banner {
  align-self: flex-end;
}

.logo {
  margin-bottom: 75px;
}
.createDeck {
  margin-bottom: 50px;
}

.title {
  align-self: start;
  margin-left: 8px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 24px;
}
.deck {
  margin: 5px;
  background-color: #4caf50;
  padding: 10px 15px;
  display: inline-block;
  font-size: 18px;
  border-radius: 8px;
  border: 2px solid rgb(206, 50, 50);
}

.deckName {
  margin-right: 10px;
  width: 100px;
  display: inline-block;
  font-weight: bold;
  color: white;
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
