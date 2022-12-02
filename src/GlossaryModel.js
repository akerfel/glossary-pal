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
    this.addDeck(deck1);
    this.addDeck(deck2);
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

  addCurrentWordToWrongAnswers() {
    this.wrongAnswers.push(this.getWordToTranslate());
  }

  getWrongAnswers() {
    return this.wrongAnswers;
  }
}

export default GlossaryModel;
