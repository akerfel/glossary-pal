<script setup>
import { NInput, NButton } from "naive-ui";
</script>

<script>
export default {
  props: [
    "currentWord",
    "correctAnswer",
    "currentWordIndex",
    "deckSize",
    "onConfirmAnswer",
    "answerWasCorrect",
    "hasAnswered",
    "onNextWord",
    "onTryAgain",
    "isOnLastWord",
    "inputPlaceHolderText",
    "onInputChange",
    "input",
  ],

  created() {},

  methods: {
    created() {
      this.focusInput();
    },

    clickedConfirm() {
      this.onConfirmAnswer();
      this.focusInput();
    },

    clickedNextWord() {
      this.onNextWord();
      this.focusInput();
    },

    clickedTryAgain() {
      this.onTryAgain();
      this.focusInput();
    },

    clickedEnter() {
      if (!this.hasAnswered) {
        this.clickedConfirm();
      } else {
        this.clickedNextWord();
      }
    },

    getCorrectAnswerClass() {
      if (!this.answerWasCorrect) {
        return "correctAnswerWhenWrong";
      } else {
        return "hiddenAnswer";
      }
    },

    focusInput() {
      this.$refs.inputAnswer.focus();
    },

    inputChangedACB(input) {
      this.onInputChange(input);
    },
  },

  data() {
    return {
    };
  },

  computed: {
    // It was not possible to just return a class reference here,
    // perhaps because that does not override n-input's class?
    getInputFieldStyle() {
      var style = "margin-bottom: 20px;";
      if (!this.hasAnswered) {
        style += "background-color: #ffffff; ";
        return style;
      }
      if (this.answerWasCorrect) {
        style += "background-color: #94e09c;";
      } else {
        style += "background-color: #d3a4a4;";
      }
      return style;
    },
  },
};
</script>

<template>
  <div class="reviewDeckView">
    <p>{{ currentWordIndex }} / {{ deckSize }}</p>
    <span class="inputWordSpan">
      <h1 class="currentWord">
        <b>{{ currentWord }}</b>
      </h1>

      <n-input-group
        class="inputAnswerGroup">
        <td> 
          <n-input
            id="inputAnswer"
            ref="inputAnswer"
            class="inputField"
            :style="getInputFieldStyle"
            @input="inputChangedACB"
            type="text"
            v-bind:value="input"
            v-bind:placeholder="inputPlaceHolderText"
            v-bind:readonly="hasAnswered"
            @keyup.enter="clickedEnter"
            :autofocus="true"
          />
        </td>
          
        <td>
          <!-- Checkmark if correct answer -->
        <h1
          class="checkmarkOrRedX"
          v-if="answerWasCorrect && hasAnswered">
          &#10004;&#65039;
        </h1>
        
        <!-- Red X if wrong answer -->
        <h1
          class="checkmarkOrRedX"
          v-if="!answerWasCorrect && hasAnswered">
          &#10060;
        </h1>
        </td>
        
      </n-input-group>

      <div>
        <div v-bind:class="getCorrectAnswerClass()">
          <p id="correctAnswerTitle">Correct answer</p>
          <strong>{{ correctAnswer }}</strong>
        </div>
      </div>

      <!-- Confirm -->
      <n-button
        v-if="!hasAnswered"
        class="buttons"
        type="primary"
        @click="clickedConfirm"
      >
        Confirm
      </n-button>

      <!-- Next -->
      <div>
        <n-button
          v-if="hasAnswered"
          class="buttons"
          type="primary"
          @click="clickedNextWord"
        >
          Next
        </n-button>
      </div>

      <!-- Try Again -->
      <n-button
        v-if="!answerWasCorrect && hasAnswered"
        class="buttons"
        type="primary"
        @click="clickedTryAgain"
      >
        Try Again
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
}

.inputAnswerGroup {
  
  display: flex;
  flex-direction: row;
}

.inputField {
  width: 300px;
}

.checkmarkOrRedX {
  display: inline-block;
  position:relative; top:-8px;
}

.currentWord {
  color: rgb(255, 255, 255);
  margin-bottom: 10px;
}

.buttons {
  width: 100px;
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
}

.hiddenAnswer {
  visibility: hidden;

  display: inline-block;
  text-align: center;
  color: rgb(0, 194, 81);
  margin-bottom: 15px;
}
</style>
