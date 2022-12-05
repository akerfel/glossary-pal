<script setup>
import { NButton, NScrollbar, NAlert } from "naive-ui";
</script>

<script>
export default {
  props: ["deckCreation", "onGoToHome", "onCreateAnotherDeck", "getLangName"],

  methods: {
    clickedGoToHomeACB() {
      this.onGoToHome();
    },
    clickedCreateAnotherDeckACB() {
      this.onCreateAnotherDeck();
    },
  },
};
</script>

<template>
  <div v-if="this.deckCreation.creationSuccessfull" class="postcreateview">
    <n-alert class="alert" title="Deck created" type="success">
      Your deck "{{ this.deckCreation.deckTitle }}" has been successfully
      created.
    </n-alert>
    <div class="deckWords">
      <h2 id="deckWordsTitle">Words in deck</h2>
      <div id="scrollbarDiv">
        <div id="deckWordsColumns">
          <span class="fromLangTextAddWord">{{
            this.getLangName(this.deckCreation.fromLang)
          }}</span>
          <span>{{ this.getLangName(this.deckCreation.toLang) }}</span>
        </div>
        <n-scrollbar style="max-height: 500px">
          <div
            id="scrollbarWord"
            v-for="word in this.deckCreation.deckWords"
            v-bind:key="word"
          >
            <span class="fromLangTextAddWord">{{ word.from }}</span>
            <span>{{ word.to }}</span>
          </div>
        </n-scrollbar>
      </div>
    </div>
    <div>
      <n-button type="primary" @click="clickedGoToHomeACB"
        >Go back to home</n-button
      >
      <n-button
        style="margin-left: 30px"
        type="primary"
        @click="clickedCreateAnotherDeckACB"
        >Create another deck</n-button
      >
    </div>
  </div>
</template>

<style scoped>
.postcreateview {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 440px;
}

.fromLangTextAddWord {
  display: inline-block;
  width: 42%;
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
  border: 3px solid rgb(206, 50, 50);
  background-color: rgb(255, 255, 255);
}

#scrollbarWord {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  width: 95.8%;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.alert {
  margin-bottom: 25px;
}
</style>
