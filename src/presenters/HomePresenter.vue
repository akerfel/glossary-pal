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
  },
};
</script>

<template>
  <HomeView :model="model" :onDeleteDeck="deleteDeckACB" />
</template>
