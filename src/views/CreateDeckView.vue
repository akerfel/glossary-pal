<script setup>
import { NInput, NInputGroup, NSelect, NButton, NAlert } from "naive-ui";
</script>

<script>
export default {
  props: {
    deckCreation: Object,
    onCreateDeck: Function,
    onDeleteWord: Function,
    onAddWord: Function,
    onGetTranslate: Function,
    getLangName: Function,
    onDeckNameChange: Function,
    onFromLangChange: Function,
    onToLangChange: Function,
    onLangFromWordChange: Function,
    onLangToWordChange: Function,
    onLangSwitch: Function,
    getNumberOfWordsInDeck: Function,
    onFinishEditDeck: Function,
  },

  methods: {
    scrollDownToBottom() {
      const element = document.getElementById("scrollbar");
      element.scrollTop = element.scrollHeight;
    },
    clickedAddWordACB() {
      this.onAddWord();
      setTimeout(() => this.scrollDownToBottom(), 10);
    },
    clickedDeleteWordACB(word) {
      this.onDeleteWord(word);
    },
    clickedCreateDeckACB() {
      this.onCreateDeck();
    },
    clickedGetTranslationACB() {
      this.onGetTranslate();
    },
    deckNameChangedACB(deckName) {
      this.onDeckNameChange(deckName);
    },
    fromLanguageChangedACB(langCode) {
      this.onFromLangChange(langCode);
    },
    toLanguageChangedACB(langCode) {
      this.onToLangChange(langCode);
    },
    langFromWordChangedACB(string) {
      this.onLangFromWordChange(string);
    },
    langToWordChangedACB(string) {
      this.onLangToWordChange(string);
    },
    clickedLangSwitchBtn() {
      this.onLangSwitch();
    },
    clickedFinishEditACB() {
      this.onFinishEditDeck();
    },
  },
};
</script>

<template>
  <div v-if="!deckCreation.creationSuccessfull" class="createview">
    <p>{{ deckCreation.test }}</p>
    <h1 v-if="!deckCreation.isEditing" class="title">
      Create new glossary deck
    </h1>
    <h1 v-else class="title">Edit deck</h1>
    <div class="deckparams">
      <span>Deck name</span>
      <n-input
        @input="deckNameChangedACB"
        v-bind:value="this.deckCreation.deckTitle"
        type="text"
        class="deckname"
        placeholder="Title your deck"
      />
      <div>
        <span>From language</span>
        <span id="toLangText">To language</span>
      </div>
      <n-input-group>
        <n-select
          :on-update:value="fromLanguageChangedACB"
          filterable
          placeholder="Select a language"
          v-bind:value="deckCreation.fromLang"
          default-value="sv"
          :options="deckCreation.langOptions"
        />
        <n-button id="langSwitchBtn" type="info" @click="clickedLangSwitchBtn">
          ⇆
        </n-button>
        <n-select
          :on-update:value="toLanguageChangedACB"
          filterable
          placeholder="Select a language"
          v-bind:value="deckCreation.toLang"
          default-value="en"
          :options="deckCreation.langOptions"
        />
      </n-input-group>
    </div>
    <div class="addword">
      <h2 id="addWordTitle">Add words</h2>
      <span class="fromLangTextAddWord">{{
        getLangName(deckCreation.fromLang)
      }}</span>
      <span>{{ getLangName(deckCreation.toLang) }}</span>
      <n-input-group>
        <n-input
          @input="langFromWordChangedACB"
          placeholder="Language from"
          v-bind:value="deckCreation.langFromWord"
        />
        <n-input
          @input="langToWordChangedACB"
          placeholder="Language to"
          v-bind:value="deckCreation.langToWord"
          :loading="
            deckCreation.translatedWordPromiseState.promise &&
            !deckCreation.translatedWordPromiseState.data &&
            !deckCreation.translatedWordPromiseState.error
          "
        />
        <n-button @click="clickedAddWordACB" type="primary">Add word</n-button>
      </n-input-group>
      <n-button
        id="getTranslation"
        type="info"
        @click="clickedGetTranslationACB"
        >Get translation</n-button
      >
    </div>
    <div class="deckWords">
      <h2 id="deckWordsTitle">
        Words in deck ({{ getNumberOfWordsInDeck() }})
      </h2>
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
            <span class="wordFrom">{{ word.from }}</span>
            <span class="wordTo">{{ word.to }}</span>
            <n-button
              id="removeWordButton"
              type="error"
              size="tiny"
              @click="clickedDeleteWordACB(word)"
              >Delete</n-button
            >
          </div>
        </div>
      </div>
    </div>
    <n-alert
      v-if="deckCreation.creationErrorNoName"
      class="alert"
      title="Deck error"
      type="error"
    >
      Please name your deck.
    </n-alert>
    <n-alert
      v-if="deckCreation.creationErrorNoWords"
      class="alert"
      title="Deck error"
      type="error"
    >
      Please add at least one word to your deck.
    </n-alert>
    <n-button
      v-if="!deckCreation.isEditing"
      class="createdeck"
      type="primary"
      @click="clickedCreateDeckACB"
      >Create deck</n-button
    >
    <n-button
      v-else
      class="createdeck"
      type="primary"
      @click="clickedFinishEditACB"
      >Finish and save deck</n-button
    >
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
  margin-left: 144px;
}

.deckparams {
  width: 100%;
  margin-bottom: 50px;
}

.deckname {
  margin-bottom: 15px;
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

.wordFrom {
  display: inline-block;
  width: 42%;
  overflow-block: scroll;
  scrollbar-width: thin;
}
.wordTo {
  display: inline-block;
  width: 42%;
  overflow-block: scroll;
  scrollbar-width: thin;
  margin-left: 10px;
}

#getTranslation {
  margin-top: 10px;
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
  max-height: 250px;
  overflow-y: scroll;
}

#scrollbarWord {
  color: rgb(255, 255, 255);
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

.createdeck {
  width: 100%;
}

#langSwitchBtn {
  width: 50px;
}
</style>
