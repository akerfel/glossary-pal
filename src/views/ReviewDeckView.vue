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
      this.focusInput();
    },

    clickedNextWord() {
      this.onNextWord();
      this.answer = "";
      this.focusInput();
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
    },

    focusInput() {
      this.$refs.inputAnswer.focus();
    },
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
      var style = "margin-bottom: 20px;"
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
      <h1 class="wordToTranslate"> <b>{{wordToTranslate}}</b></h1>
      <n-input
        ref="inputAnswer"
        :style="getInputFieldStyle"
        v-model:value="answer"
        v-bind:placeholder="getInputPlaceHolderText()"
        v-bind:readonly="hasAnswered"
        @keyup.enter="clickedEnter"
        :autofocus="true"
      />
      <n-button 
        v-if="!this.hasAnswered"
        class="confirmAndNextButton"
        type="primary" 
        @click="clickedConfirm">
        Confirm
      </n-button>
      <n-button 
        v-if="this.hasAnswered"
        class="confirmAndNextButton"
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
  text-align: center;

  border: 2px solid rgb(206, 50, 50);
  border-radius: 25px;
  background-color: rgb(49, 17, 6);
}

.wordToTranslate {
  color: rgb(0, 194, 81);
  margin-bottom: 10px;
}

.confirmAndNextButton {
  width: 75px;
  margin-bottom: 20px;
}

.inputWordSpan {
  display: inline-block;
  width: 100%;
}

#answerWhenWrong {
  color: #94e09c; 
}

</style>
