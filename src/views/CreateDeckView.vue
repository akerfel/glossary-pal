<script setup>
import { NInput, NDropdown, NButton } from "naive-ui";
</script>

<script>
export default {
  props: ["model"],

  methods: {
    selectLangFrom(key) {
      function getOptionWithKey(option) {
        return option.key === key;
      }
      this.currentLangFrom = this.options.filter(getOptionWithKey)[0].label;
    },
    selectLangTo(key) {
      function getOptionWithKey(option) {
        return option.key === key;
      }
      this.currentLangTo = this.options.filter(getOptionWithKey)[0].label;
    },
  },

  data() {
    return {
      options: [
        {
          label: "Swedish",
          key: "swedish",
        },
        {
          label: "English",
          key: "english",
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
      <n-input type="text" placeholder="Deck name" />
      <n-dropdown trigger="click" :options="options" @select="selectLangFrom">
        <n-button>{{ this.currentLangFrom }}</n-button>
      </n-dropdown>
      <n-dropdown trigger="click" :options="options" @select="selectLangTo">
        <n-button>{{ this.currentLangTo }}</n-button>
      </n-dropdown>
    </div>
    <div class="addword"></div>
  </div>
</template>

<style scoped>
.title {
  color: rgb(0, 194, 81);
  margin-bottom: 15px;
}
</style>
