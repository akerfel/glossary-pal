<script>
import CreateDeckView from "../views/CreateDeckView.vue";
import Deck from "../Deck";

export default {
  components: { CreateDeckView },
  props: {
    model: Object,
  },
  methods: {
    addDeck(deck) {
      this.model.decks.push(deck);
    },
    createdDeckACB() {
      let dc = this.deckCreation
      if (dc.deckTitle === "") {
        dc.creationErrorNoName = true;
        dc.creationErrorNoWords = false;
      } else if (dc.deckWords.length === 0) {
        dc.creationErrorNoWords = true;
        dc.creationErrorNoName = false;
      } else {
        const thisDeck = new Deck(
          dc.deckTitle,
          dc.fromLang,
          dc.toLang,
          dc.deckWords
        );
        dc.creationErrorNoName = false;
        dc.creationErrorNoWords = false;
        dc.creationSuccessfull = true;
        this.addDeck(thisDeck);
      }
    },
    addWordACB() {
      let dc = this.deckCreation
      if (!(dc.langFromWord === "" || dc.langToWord === "")) {
        dc.deckWords.push({ from: dc.langFromWord, to: dc.langToWord });
        dc.addedWordError = false;

        // remove words from input fields
        dc.langFromWord = "";
        dc.langToWord = "";
      }
    },
    deleteWordACB(word) {
      let dc = this.deckCreation
      function removeWordCB(thisWord) {
        return !(word === thisWord);
      }

      dc.deckWords = dc.deckWords.filter(removeWordCB);
    },
    goToHomeACB() {
      this.$router.push("/");
    },
    refreshViewACB() {
      this.$router.go();
    },
  },
  data() {
    return {
      deckCreation: {
        options: [
          {
            label: "Swedish",
            value: "Swedish",
          },
          {
            label: "English",
            value: "English",
          },
        ],
        deckWords: [
          {
            from: "Bil",
            to: "Car",
          },
          {
            from: "Motorcykel",
            to: "Motorcycle",
          },
          {
            from: "Lejon",
            to: "Lion",
          },
        ],
        deckTitle: "",
        fromLang: "Swedish",
        toLang: "English",
        langFromWord: "",
        langToWord: "",
        creationSuccessfull: false,
        creationErrorNoName: false,
        creationErrorNoWords: false,
      },
    };
  },
};
</script>

<template>
  <CreateDeckView
    :deckCreation="deckCreation"
    :onCreateDeck="createdDeckACB"
    :onGoToHome="goToHomeACB"
    :onCreateAnotherDeck="refreshViewACB"
    :onDeleteWord="deleteWordACB"
    :onAddWord="addWordACB"
  />
</template>
