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
      <n-input class="deckname" type="text" placeholder="Deck name" />
      <div>
        <span>From language:</span>
        <span id="toLangText">To language:</span>
      </div>
      <n-dropdown trigger="click" :options="options" @select="selectLangFrom">
        <n-button class="deckLangFrom" color="#e67512">{{
          this.currentLangFrom
        }}</n-button>
      </n-dropdown>
      <n-dropdown trigger="click" :options="options" @select="selectLangTo">
        <n-button class="deckLangTo" color="#e67512">{{
          this.currentLangTo
        }}</n-button>
      </n-dropdown>
    </div>
    <div class="addword"></div>
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
  margin-left: 160px;
}

.deckparams {
  width: 100%;
}

.deckname {
  margin-bottom: 15px;
}

.deckLangFrom {
  width: 40%;
}

.deckLangTo {
  width: 40%;
  float: right;
}
</style>
