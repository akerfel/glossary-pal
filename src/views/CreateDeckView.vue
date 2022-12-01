<script setup>
import { NInput, NInputGroup, NSelect, NButton, NScrollbar } from "naive-ui";
</script>

<script>
export default {
  props: ["model"],

  methods: {
    clickedAddWordACB() {
      console.log("clicked add word");
    },
    clickedDeleteWordACB() {
      console.log("clicked delete word");
    },
    clickedCreateDeckACB() {
      console.log("clicked create deck")
    }
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
        {
          from: "Lejon",
          to: "Lion",
        },
        {
          from: "Lejon",
          to: "Lion",
        },
        {
          from: "Lejon",
          to: "Lion",
        },
        {
          from: "Lejon",
          to: "Lion",
        },
        {
          from: "Lejon",
          to: "Lion",
        },
        {
          from: "Lejon",
          to: "Lion",
        },
        {
          from: "Lejon",
          to: "Lion",
        },
        {
          from: "Lejon",
          to: "Lion",
        },
        {
          from: "Lejon",
          to: "Lion",
        },
        {
          from: "Lejon",
          to: "Lion",
        },
        {
          from: "Lejon",
          to: "Lion",
        },
        {
          from: "Lejon",
          to: "Lion",
        },
        {
          from: "Lejon",
          to: "Lion",
        },
        {
          from: "Lejon",
          to: "Lion",
        },
      ],
      langFrom: "Swedish",
      langTo: "English",
    };
  },
};
</script>

<template>
  <div class="createview">
    <h1 class="title">Create new glossary deck</h1>
    <div class="deckparams">
      <span>Deck name</span>
      <n-input class="deckname" type="text" placeholder="Title your deck" />
      <div>
        <span>From language</span>
        <span id="toLangText">To language</span>
      </div>
      <n-input-group>
        <n-select
          v-model:value="langFrom"
          placeholder="Select a language"
          :options="options"
        />
        <n-select
          v-model:value="langTo"
          placeholder="Select a language"
          :options="options"
        />
      </n-input-group>
    </div>
    <div class="addword">
      <h2 id="addWordTitle">Add words</h2>
      <span class="fromLangTextAddWord">{{ this.langFrom }}</span>
      <span class="toLangTextAddWord">{{ this.langTo }}</span>
      <n-input-group>
        <n-input placeholder="Language from" />
        <n-input placeholder="Language to" />
        <n-button @click="clickedAddWordACB" type="primary">Add word</n-button>
      </n-input-group>
    </div>
    <div class="addedwords">
      <h2 id="addedWordsTitle">Words in deck</h2>
      <div id="scrollbarDiv">
        <div id="addedWordsColumns">
          <span class="fromLangTextAddWord">{{ this.langFrom }}</span>
          <span class="toLangTextAddWord">{{ this.langTo }}</span>
        </div>
        <n-scrollbar style="max-height: 250px;">
          <div id="scrollbarWord" v-for="word in this.addedWords">
            <span class="fromLangTextAddWord">{{ word.from }}</span>
            <span class="toLangTextAddWord">{{ word.to }}</span>
            <n-button
              id="removeWordButton"
              type="error"
              size="tiny"
              @click="clickedDeleteWordACB"
              >Delete</n-button
            >
          </div>
        </n-scrollbar>
      </div>
    </div>
    <n-button id="createdeck" type="primary" @click="clickedCreateDeckACB">Create deck</n-button>
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
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
}

#scrollbarDiv {
  border: 2px solid rgb(206, 50, 50);
}

#scrollbarWord {
  background-color: aliceblue;
  color: rgb(0, 0, 0);
  margin: 5px;
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
