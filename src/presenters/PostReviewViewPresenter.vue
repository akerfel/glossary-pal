<script>
import PostReviewView from "../views/PostReviewView.vue";
export default {
  components: { PostReviewView },

  props: {
    model: Object,
    initModel: Function,
  },

  methods: {
    goToHomeACB() {
      this.$router.push("/");
    },
    reviewAgainACB() {
      this.model.resetReviewAttributes();
      this.model.shuffleCurrentDeck();
      this.$router.push("/review");
    },
    getNumberOfWrongAnswers() {
      return this.model.getWrongAnswerIndexes().length;
    },
    getDeckOfWrongWords() {
      return this.model.getDeckOfWrongWords();
    },
    showWrongAnswers() {
      return this.model.getWrongAnswerIndexes().length != 0;
    },
  },

  data() {
    return {
      deckSize: this.model.getCurrentDeckSize(),
      correctAnswersAmount:
        this.model.getCurrentDeckSize() -
        this.model.getWrongAnswerIndexes().length,
    };
  },
};
</script>

<template>
  <PostReviewView
    :currentDeckName="model.currentDeck.name"
    :deckSize="deckSize"
    :fromLanguage="model.currentDeck.lang1"
    :toLanguage="model.currentDeck.lang2"
    :onGoToHomeClicked="goToHomeACB"
    :onReviewAgainClicked="reviewAgainACB"
    :correctAnswersAmount="correctAnswersAmount"
    :getNumberOfWrongAnswers="getNumberOfWrongAnswers"
    :wrongWords="getDeckOfWrongWords"
    :showWrongAnswers="showWrongAnswers"
  />
</template>
