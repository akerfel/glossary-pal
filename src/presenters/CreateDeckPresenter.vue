<script>
import CreateDeckView from "../views/CreateDeckView.vue";
import PostCreateDeckView from "../views/PostCreateDeckView.vue";
import Deck from "../Deck";
import { getAvailableLanguages } from "../apiCalls";
import resolvePromise from "../resolvePromise";
import langCodeMap from "../langCodesMap";

export default {
  components: { CreateDeckView, PostCreateDeckView },
  props: {
    model: Object,
  },
  created() {
    resolvePromise(
      getAvailableLanguages(),
      this.deckCreation.langCodesPromiseState,
      this.getFullLangNames
    );
  },
  methods: {
    getFullLangNames() {
      function getLangNameCB(code) {
        return langCodeMap.get(code).name;
      }
      if (this.deckCreation.langCodesPromiseState.data) {
        this.deckCreation.langNames =
          this.deckCreation.langCodesPromiseState.data.map(getLangNameCB);
      }
    },
    addDeck(deck) {
      this.model.decks.push(deck);
    },
    createdDeckACB() {
      let dc = this.deckCreation;
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
      let dc = this.deckCreation;
      if (!(dc.langFromWord === "" || dc.langToWord === "")) {
        dc.deckWords.push({ from: dc.langFromWord, to: dc.langToWord });
        dc.addedWordError = false;

        // remove words from input fields
        dc.langFromWord = "";
        dc.langToWord = "";
      }
    },
    deleteWordACB(word) {
      let dc = this.deckCreation;
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
        langCodesPromiseState: [],
        langNames: [],
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
    :onDeleteWord="deleteWordACB"
    :onAddWord="addWordACB"
  />
  <PostCreateDeckView
    :deckCreation="deckCreation"
    :onGoToHome="goToHomeACB"
    :onCreateAnotherDeck="refreshViewACB"
  />
</template>
