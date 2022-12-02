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
        this.correctAnswer = this.model.getCorrectAnswer();
        this.currentWordIndex = this.model.getCurrentWordIndex() + 1;
        this.hasAnswered = false;
        this.answerWasCorrect = true;
      }
      else {
        this.$router.push("/"); // TODO: Change to postReview after it has been added
      }
    },

    tryAgainACB() {
      this.hasAnswered = false;
      this.answerWasCorrect = true;
    },
  },

  data() { 
    return {
      wordToTranslate: this.model.getWordToTranslate(),
      correctAnswer: this.model.getWordToTranslateAnswer(),
      currentWordIndex: this.model.getCurrentWordIndex() + 1,
      deckSize: this.model.getCurrentDeckSize(),
      answerWasCorrect: true,
      hasAnswered: false,
    };
  },
};
</script>

<template>
  <ReviewDeckView 
    :onConfirmAnswer="confirmedAnswerACB"
    :onNextWord="giveNextQuestionACB"
    :onTryAgain="tryAgainACB"
    :wordToTranslate="wordToTranslate"
    :correctAnswer="correctAnswer"
    :currentWordIndex="currentWordIndex"
    :deckSize="deckSize"
    :hasAnswered="hasAnswered"
    :fromLanguage="this.model.currentDeck.lang1"
    :toLanguage="this.model.currentDeck.lang2"
    :answerWasCorrect="answerWasCorrect"/>
</template>