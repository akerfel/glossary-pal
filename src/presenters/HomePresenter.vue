<script>
import HomeView from "../views/HomeView.vue";

export default {
  components: { HomeView },
  props: {
    model: Object,
  },
  methods: {
    deleteDeckACB(deck) {
      this.model.deleteDeck(deck.id);
    },
    goToCreateDeckACB() {
      this.$router.push("/create");
    },
    goToReviewDeckACB(deckID) {
      this.$router.push("/review/" + deckID);
    },
  },
};
</script>

<template>
  <HomeView
    :model="model"
    :onDeleteDeck="deleteDeckACB"
    :onGoToCreateDeck="goToCreateDeckACB"
    :onGoToReviewDeck="goToReviewDeckACB"
  />
</template>
