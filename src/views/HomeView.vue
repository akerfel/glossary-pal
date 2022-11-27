<script>
export default {
  props: ["decks"],

  methods: {
    clickedReviewListACB(deckName) {
        console.log("review deck: " + deckName)
    },
    clickedEditListACB(deckName) {
        console.log("edit deck: " + deckName)
    },
    clickedDeleteListACB(deckName) {
        console.log("delete deck: " + deckName)
    },
  }
};
</script>

<template>
  <p class="title">{{ "Review a deck"}}</p>
  <div v-for="deck in decks" v-bind:key="deck">
    <div class="reviewListSection">

        <span class="deckName">{{deck.name}}</span> 
        <span class="wordsLanguages">{{deck.lang1}} to {{deck.lang2}} </span> 
  
        <span class="deckButtons">
          <button
            class="reviewListButton"
            @click="clickedReviewListACB(deck.name)">
            Review
          </button>
          <button
            class="editListButton"
            @click="clickedEditListACB(deck.name)">
            Edit
          </button>
          <button
            class="deleteListButton"
            @click="clickedDeleteListACB(deck.name)">
            Delete
          </button>
        </span>

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
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  width: 400px;
  border-radius: 8px;
  border: 2px solid #000000;
}

.deckName {
  text-align: left;
  float: left;
  width: 100px;
}

.wordsLanguages{
  font-size: 12px;
  color: rgb(70, 70, 70);
  margin: 15px;
  float: center;
  width: 100px;
}

.reviewListButton {
}

.editListButton {
  
}

.deleteListButton {
  
}
</style>