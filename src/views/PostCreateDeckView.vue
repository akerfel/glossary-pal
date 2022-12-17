<script setup>
import { NButton, NScrollbar, NAlert } from "naive-ui";
</script>

<script>
export default {
  props: {
    deckCreation: Object,
    onGoToHome: Function,
    onCreateAnotherDeck: Function,
    getLangName: Function,
    getNumberOfWordsInDeck: Function,
  },

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
  <div v-if="deckCreation.creationSuccessfull" class="postcreateview">
    <n-alert class="alert" title="Deck created" type="success">
      Your deck "{{ deckCreation.deckTitle }}" has been successfully created.
    </n-alert>
    <div class="deckWords">
      <h2 id="deckWordsTitle">Words in deck ({{getNumberOfWordsInDeck()}})</h2>
      <div id="scrollbarDiv">
        <div id="deckWordsColumns">
          <span class="fromLangTextAddWord">{{
            getLangName(deckCreation.fromLang)
          }}</span>
          <span>{{ getLangName(deckCreation.toLang) }}</span>
        </div>
        <div id="scrollbar">
          <div
            id="scrollbarWord"
            v-for="word in deckCreation.deckWords"
            v-bind:key="word"
          >
            <span class="fromLangTextAddWord">{{ word.from }}</span>
            <span>{{ word.to }}</span>
          </div>
        </div>
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
  border: 3px solid rgb(82, 80, 80);
}

#scrollbar {
  max-height: 500px;
  overflow-y: scroll;
}

#scrollbarWord {
  color: rgb(255, 255, 255);
  width: 95.8%;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.alert {
  margin-bottom: 25px;
}
</style>
