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
    "hasAnswered",],

  created() {

  },

  methods: {
    clickedConfirm () {
      this.onConfirmAnswer(this.answer);
      console.log("Clicked confirm")
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
    <span class="inputWordSection">
      <h2>{{wordToTranslate}}</h2>
      <n-input
        v-bind:class="getInputFieldClass()"
        v-model:value="answer"
        placeholder="Your answer..."
      />
      <n-button 
        type="primary" 
        @click="clickedConfirm">
        Confirm
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

.inputWordSection {
  display: inline-block;
  width: 100%;
}

.inputIfNotAnsweredYet {
  background-color: #ffffff; 
}

.inputIfWrongAnswer {
  background-color: #cf5555; 
}

.inputIfCorrectAnswer {
  background-color: #25ab32; 
}

</style>
