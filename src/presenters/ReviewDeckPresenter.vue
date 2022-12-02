<script>
import Deck from "../Deck";
import ReviewDeckView from "../views/ReviewDeckView.vue";
export default {
  components: { ReviewDeckView },

  props: {
    model: Object,
  },

  methods: {
    confirmedAnswer(answer) {
      this.hasAnswered = true;
      console.log("Answered: " + answer)
      if (this.model.answerIsCorrect(answer)) {
        this.answerWasCorrect = true;
        console.log("CORRECT!")
      }
      else {
        this.answerWasCorrect = false;
        console.log("WRONG!")
      }
    }
  },

  data() { 
    return {
      wordToTranslate: this.model.getWordToTranslate(),
      answerWasCorrect: false,
      hasAnswered: false,
    };
  },
};
</script>

<template>
  <ReviewDeckView 
    :onConfirmAnswer="confirmedAnswer"
    :wordToTranslate="wordToTranslate"
    :hasAnswered="hasAnswered"
    :answerWasCorrect="answerWasCorrect"/>
</template>