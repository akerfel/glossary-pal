<script>
import HomeView from "../views/HomeView.vue";
import GlossaryModel from "@/GlossaryModel";
export default {
  // In order to access the View
  // in the Template
  components: { HomeView },
  data() {
    return {
      decks: this.model.decks,
    };
  },
  props: {
    model: GlossaryModel,
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
