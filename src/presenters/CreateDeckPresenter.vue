<script>
import CreateDeckView from "../views/CreateDeckView.vue";
import PostCreateDeckView from "../views/PostCreateDeckView.vue";
import promiseNoData from "../views/promiseNoData.vue";
import Deck from "../Deck";
import { getAvailableLanguages, translateWord } from "../apiCalls";
import resolvePromise from "../resolvePromise";
import langCodeMap from "../langCodesMap";

export default {
  components: { CreateDeckView, PostCreateDeckView, promiseNoData },
  props: {
    model: Object,
  },
  created() {
    resolvePromise(
      getAvailableLanguages(),
      this.langCodesPromiseState,
      this.getLangOptionsACB
    );
  },
  methods: {
    receiveTranslatedWordACB() {
      if (this.deckCreation.translatedWordPromiseState.data) {
        this.deckCreation.langToWord =
          this.deckCreation.translatedWordPromiseState.data;
      }
    },
    translateFromLangWord() {
      const sourceLang = this.deckCreation.fromLang;
      const targetLang = this.deckCreation.toLang;
      const toBeTranslated = this.deckCreation.langFromWord;
      resolvePromise(
        translateWord(sourceLang, targetLang, toBeTranslated),
        this.deckCreation.translatedWordPromiseState,
        this.receiveTranslatedWordACB
      );
    },
    getLangOptionsACB() {
      function createLangOptionCB(langCode) {
        const langName = langCodeMap.get(langCode).name;
        return { label: langName, value: langCode };
      }
      if (this.langCodesPromiseState.data) {
        this.deckCreation.langOptions =
          this.langCodesPromiseState.data.map(createLangOptionCB);
      }
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
          langCodeMap.get(dc.fromLang).name,
          langCodeMap.get(dc.toLang).name,
          dc.deckWords
        );
        dc.creationErrorNoName = false;
        dc.creationErrorNoWords = false;
        dc.creationSuccessfull = true;
        this.model.addDeck(thisDeck);
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
      langCodesPromiseState: {},
      deckCreation: {
        translatedWordPromiseState: {},
        langOptions: [],
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
        fromLang: "sv",
        toLang: "en",
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
  <promiseNoData :promiseState="this.langCodesPromiseState" />
  <CreateDeckView
    v-if="this.langCodesPromiseState.data"
    :deckCreation="deckCreation"
    :onCreateDeck="createdDeckACB"
    :onDeleteWord="deleteWordACB"
    :onAddWord="addWordACB"
    :onGetTranslate="translateFromLangWord"
  />
  <PostCreateDeckView
    :deckCreation="deckCreation"
    :onGoToHome="goToHomeACB"
    :onCreateAnotherDeck="refreshViewACB"
  />
</template>
