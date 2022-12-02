<script>
import Deck from "../Deck";
import ReviewDeckView from "../views/ReviewDeckView.vue";
export default {
  components: { ReviewDeckView },

  props: {
    model: Object,
  },

  methods: {
    confirmedAnswerACB(answer) {
      this.hasAnswered = true;
      if (this.model.answerIsCorrect(answer)) {
        this.answerWasCorrect = true;
      }
      else {
        this.answerWasCorrect = false;
        this.model.addCurrentWordToWrongAnswers()
      }
    },

    giveNextQuestionACB() {
      if (this.model.hasNextWord()) {
        this.wordToTranslate = this.model.getNextWordToTranslate();
        this.hasAnswered = false;
      }
      else {
        this.$router.push("/"); // TODO: Change to postReview after it has been added
      }
    },
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
    :onConfirmAnswer="confirmedAnswerACB"
    :onNextWord="giveNextQuestionACB"
    :wordToTranslate="wordToTranslate"
    :hasAnswered="hasAnswered"
    :answerWasCorrect="answerWasCorrect"/>
</template>