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
    if (this.model.getEditDeck()) {
      this.initEdit();
    }
    resolvePromise(
      getAvailableLanguages(),
      this.langCodesPromiseState,
      this.getLangOptionsACB
    );
  },
  methods: {
    initEdit() {
      const editDeck = this.model.getEditDeck();
      this.deckCreation.isEditing = true;
      this.deckCreation.deckTitle = editDeck.name;
      this.deckCreation.fromLang = this.getLangCode(editDeck.lang1);
      this.deckCreation.toLang = this.getLangCode(editDeck.lang2);
      this.deckCreation.deckWords = editDeck.words;
    },
    getLangName(code) {
      return langCodeMap.get(code).name;
    },
    getLangCode(name) {
      for (let [code, value] of langCodeMap.entries()) {
        if (value.name === name) return code;
      }
      return "";
    },
    receiveTranslatedWordACB() {
      if (this.deckCreation.translatedWordPromiseState.data) {
        this.deckCreation.langToWord =
          this.deckCreation.translatedWordPromiseState.data;
      }
    },
    translateFromLangWordACB() {
      const sourceLang = this.deckCreation.fromLang;
      const targetLang = this.deckCreation.toLang;
      const toBeTranslated = this.deckCreation.langFromWord;
      if (toBeTranslated.length > 0) {
        resolvePromise(
          translateWord(sourceLang, targetLang, toBeTranslated),
          this.deckCreation.translatedWordPromiseState,
          this.receiveTranslatedWordACB
        );
      }
    },
    getLangOptionsACB() {
      function createLangOptionCB(langCode) {
        const langName = langCodeMap.get(langCode).name;
        return { label: langName, value: langCode };
      }
      function sortLangOptionsAlphabeticallyCB(langOption1, langOption2) {
        return langOption1.label > langOption2.label;
      }
      if (this.langCodesPromiseState.data) {
        const unsortedLangOptions =
          this.langCodesPromiseState.data.map(createLangOptionCB);
        this.deckCreation.langOptions = unsortedLangOptions.sort(
          sortLangOptionsAlphabeticallyCB
        );
      }
    },
    setDeckTitle(deckTitle) {
      this.deckCreation.deckTitle = deckTitle;
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
          this.getLangName(dc.fromLang),
          this.getLangName(dc.toLang),
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
    resetDeckCreationVarsACB() {
      let dc = this.deckCreation;
      dc.deckWords = [];
      dc.deckTitle = "";
      dc.langFromWord = "";
      dc.langToWord = "";
      dc.creationSuccessfull = false;
      dc.creationErrorNoName = false;
      dc.creationErrorNoWords = false;
    },
    setFromLanguage(langCode) {
      this.deckCreation.fromLang = langCode;
    },
    setToLanguage(langCode) {
      this.deckCreation.toLang = langCode;
    },
    setLangToWord(word) {
      this.deckCreation.langToWord = word;
    },
    setLangFromWord(word) {
      this.deckCreation.langFromWord = word;
    },
    switchDeckLanguages() {
      const tmp = this.deckCreation.fromLang;
      this.deckCreation.fromLang = this.deckCreation.toLang;
      this.deckCreation.toLang = tmp;
    },
    getNumberOfWordsInDeck() {
      return this.deckCreation.deckWords.length;
    },
    finishEditingDeck() {
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
          this.getLangName(dc.fromLang),
          this.getLangName(dc.toLang),
          dc.deckWords
        );
        dc.creationErrorNoName = false;
        dc.creationErrorNoWords = false;
        this.model.updateCurrentEditDeck(thisDeck);
        this.$router.push("/");
      }
    },
  },
  data() {
    return {
      langCodesPromiseState: {},
      deckCreation: {
        isEditing: false,
        translatedWordPromiseState: {},
        langOptions: [],
        deckWords: [],
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
  <promiseNoData :promiseState="langCodesPromiseState" />
  <CreateDeckView
    v-if="langCodesPromiseState.data"
    :deckCreation="deckCreation"
    :onCreateDeck="createdDeckACB"
    :onDeleteWord="deleteWordACB"
    :onAddWord="addWordACB"
    :onGetTranslate="translateFromLangWordACB"
    :getLangName="getLangName"
    :onDeckNameChange="setDeckTitle"
    :onFromLangChange="setFromLanguage"
    :onToLangChange="setToLanguage"
    :onLangToWordChange="setLangToWord"
    :onLangFromWordChange="setLangFromWord"
    :onLangSwitch="switchDeckLanguages"
    :getNumberOfWordsInDeck="getNumberOfWordsInDeck"
    :onFinishEditDeck="finishEditingDeck"
  />
  <PostCreateDeckView
    :deckCreation="deckCreation"
    :onGoToHome="goToHomeACB"
    :onCreateAnotherDeck="resetDeckCreationVarsACB"
    :getLangName="getLangName"
    :getNumberOfWordsInDeck="getNumberOfWordsInDeck"
  />
</template>
