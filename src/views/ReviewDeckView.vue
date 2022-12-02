<script setup>
import {
  NInput,
  NButton,
} from "naive-ui";
</script>

<script>
export default {
  props: [
    "wordToTranslate", 
    "correctAnswer",
    "onConfirmAnswer",
    "answerWasCorrect",
    "hasAnswered",
    "onNextWord",
    "isOnLastWord",
    "fromLanguage",
    "toLanguage",],

  created() {

  },

  methods: {
    clickedConfirm() {
      this.onConfirmAnswer(this.answer);
    },

    clickedNextWord() {
      this.onNextWord();
      this.answer = "";
    },

    getInputFieldClass(){
      if (!this.hasAnswered) {
        return "inputIfNotAnsweredYet"
      }
      if (this.answerWasCorrect) {
        return "inputIfCorrectAnswer"
      }
      else
        return "inputIfWrongAnswer"
    },

    getConfirmButtonClass(){
      if (this.hasAnswered) {
        return "hidden"
      }
    },

    getNextButtonClass(){
      if (!this.hasAnswered) {
        return "hidden"
      }
    },

    getInputPlaceHolderText() {
      return "Translate from " + this.fromLanguage + " to " + this.toLanguage;
    }
  },

  data() {
    return {
        answer: "",
    };
  },
};
</script>

<template>
  <div class="reviewDeckView">
    <CustomComponent
        @keyup.enter="clickedConfirm"
    />
    <span class="inputWordSpan">
      <h2 class="wordToTranslate"> <b>{{wordToTranslate}}</b></h2>
      <n-input
        v-bind:class="getInputFieldClass()"
        v-model:value="answer"
        v-bind:placeholder="getInputPlaceHolderText()"
        v-bind:readonly="hasAnswered"
      />
      <n-button 
        v-bind:class="getConfirmButtonClass()"
        type="primary" 
        @click="clickedConfirm">
        Confirm
      </n-button>
      <n-button 
        v-bind:class="getNextButtonClass()"
        type="primary" 
        @click="clickedNextWord">
        Next
      </n-button>
      <p v-if="!answerWasCorrect" id="answerWhenWrong"> Correct answer: <strong>{{correctAnswer}}</strong></p>
    </span>
  </div>  
</template>

<style scoped>

.reviewDeckView {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

.wordToTranslate {
  color: rgb(0, 194, 81);
}

.inputWordSpan {
  display: inline-block;
  width: 100%;
}

.inputIfNotAnsweredYet {
  background-color: #ffffff;
  margin-bottom: 5px; 
}

.inputIfWrongAnswer {
  background-color: #d3a4a4; 
  margin-bottom: 5px;
}

.inputIfCorrectAnswer {
  background-color: #94e09c; 
  margin-bottom: 5px;
}

.hidden {
  display: none;
}

#answerWhenWrong {
  color: #94e09c; 
}

</style>
