<script>
export default {
  props: ["listNames"],

  methods: {
    reviewListACB(listName) {
        console.log("listName clicked: " + listName)
    },
  }
};
</script>

<template>
  <p class="title">{{ "Review a list"}}</p>
  <div v-for="listName in listNames" v-bind:key="listName">
    <button
          class="listNameButton"
          @click="reviewListACB(listName)"
      >{{ listName }}</button>
  </div>
</template>

<!-- Include CSS here
     Remember to include scoped to isolate 
     CSS to this file  -->
<style scoped>
.title {
  color: rgb(0, 255, 242);
  font-weight: bold;
}

.listNameButton {
  color: rgb(0, 255, 13);
  font-weight: bold;
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>