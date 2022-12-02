<script>
import Deck from "../Deck";
import ReviewDeckView from "../views/ReviewDeckView.vue";
export default {
  components: { ReviewDeckView },

  props: {
    model: Object,
  },

  data() { 
    return {
      wordToTranslate: this.model.getWordToTranslate()
    };
  },
  
  methods: {
    confirmAnswerACB() {
      console.log("Confirmed answer")
    },
  },
};
</script>

<template>
  <ReviewDeckView 
    :wordToTranslate="wordToTranslate" 
    :onConfirmAnswer="confirmAnswerACB"/>
</template>