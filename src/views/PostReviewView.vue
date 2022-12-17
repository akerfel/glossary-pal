<script setup>
import { NButton, NPopconfirm } from "naive-ui";
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
    "onReviewAgainClicked"],

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

</style>