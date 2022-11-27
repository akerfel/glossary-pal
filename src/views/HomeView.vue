<script>
export default {
  props: ["wordLists"],

  methods: {
    clickedReviewListACB(listName) {
        console.log("review list: " + listName)
    },
    clickedEditListACB(listName) {
        console.log("edit list: " + listName)
    },
    clickedDeleteListACB(listName) {
        console.log("delete list: " + listName)
    },
  }
};
</script>

<template>
  <p class="title">{{ "Review a list"}}</p>
  <div v-for="wordList in wordLists" v-bind:key="wordList">
    <div class="reviewListSection">

      <div>
        <p>{{wordList.name}}</p> 
        <p class="wordsLanguages">{{wordList.lang1}} to {{wordList.lang2}} </p> 
      </div>

      <div>
        <button
          class="reviewListButton"
          @click="clickedReviewListACB(wordList.name)">
          Review
        </button>
        <button
          class="editListButton"
          @click="clickedEditListACB(wordList.name)">
          Edit
        </button>
        <button
          class="deleteListButton"
          @click="clickedDeleteListACB(wordList.name)">
          Delete
        </button>
      </div>

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
  font-size: 24px;
}

.reviewListSection {
  margin:5px auto;
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
  width: 200px;
  border-radius: 25px;
  border: 2px solid #000000;
}

.reviewListButton {
}

.editListButton {
  
}

.deleteListButton {
  
}


.wordsLanguages{
  font-size: 12px;
  color: rgb(70, 70, 70);
}
</style>