<script>
import PreReviewView from "../views/PreReviewView.vue";
export default {
  components: { PreReviewView },

  props: {
    model: Object,
    initModel: Function,
  },

  methods: {
  },

  data() {
  },
};
</script>

<template>
  <PreReviewView
  :fromLanguage="model.currentDeck.lang1"
  :toLanguage="model.currentDeck.lang2"
  :currentDeckName="model.currentDeck.name"
  />
</template>
