<script>
export default {
  props: ["wordLists"],

  methods: {
    clickedReviewListACB(listName) {
        console.log("listName clicked: " + listName)
    },
  }
};
</script>

<template>
  <p class="title">{{ "Review a list"}}</p>
  <div v-for="wordList in wordLists" v-bind:key="wordList">
    <div>
      <button
        class="listNameButton"
        @click="clickedReviewListACB(wordList.name)">
          <div>
            <p>{{wordList.name}}</p> 
            <p class="wordsLanguages">{{wordList.lang1}} to {{wordList.lang2}} </p> 
          </div>
      </button>
    </div>
  </div>

</template>

<!-- Include CSS here
     Remember to include scoped to isolate 
     CSS to this file  -->
<style scoped>
.title {
  color: rgb(0, 0, 0);
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
  font-size: 18px;
  margin: 4px 2px;
  cursor: pointer;
  width: 200px
}

.wordsLanguages{
  font-size: 10px;
  color: rgb(193, 193, 193);
}
</style>