<script>
export default {
  props: ["decks"],

  methods: {
    clickedCreateDeck() {
      console.log("Create a deck");
    },
    clickedReviewListACB(deckName) {
      console.log("review deck: " + deckName);
    },
    clickedEditListACB(deckName) {
      console.log("edit deck: " + deckName);
    },
    clickedDeleteListACB(deckName) {
      console.log("delete deck: " + deckName);
    },
  },
};
</script>

<template>
  <button class="createDeck" @click="clickedCreateDeck">Create a deck</button>
  <p class="title">{{ "Review a deck" }}</p>
  <div v-for="deck in decks" v-bind:key="deck">
    <div class="deck">
      <span class="deckName">{{ deck.name }}</span>
      <span class="deckLanguages">{{ deck.lang1 }} to {{ deck.lang2 }} </span>

      <span class="deckButtons">
        <button @click="clickedReviewListACB(deck.name)">Review</button>
        <button @click="clickedEditListACB(deck.name)">Edit</button>
        <button @click="clickedDeleteListACB(deck.name)">Delete</button>
      </span>
    </div>
  </div>
</template>

<style scoped>
.createDeck {
}

.title {
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 24px;
}
.deck {
  margin: 5px auto;
  color: rgb(0, 255, 13);
  font-weight: bold;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  width: 435px;
  border-radius: 8px;
  border: 2px solid rgb(206, 50, 50);
}

.deckName {
  text-align: left;
  float: left;
  width: 100px;
}

.deckLanguages {
  font-size: 12px;
  color: rgb(34, 34, 34);
  margin: 15px;
  float: center;
  width: 100px;
}
</style>
