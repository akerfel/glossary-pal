<script>
import CreateDeckView from "../views/CreateDeckView.vue";
export default {
  components: { CreateDeckView },
  props: {
    model: Object,
  },
  methods: {
    createdDeckACB(deck) {
      this.model.addDeck(deck);
      function printName(deck) {
        console.log(deck.name)
      }
      this.model.decks.map(printName)
    }
  },
};
</script>

<template>
  <CreateDeckView :model="model" :onCreateDeck="createdDeckACB"/>
</template>
