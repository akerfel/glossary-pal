<script>
import PostReviewView from "../views/PostReviewView.vue";
export default {
  components: { PostReviewView },

  props: {
    model: Object,
  },

  methods: {
    goToHomeACB() {
    	this.$router.push("/");
    },
  },

	data() {
		return {
			deckSize: this.model.getCurrentDeckSize(),
			correctAnswersAmount: this.model.getCurrentDeckSize() - this.model.getWrongAnswers().length,
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
	:correctAnswersAmount="correctAnswersAmount" />
</template>