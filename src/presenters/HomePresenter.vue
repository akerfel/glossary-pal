<script>
import HomeView from "../views/HomeView.vue";
import { RouterLink, RouterView } from "vue-router";

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
  },
};
</script>

<template>
  <HomeView
    :model="model"
    :onDeleteDeck="deleteDeckACB"
    :onGoToCreateDeck="goToCreateDeckACB"
  />
</template>
