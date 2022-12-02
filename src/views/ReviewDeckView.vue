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
    "onConfirmAnswer",
    "answerWasCorrect",
    "hasAnswered",
    "onNextWord",
    "isOnLastWord",],

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
    <span class="inputWordSpan">
      <h2>{{wordToTranslate}}</h2>
      <n-input
        v-bind:class="getInputFieldClass()"
        v-model:value="answer"
        placeholder="Your answer..."
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

.inputWordSpan {
  display: inline-block;
  width: 100%;
}

.inputIfNotAnsweredYet {
  background-color: #ffffff;
  margin-bottom: 5px; 
}

.inputIfWrongAnswer {
  background-color: #cf5555; 
  margin-bottom: 5px;
}

.inputIfCorrectAnswer {
  background-color: #25ab32; 
  margin-bottom: 5px;
}

.hidden {
  display: none;
}

</style>
