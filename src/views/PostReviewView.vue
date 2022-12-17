<script setup>
import {
  NInput,
  NPopconfirm,
  NInputGroup,
  NSelect,
  NButton,
  NScrollbar,
  NAlert,
} from "naive-ui";
</script>


<script>
export default {
  props: [
    "currentDeckName",
    "deckSize",
    "fromLanguage",
    "toLanguage",
    "correctAnswersAmount",
    "onGoToHomeClicked",
    "onReviewAgainClicked",
    "getNumberOfWrongAnswers",
    "wrongWords",
    "showWrongAnswers",],

  methods: {
    goToHomeClicked() {
       this.onGoToHomeClicked();
    },
    reviewAgainClicked() {
      this.onReviewAgainClicked();
    },
  },

  data() {
		return {
			showWrongAnswers: this.showWrongAnswers(),};
	},
};
</script>

<template>
  <div class="postReviewView">
    <div>
        <h1><b>{{currentDeckName}}</b></h1>
        <h2 id="correctAnswersCount"><b>{{correctAnswersAmount}}</b> / {{deckSize}}</h2>
    </div>
   
  
    <div class="deckWords"
      v-if="showWrongAnswers">
      <h3 id="deckWordsTitle">
        Wrong Answers ({{ getNumberOfWrongAnswers() }})
      </h3>
      <div id="scrollbarDiv">
        <div id="deckWordsColumns">
          <span class="fromLangTextAddWord">{{
            fromLanguage
          }}</span>
          <span>{{ toLanguage }}</span>
        </div>
        <div id="scrollbar">
          <div
            id="scrollbarWord"
            v-for="word in wrongWords()"
            v-bind:key="word"
          >
            <span class="fromLangTextAddWord">{{ word.from }}</span>
            <span>{{ word.to }}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="allCardsCleared"
      v-else>
      <h2>All cards cleared!</h2>
      <h1>&#10004;&#65039;</h1>
    </div>
    <div>
      <n-button 
          type="primary" 
          class="goHomeButton"
          @click="goToHomeClicked">
          Go back to home
      </n-button>
  </div>
  <div>
    <n-button 
      type="primary" 
      class="reviewAgainButton"
      @click="reviewAgainClicked">
      Review Again
    </n-button>
  </div>

  </div>
</template>

<style scoped>

.allCardsCleared {
  color: rgb(0, 194, 81);
}

.postReviewView {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 10px;
}

.languages {
}

.goHomeButton {
  margin-top: 10px;
}

.reviewAgainButton {
  margin-top: 10px;
  margin-bottom: 10px;
}

.deckWords {
  width: 100%;
  margin-bottom: 25px;
}







.title {
  color: rgb(0, 194, 81);
  margin-bottom: 15px;
}

#toLangText {
  margin-left: 144px;
}

.deckparams {
  width: 100%;
  margin-bottom: 50px;
}

.deckname {
  margin-bottom: 15px;
}

#deckLangFrom {
  width: 40%;
}

#deckLangTo {
  width: 40%;
  float: right;
}


.fromLangTextAddWord {
  display: inline-block;
  width: 42%;
}

#getTranslation {
  margin-top: 10px;
}

.deckWords {
  width: 100%;
  margin-bottom: 25px;
  text-align: left;
}

#deckWordsTitle {
  color: rgb(203, 114, 114);
  text-align: center;
  margin-bottom: 10px;
}

#correctAnswersCount {
  text-align: center;
}

#deckWordsColumns {
  background-color: #181818;
  height: 28px;
  margin-bottom: 5px;
  padding-left: 5px;
}

#scrollbarDiv {
  border: 3px solid rgb(82, 80, 80);
}

#scrollbar {
  max-height: 250px;
  overflow-y: scroll;
}

#scrollbarWord {
  color: rgb(255, 255, 255);
  width: 95.8%;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

</style>