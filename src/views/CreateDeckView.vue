<script setup>
import {
  NInput,
  NInputGroup,
  NSelect,
  NButton,
  NScrollbar,
  NAlert,
} from "naive-ui";
import Deck from "../Deck";
</script>

<script>
export default {
  props: ["model", "onCreateDeck"],

  methods: {
    clickedAddWordACB() {
      if (!(this.langFromWord === "" || this.langToWord === "")) {
        this.addedWords.push({ from: this.langFromWord, to: this.langToWord });
        this.addedWordError = false;
        
        // remove words from input fields
        this.langFromWord = "";
        this.langToWord = "";
      }
    },
    clickedDeleteWordACB(word) {
      function removeWordCB(thisWord) {
        return !(word === thisWord);
      }

      this.addedWords = this.addedWords.filter(removeWordCB);
    },
    clickedCreateDeckACB() {
      if (this.deckTitle === "") {
        this.creationErrorNoName = true;
        this.creationErrorNoWords = false;
      } else if (this.addedWords.length === 0) {
        this.creationErrorNoWords = true
        this.creationErrorNoName = false;
      }
      else {
        const thisDeck = new Deck(
          this.deckTitle,
          this.fromLang,
          this.toLang,
          this.addedWords
        );
        this.onCreateDeck(thisDeck);
        this.creationErrorNoName = false;
        this.creationErrorNoWords = false;
        this.creationSuccessfull = true;
        }
    },
    goToHomeACB() {
      this.$router.push("/");
    },
    refreshViewACB() {
      this.$router.go();
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
      creationSuccessfull: false,
      creationErrorNoName: false,
      creationErrorNoWords: false,
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
          filterable
          placeholder="Select a language"
          :options="options"
        />
        <n-select
          v-model:value="toLang"
          filterable
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
    <n-alert
      v-if="creationSuccessfull"
      class="alert"
      title="Deck created"
      type="success"
    >
      Your deck "{{ this.deckTitle }}" has been successfully created.
    </n-alert>
    <n-alert
      v-if="creationErrorNoName"
      class="alert"
      title="Deck creation error"
      type="error"
    >
      Please name your deck.
    </n-alert>
    <n-alert
      v-if="creationErrorNoWords"
      class="alert"
      title="Deck creation error"
      type="error"
    >
      Please add at least one word to your deck.
    </n-alert>
    <n-button
      v-if="!creationSuccessfull"
      id="createdeck"
      type="primary"
      @click="clickedCreateDeckACB"
      >Create deck</n-button
    >
    <div v-if="creationSuccessfull">
      <n-button type="primary" @click="goToHomeACB">Go back to home</n-button>
      <n-button style="margin-left: 30px" type="primary" @click="refreshViewACB"
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

.alert {
  margin-bottom: 25px;
}

#createdeck {
  width: 100%;
}
</style>
