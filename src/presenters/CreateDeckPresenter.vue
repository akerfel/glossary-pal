<script>
import CreateDeckView from "../views/CreateDeckView.vue";
export default {
  components: { CreateDeckView },
  props: {
    model: Object,
  },
  methods: {
    addDeck(deck) {
      this.model.decks.push(deck);
    },
    createdDeckACB(deck) {
      this.addDeck(deck);
    },
  },
};
</script>

<template>
  <CreateDeckView :model="model" :onCreateDeck="createdDeckACB" />
</template>
