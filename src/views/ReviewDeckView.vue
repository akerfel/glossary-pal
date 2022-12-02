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
      if (!this.hasAnswered) {
        return "Translate from " + this.fromLanguage + " to " + this.toLanguage;
      }
      return "";
    },

    clickedEnter() {
      if (!this.hasAnswered) {
        this.clickedConfirm()
      }
      else {
        this.clickedNextWord()
      }
    },

    getCorrectAnswerClass() {
      if (!this.answerWasCorrect) {
        return "correctAnswerWhenWrong";
      }
      else {
        return "hiddenAnswer";
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

      <div>
        <div v-bind:class="getCorrectAnswerClass()">
          <p id="correctAnswerTitle"> 
          Correct answer
          </p>
        <strong>{{correctAnswer}}</strong>
        </div>
      </div>

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
  margin-bottom: 5px;

  padding: 10px;
  border: 2px solid rgb(106, 106, 106);
  border-radius: 10px;
}

.wordToTranslate {
  color: rgb(255, 255, 255);
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

#correctAnswerTitle {
  color: rgb(144, 164, 148);
}

.correctAnswerWhenWrong {
  display: inline-block;
  text-align: center;
  color: rgb(0, 194, 81);
  margin-bottom: 15px;

  /* Border for correct answer box. Might add back.
  padding: 5px;
  border: 2px solid rgb(7, 77, 58);
  border-radius: 5px;
  background-color: rgb(49, 17, 6);
  */
}

.hiddenAnswer {
  visibility: hidden;

  display: inline-block;
  text-align: center;
  color: rgb(0, 194, 81);
  margin-bottom: 15px;

  /*
  padding: 5px;
  border: 2px solid rgb(7, 77, 58);
  border-radius: 5px;
  background-color: rgb(49, 17, 6);
  */
}

</style>
