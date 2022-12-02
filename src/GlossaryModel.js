import Deck from "./Deck";

class GlossaryModel {
  constructor(decks = []) {
    this.decks = decks;

    this.resetReviewAttributes();

    // Adding some example decks
    var deck1 = new Deck("Animals", "Swedish", "English", 
      [{from: "katt", to: "cat"},
       {from: "björn", to: "bear"},
       {from: "lejon", to: "lion"},]);
    var deck2 = new Deck("Colors", "Swedish", "English", 
      [{from: "röd", to: "red"},
       {from: "grön", to: "green"},
       {from: "blå", to: "blue"},]);
    var deck3 = new Deck("Hard Swedish Words", "Swedish", "Swedish",
      [{from: "hedendom", to: "religionslöshet"},
       {from: "hedonism", to: "njutningsfilosofi"},
       {from: "hegemoni", to: "maktställning"},]);
    this.addDeck(deck1);
    this.addDeck(deck2);
    this.addDeck(deck3);
  }

  resetReviewAttributes() {
    this.currentDeck = {};          // the current deck being reviewed
    this.wordToTranslateIndex = 0;  // index of the current word being reviewed
    this.wrongAnswers = [];         // wrong answers in the *from*-language
  }

  deleteDeck(deckID) {
    function filterOnIDCB(deck) {
      return !(deck.id === deckID);
    }

    this.decks = this.decks.filter(filterOnIDCB);
  }

  addDeck(deck) {
    this.decks.push(deck);
  }

  getDeck(deckID) {
    function filterOnIDCB(deck) {
      return (deck.id === deckID);
    }

    return this.decks.find(filterOnIDCB)
  }

  selectDeckToReview(deck) {
    this.currentDeck = deck;
    this.wordToTranslateIndex = 0;
    this.incorrectWords = [];
  }

  hasNextWord() {
    return this.wordToTranslateIndex < this.currentDeck.words.length - 1
  }
  

  getWordToTranslate() {
    return this.currentDeck.getWord(this.wordToTranslateIndex).from;
  }

  getWordToTranslateAnswer() {
    return this.currentDeck.getWord(this.wordToTranslateIndex).to;
  }


  getNextWordToTranslate() {
    this.wordToTranslateIndex++;
    return this.getWordToTranslate();
  }

  getCorrectAnswer() {
    return this.currentDeck.getWord(this.wordToTranslateIndex).to;
  }

  answerIsCorrect(answer) {
    return answer === this.getCorrectAnswer()
  }

  // Adds the index of the current word to this.wrongAnswers
  addCurrentWordToWrongAnswers() {
    if (!this.wrongAnswers.includes(this.wordToTranslateIndex)) {
      this.wrongAnswers.push(this.wordToTranslateIndex);
    }
  }

  getWrongAnswers() {
    return this.wrongAnswers;
  }

  getCurrentWordIndex() {
    return this.wordToTranslateIndex;
  }

  getCurrentDeckSize() {
    return this.currentDeck.words.length;
  }
}

export default GlossaryModel;
