<script setup>
import { NButton, NPopconfirm, NTooltip } from "naive-ui";
import { notificationApiInjectionKey } from "naive-ui/es/notification/src/NotificationProvider";
</script>

<script>
export default {
  props: ["model", "onDeleteDeck", "onGoToCreateDeck", "onGoToReviewDeck"],

  methods: {
    clickedCreateDeckACB() {
      this.onGoToCreateDeck();
    },
    clickedReviewDeckACB(deck) {
      console.log("review deck: " + deck.name + " " + deck.id);
      this.onGoToReviewDeck(deck);
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
    <div>
      <img
        alt="Glossary Pal logo"
        class="logo"
        src="@/assets/logo.png"
        width="400"
        height="125"
      />
    </div>

    <n-tooltip trigger="hover">
      <template #trigger>
        <n-button
          type="primary"
          size="large"
          class="createDeck"
          @click="clickedCreateDeckACB"
          >Create a deck</n-button
        >
      </template>
      Click here to create a new glossary deck and sharpen your language skills!
    </n-tooltip>

    <p v-if="model.decks.length > 0" class="title">{{ "Review a deck" }}</p>
    <div v-for="deck in model.decks" v-bind:key="deck">
      <div class="deck">
        <div class="deckName">{{ deck.name }}</div>
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
  width: 442px;
}

.deckName {
  font-weight: bold;
  color: white;
}

.deckLanguages {
  font-size: 12px;
  color: rgb(48, 48, 48);
}

.deckButtons {
  float: right;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 15px;
}
</style>
