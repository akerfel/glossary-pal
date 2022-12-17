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
    "wrongWords"],

  methods: {
    goToHomeClicked() {
       this.onGoToHomeClicked();
    },
    reviewAgainClicked() {
      this.onReviewAgainClicked();
    },
  },
};
</script>

<template>
  <div class="postReviewView">
    <div>
        <p>{{correctAnswersAmount}}  / {{deckSize}} cards cleared</p>
        <h3><b>Deck: {{currentDeckName}}</b></h3>
        <h3 class="languages"><b>{{fromLanguage}} to {{toLanguage}}</b></h3>
    </div>
   
    <div>
        <n-button 
            type="primary" 
            @click="goToHomeClicked">
            Go back to home
        </n-button>
    </div>
    <div>
      <n-button 
        type="primary" 
        @click="reviewAgainClicked"
        class="buttons">
        Review Again
      </n-button>
    </div>
    <div class="deckWords">
      <h2 id="deckWordsTitle">
        Wrong Answers ({{ getNumberOfWrongAnswers() }})
      </h2>
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
            v-for="word in wrongWords"
            v-bind:key="word"
          >
            <span class="fromLangTextAddWord">{{ word.from }}</span>
            <span>{{ word.to }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
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
    margin-bottom: 10px;
}

.buttons {
  margin-top: 10px;
}

.deckWords {
  width: 100%;
  margin-bottom: 25px;
}







.createview {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 440px;
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

.addword {
  width: 100%;
  margin-bottom: 30px;
}

#addWordTitle {
  color: rgb(0, 194, 81);
  text-align: center;
  margin-bottom: 10px;
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
}

#deckWordsTitle {
  color: rgb(0, 194, 81);
  text-align: center;
  margin-bottom: 10px;
}

#deckWordsColumns {
  background-color: #181818;
  color: rgb(0, 194, 81);
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

#removeWordButton {
  width: 48px;
  height: 24px;
  float: right;
}

.alert {
  margin-bottom: 25px;
}

#createdeck {
  width: 100%;
}

#langSwitchBtn {
  width: 50px;
}

</style>