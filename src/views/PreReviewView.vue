<script setup>
import { NButton, NSwitch, NCheckbox } from "naive-ui";
</script>

<script>
export default {
  props: [
    "currentDeckName",
    "fromLanguage",
    "toLanguage",
    "onStartReview",
    "onRandomOrder",
    "onReverseLanguages",
  ],

  methods: {
  },
};
</script>

<template>
  <div class="header">
    <h1>
      <b>Review settings</b>
    </h1>
    <p>{{ currentDeckName }} ({{ fromLanguage }} -> {{ toLanguage }})</p>
  </div>
  <table>
    <tr>
      <n-checkbox 
        class="checkboxes"
        @click="onRandomOrder">
        <p style="color:#DDDDDD">
          Random order
        </p>
      </n-checkbox>
    </tr>
    <tr>
      <n-checkbox
        class="checkboxes"
        @click="onReverseLanguages">
        <p style="color:#DDDDDD">
          Reverse languages ({{ toLanguage }} -> {{ fromLanguage }})
        </p>
      </n-checkbox>
    </tr>
  </table>

  <n-button
    type="primary"
    size="large"
    class="startReviewButton"
    @click="onStartReview"
    >Start review
  </n-button>
</template>

<style scoped>

.header {
  text-align:center; 
  margin-bottom:10px;
}
.checkboxes {
  margin-top: 6px;
  margin-bottom: 6px;
  float: left;
  text-align: left;
}

.checkboxLabels{
  margin-right: 6px;
  color: white;
}

.startReviewButton{
  margin-top: 20px;
}
</style>
