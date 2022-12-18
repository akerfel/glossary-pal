<script>
import HomeView from "../views/HomeView.vue";
export default {
  components: { HomeView },
  props: {
    model: Object,
    initModel: Function,
  },
  methods: {
    deleteDeckACB(deck) {
      this.model.deleteDeck(deck.id);
    },
    goToCreateDeckACB() {
      this.model.resetCurrentEditDeck();
      this.$router.push("/create");
    },
    goToReviewDeckACB(deckToReview) {
      this.model.resetReviewAttributes();
      this.model.selectDeckToReview(deckToReview);
      this.$router.push("/review");
    },
    goEditDeck(deck) {
      this.model.setCurrentEditDeck(deck);
      this.$router.push("/create");
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
    :onEditDeck="goEditDeck"
  />
</template>
