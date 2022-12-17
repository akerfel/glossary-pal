<script>
import ReviewDeckView from "../views/ReviewDeckView.vue";
export default {
  components: { ReviewDeckView },

  props: {
    model: Object,
  },

  methods: {
    confirmedAnswerACB() {
      this.hasAnswered = true;
      if (this.model.answerIsCorrect(this.input)) {
        this.answerWasCorrect = true;
      } else {
        this.answerWasCorrect = false;
        this.model.addCurrentWordToWrongAnswerIndexes();
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
      this.input = "";
    },

    tryAgainACB() {
      this.hasAnswered = false;
      this.answerWasCorrect = true;
      this.input = "";
    },

    getInputPlaceHolderTextCB() {
      return "Translate from " + this.model.currentDeck.lang1 + " to " + this.model.currentDeck.lang2;
    },

    setInput(input) {
      this.input = input;
    }
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
      input: "",
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
    :onInputChange="setInput"
    :input="input"
  />
</template>
