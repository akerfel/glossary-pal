<script>
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
      } else {
        this.answerWasCorrect = false;
        this.model.addCurrentWordToWrongAnswers();
      }
    },

    giveNextQuestionACB() {
      if (this.model.hasNextWord()) {
        this.currentWord = this.model.getNextCurrentWord();
        this.correctAnswer = this.model.getCorrectAnswer();
        this.currentWordIndex = this.model.getCurrentWordIndex() + 1;
        this.hasAnswered = false;
        this.answerWasCorrect = true;
      } else {
        this.$router.push("/postReviewView"); 
      }
    },

    tryAgainACB() {
      this.hasAnswered = false;
      this.answerWasCorrect = true;
    },

    getInputPlaceHolderTextCB() {
      if (!this.hasAnswered) {
        return "Translate from " + this.model.currentDeck.lang1 + " to " + this.model.currentDeck.lang2;
      }
      return "asd";
    },
  },

  data() {
    return {
      currentWord: this.model.getCurrentWord(),
      correctAnswer: this.model.getCurrentWordAnswer(),
      currentWordIndex: this.model.getCurrentWordIndex() + 1,
      deckSize: this.model.getCurrentDeckSize(),
      answerWasCorrect: true,
      hasAnswered: false,
      inputPlaceHolderText: this.getInputPlaceHolderTextCB(),
    };
  },
};
</script>

<template>
  <ReviewDeckView
    :onConfirmAnswer="confirmedAnswerACB"
    :onNextWord="giveNextQuestionACB"
    :onTryAgain="tryAgainACB"
    :currentWord="currentWord"
    :correctAnswer="correctAnswer"
    :currentWordIndex="currentWordIndex"
    :deckSize="deckSize"
    :hasAnswered="hasAnswered"
    :answerWasCorrect="answerWasCorrect"
    :inputPlaceHolderText="inputPlaceHolderText"
  />
</template>
