<script>
import PreReviewView from "../views/PreReviewView.vue";
export default {
  components: { PreReviewView },

  props: {
    model: Object,
    initModel: Function,
  },

  methods: {
    startReview() {
      this.model.resetReviewProgress();
      if (this.randomOrder) {
        this.model.randomOrder = true;
      }
      if (this.reverseLanguages) {
        this.model.reverseReview = true;
      }
      this.model.updateCurrentDeckAccordingToSettings();
      this.$router.push("/review");
    },

    onRandomOrder() {
      this.randomOrder = !this.randomOrder;
    },

    onReverseLanguages() {
      this.reverseLanguages = !this.reverseLanguages;
    },
  },

  data() {
    return {
      randomOrder: false,
      reverseLanguages: false,
    };
  },
};
</script>

<template>
  <PreReviewView
  :fromLanguage="model.currentDeck.lang1"
  :toLanguage="model.currentDeck.lang2"
  :currentDeckName="model.currentDeck.name"
  :onStartReview="startReview"
  :onRandomOrder="onRandomOrder"
  :onReverseLanguages="onReverseLanguages"
  />
</template>
