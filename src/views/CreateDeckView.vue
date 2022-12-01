<script setup>
import { NInput, NInputGroup, NSelect, NButton } from "naive-ui";
</script>

<script>
export default {
  props: ["model"],

  methods: {},

  data() {
    return {
      options: [
        {
          label: "Swedish",
          value: "swedish",
        },
        {
          label: "English",
          value: "english",
        },
      ],
      currentLangFrom: "Select a language",
      currentLangTo: "Select a language",
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
        <n-select placeholder="Select a language" :options="options"/>
        <n-select placeholder="Select a language" :options="options"/>
      </n-input-group>
    </div>
    <div class="addword">
      <n-input pair separator="-"/>
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

</style>
