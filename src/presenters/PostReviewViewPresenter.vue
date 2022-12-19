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
    reviewEntireDeckACB() {
      this.model.setCurrentDeckToOriginal();
      this.model.resetReviewProgress();
      this.model.updateCurrentDeckAccordingToSettings();
      this.$router.push("/review");
    },
    reviewWrongAnswersACB() {
      this.model.setCurrentDeckToWrongAnswers();
      this.model.resetReviewProgress();

      // We don't want to reverse the languages again
      if (this.model.randomOrder) {
        this.model.shuffleCurrentDeck();
      }
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
    :onReviewEntireDeckClicked="reviewEntireDeckACB"
    :onReviewWrongAnswersClicked="reviewWrongAnswersACB"
    :correctAnswersAmount="correctAnswersAmount"
    :getNumberOfWrongAnswers="getNumberOfWrongAnswers"
    :wrongWords="getDeckOfWrongWords"
    :showWrongAnswers="showWrongAnswers"
  />
</template>
