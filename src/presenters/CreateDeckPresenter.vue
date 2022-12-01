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
    }
  },
};
</script>

<template>
  <CreateDeckView :model="model" :onCreateDeck="createdDeckACB"/>
</template>
