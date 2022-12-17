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
	reviewAgainACB() {
		this.model.resetReviewAttributes();
        this.$router.push("/review");
    },
	getNumberOfWrongAnswers() {
	  console.log("[[[[[]]]]]")
      return this.model.getWrongAnswerIndexes().length;
    },
	getDeckOfWrongWords() {
	  console.log("€€€€€€€€€€€€€€€")
	  console.log(this.model.getDeckOfWrongWords())
      return this.model.getDeckOfWrongWords();
    },
  },

	data() {
		return {
			deckSize: this.model.getCurrentDeckSize(),
			correctAnswersAmount: this.model.getCurrentDeckSize() - this.model.getWrongAnswerIndexes().length,
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
    :wrongWords="getDeckOfWrongWords"/>
</template>