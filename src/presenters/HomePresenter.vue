<script>
import HomeView from "../views/HomeView.vue";
import firebase from 'firebase'
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
    
    goToReviewDeckACB(deckToReview) {
      this.model.selectDeckToReview(deckToReview);
      this.$router.push("/review");
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
