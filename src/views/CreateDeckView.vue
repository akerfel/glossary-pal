<script setup>
import {
  NInput,
  NInputGroup,
  NSelect,
  NButton,
  NScrollbar,
  NAlert,
} from "naive-ui";
</script>

<script>
export default {
  props: [
    "deckCreation",
    "onCreateDeck",
    "onGoToHome",
    "onCreateAnotherDeck",
    "onDeleteWord",
    "onAddWord",
  ],

  methods: {
    clickedAddWordACB() {
      this.onAddWord();
    },
    clickedDeleteWordACB(word) {
      this.onDeleteWord(word);
    },
    clickedCreateDeckACB() {
      this.onCreateDeck();
    },
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
  <div class="createview">
    <h1 class="title">Create new glossary deck</h1>
    <div class="deckparams">
      <span>Deck name</span>
      <n-input
        v-model:value="this.deckCreation.deckTitle"
        class="deckname"
        placeholder="Title your deck"
      />
      <div>
        <span>From language</span>
        <span id="toLangText">To language</span>
      </div>
      <n-input-group>
        <n-select
          v-model:value="this.deckCreation.fromLang"
          filterable
          placeholder="Select a language"
          :options="this.deckCreation.options"
        />
        <n-select
          v-model:value="this.deckCreation.toLang"
          filterable
          placeholder="Select a language"
          :options="this.deckCreation.options"
        />
      </n-input-group>
    </div>
    <div class="addword">
      <h2 id="addWordTitle">Add words</h2>
      <span class="fromLangTextAddWord">{{ this.deckCreation.fromLang }}</span>
      <span>{{ this.deckCreation.toLang }}</span>
      <n-input-group>
        <n-input
          v-model:value="this.deckCreation.langFromWord"
          placeholder="Language from"
        />
        <n-input
          v-model:value="this.deckCreation.langToWord"
          placeholder="Language to"
        />
        <n-button @click="clickedAddWordACB" type="primary">Add word</n-button>
      </n-input-group>
    </div>
    <div class="deckWords">
      <h2 id="deckWordsTitle">Words in deck</h2>
      <div id="scrollbarDiv">
        <div id="deckWordsColumns">
          <span class="fromLangTextAddWord">{{
            this.deckCreation.fromLang
          }}</span>
          <span>{{ this.deckCreation.toLang }}</span>
        </div>
        <n-scrollbar style="max-height: 250px">
          <div id="scrollbarWord" v-for="word in this.deckCreation.deckWords">
            <span class="fromLangTextAddWord">{{ word.from }}</span>
            <span>{{ word.to }}</span>
            <n-button
              id="removeWordButton"
              type="error"
              size="tiny"
              @click="clickedDeleteWordACB(word)"
              >Delete</n-button
            >
          </div>
        </n-scrollbar>
      </div>
    </div>
    <n-alert
      v-if="this.deckCreation.creationSuccessfull"
      class="alert"
      title="Deck created"
      type="success"
    >
      Your deck "{{ this.deckCreation.deckTitle }}" has been successfully
      created.
    </n-alert>
    <n-alert
      v-if="this.deckCreation.creationErrorNoName"
      class="alert"
      title="Deck creation error"
      type="error"
    >
      Please name your deck.
    </n-alert>
    <n-alert
      v-if="this.deckCreation.creationErrorNoWords"
      class="alert"
      title="Deck creation error"
      type="error"
    >
      Please add at least one word to your deck.
    </n-alert>
    <n-button
      v-if="!this.deckCreation.creationSuccessfull"
      id="createdeck"
      type="primary"
      @click="clickedCreateDeckACB"
      >Create deck</n-button
    >
    <div v-if="this.deckCreation.creationSuccessfull">
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
.createview {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 440px;
}

.title {
  color: rgb(0, 194, 81);
  margin-bottom: 15px;
}

#toLangText {
  margin-left: 125px;
}

.deckparams {
  width: 100%;
  margin-bottom: 50px;
}

.deckname {
  margin-bottom: 15px;
}

#deckLangFrom {
  width: 40%;
}

#deckLangTo {
  width: 40%;
  float: right;
}

.addword {
  width: 100%;
  margin-bottom: 30px;
}

#addWordTitle {
  color: rgb(0, 194, 81);
  text-align: center;
  margin-bottom: 10px;
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

#removeWordButton {
  width: 48px;
  height: 24px;
  float: right;
}

.alert {
  margin-bottom: 25px;
}

#createdeck {
  width: 100%;
}
</style>
