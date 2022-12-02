<script>
import Deck from "../Deck";
import ReviewDeckView from "../views/ReviewDeckView.vue";
export default {
  components: { ReviewDeckView },
  props: {
    model: Object,
  },
  methods: {
    confirmAnswerACB() {
      
    },
  },

  data() { 
    // deckId is sent from router
    return {deck: this.model.getDeck(parseInt(this.$route.params.deckId))};
  }
};
</script>

<template>
  <ReviewDeckView 
    :model="model" 
    :onConfirmAnswer="confirmAnswerACB"
    :deck="this.deck"/>
</template>