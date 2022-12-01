<script setup>
import { NInput, NInputGroup, NSelect, NButton } from "naive-ui";
</script>

<script>
export default {
  props: ["model"],

  methods: {
    clickedAddWordACB() {
      console.log("clicked add word")
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
      langFrom: "Swedish",
      langTo: "English",
    };
  },
};
</script>

<template>
  <div class="createview">
    <h1 class="title">Create a new glossary deck</h1>
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
      <h2 id="addWordTitle">Add a word</h2>
      <span id="fromLangTextAddWord">{{ this.langFrom }}</span>
      <span id="toLangTextAddWord">{{ this.langTo }}</span>
      <n-input-group>
        <n-input placeholder="Language from" />
        <n-input placeholder="Language to" />
        <n-button @click="clickedAddWordACB" type="primary">Add word</n-button>
      </n-input-group>
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
}

#addWordTitle {
  color: rgb(0, 194, 81);
  text-align: center;
  margin-bottom: 10px;
}

#fromLangTextAddWord {
  display: inline-block;
  width: 42%;
}
</style>
