<script setup>
import {
  NInput,
} from "naive-ui";
import Deck from "../Deck";
</script>

<script>
export default {
  props: ["model", 
          "onConfirmAnswer", 
          "deck"
          ],

  methods: {
    
  },

  created() {
    console.log("deck in view: ")
    console.log(this.deck)
    console.log(this.deck.name)
    console.log("---")
  },

  data() {
    return {
        answer: "",
    };
  },
};
</script>

<template>
  <div>
    <p> Reviewing Deck "{{this.deck.name}}"</p>
  </div>  
  <div>
    <n-input v-model:value="answer" placeholder="Your answer..."/>
  </div>
</template>

<style scoped>
</style>
