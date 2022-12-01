<script setup>
import { NInput, NInputGroup, NSelect, NButton, NScrollbar } from "naive-ui";
import Deck from "../Deck";
</script>

<script>
export default {
  props: ["model", "onCreateDeck"],

  methods: {
    clickedAddWordACB() {
      console.log("added words: " + this.langFromWord + " " + this.langToWord);
      this.addedWords.push({ from: this.langFromWord, to: this.langToWord });

      // remove words from input fields
      this.langFromWord = "";
      this.langToWord = "";
    },
    clickedDeleteWordACB(word) {
      function removeWordCB(thisWord) {
        return !(word === thisWord);
      }

      console.log("clicked delete word");
      this.addedWords = this.addedWords.filter(removeWordCB);
    },
    clickedCreateDeckACB() {
      console.log("Deck title: " + this.deckTitle);
      const thisDeck = new Deck(
        this.deckTitle,
        this.fromLang,
        this.toLang,
        this.addedWords
      );
      this.onCreateDeck(thisDeck);
    },
  },

  data() {
    return {
      options: [
        {
          label: "Swedish",
          value: "Swedish",
        },
        {
          label: "English",
          value: "English",
        },
      ],
      addedWords: [
        {
          from: "Bil",
          to: "Car",
        },
        {
          from: "Motorcykel",
          to: "Motorcycle",
        },
        {
          from: "Lejon",
          to: "Lion",
        },
      ],
      deckTitle: "",
      fromLang: "Swedish",
      toLang: "English",
      langFromWord: "",
      langToWord: "",
    };
  },
};
</script>

<template>
  <div class="createview">
    <h1 class="title">Create new glossary deck</h1>
    <div class="deckparams">
      <span>Deck name</span>
      <n-input
        v-model:value="deckTitle"
        class="deckname"
        placeholder="Title your deck"
      />
      <div>
        <span>From language</span>
        <span id="toLangText">To language</span>
      </div>
      <n-input-group>
        <n-select
          v-model:value="fromLang"
          placeholder="Select a language"
          :options="options"
        />
        <n-select
          v-model:value="toLang"
          placeholder="Select a language"
          :options="options"
        />
      </n-input-group>
    </div>
    <div class="addword">
      <h2 id="addWordTitle">Add words</h2>
      <span class="fromLangTextAddWord">{{ this.fromLang }}</span>
      <span class="toLangTextAddWord">{{ this.toLang }}</span>
      <n-input-group>
        <n-input v-model:value="langFromWord" placeholder="Language from" />
        <n-input v-model:value="langToWord" placeholder="Language to" />
        <n-button @click="clickedAddWordACB" type="primary">Add word</n-button>
      </n-input-group>
    </div>
    <div class="addedwords">
      <h2 id="addedWordsTitle">Words in deck</h2>
      <div id="scrollbarDiv">
        <div id="addedWordsColumns">
          <span class="fromLangTextAddWord">{{ this.fromLang }}</span>
          <span class="toLangTextAddWord">{{ this.toLang }}</span>
        </div>
        <n-scrollbar style="max-height: 250px">
          <div id="scrollbarWord" v-for="word in this.addedWords">
            <span class="fromLangTextAddWord">{{ word.from }}</span>
            <span class="toLangTextAddWord">{{ word.to }}</span>
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
    <n-button id="createdeck" type="primary" @click="clickedCreateDeckACB"
      >Create deck</n-button
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

.addedwords {
  width: 100%;
  margin-bottom: 25px;
}

#addedWordsTitle {
  color: rgb(0, 194, 81);
  text-align: center;
  margin-bottom: 10px;
}

#addedWordsColumns {
  background-color: rgb(144, 144, 165);
  color: rgb(0, 0, 0);
  height: 28px;

  margin: 5px;
}

#scrollbarDiv {
  border: 2px solid rgb(206, 50, 50);
}

#scrollbarWord {
  background-color: aliceblue;
  color: rgb(0, 0, 0);
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

#removeWordButton {
  width: 50px;
  height: 24px;
  float: right;
}

#createdeck {
  width: 100%;
}
</style>
