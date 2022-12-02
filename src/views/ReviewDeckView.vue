<script setup>
import {
  NInput,
} from "naive-ui";
</script>

<script>
export default {
  props: ["wordToTranslate", 
          "onConfirmAnswer",
          ],

  methods: {
    
  },

  created() {

  },

  data() {
    return {
        answer: "",
    };
  },
};
</script>

<template>
  <div class="reviewDeckView">
    <span class="inputWordSection">
      <h2>{{wordToTranslate}}</h2>
      <n-input
        v-model:value="answer"
        placeholder="Your answer..."
      />
    </span>
  </div>  
</template>

<style scoped>

.reviewDeckView {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

.inputWordSection {
  display: inline-block;
  width: 100%;
}

</style>
