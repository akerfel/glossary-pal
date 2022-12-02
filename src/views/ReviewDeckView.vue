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

    getInputPlaceHolderText() {
      return "Translate from " + this.fromLanguage + " to " + this.toLanguage;
    },

    clickedEnter() {
      if (!this.hasAnswered) {
        this.clickedConfirm()
      }
      else {
        this.clickedNextWord()
      }
    }
  },

  data() {
    return {
        answer: "",
    };
  },

  computed: {
    // It was not possible to just return a class reference here,
    // perhaps because that does not override n-input's class?
    getInputFieldStyle(){
      var style = "margin-bottom: 5px;"
      if (!this.hasAnswered) {
        style += "background-color: #ffffff; "
        return style;
      }
      if (this.answerWasCorrect) {
        style += "background-color: #94e09c;"
      }
      else {
        style += "background-color: #d3a4a4;"
      }
      return style;
    },
  },
};
</script>

<template>
  <div class="reviewDeckView">
    <span class="inputWordSpan">
      <h2 class="wordToTranslate"> <b>{{wordToTranslate}}</b></h2>
      <n-input
        :style="getInputFieldStyle"
        v-model:value="answer"
        v-bind:placeholder="getInputPlaceHolderText()"
        v-bind:readonly="hasAnswered"
        @keyup.enter="clickedEnter"
      />
      <n-button 
        v-if="!this.hasAnswered"
        type="primary" 
        @click="clickedConfirm">
        Confirm
      </n-button>
      <n-button 
        v-if="this.hasAnswered"
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

#answerWhenWrong {
  color: #94e09c; 
}

</style>
