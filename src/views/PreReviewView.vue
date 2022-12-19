<script setup>
import { NButton, NSwitch, NCheckbox } from "naive-ui";
</script>

<script>
export default {
  props: [
    "currentDeckName",
    "fromLanguage",
    "toLanguage",
  ],

  methods: {
  },

  
};
</script>

<template>
  <div>
    <h1>
      <b>Review settings</b>
    </h1>
  </div>
  <table>
    <tr>
      <n-checkbox class="checkboxes">
        <p style="color:#DDDDDD">
          Random order
        </p>
      </n-checkbox>
    </tr>
    <tr>
      <n-checkbox>
          <p style="color:#DDDDDD">
            Reverse languages ({{ toLanguage }} to {{ fromLanguage }})
          </p>
      </n-checkbox>
    </tr>
  </table>

  <n-button
    type="primary"
    size="large"
    class="startReviewButton"
    @click="clickedCreateDeckACB"
    >Start review
  </n-button>
</template>

<style scoped>

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
