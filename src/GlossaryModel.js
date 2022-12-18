import Deck from "./Deck";
import firebase from "firebase";

class GlossaryModel {
  constructor(decks = []) {
    this.decks = decks;
  }

  static nextDeckID = 0;

  static getNextDeckID() {
    const thisID = GlossaryModel.nextDeckID;
    GlossaryModel.nextDeckID += 1;
    return thisID;
  }

  static getUserID() {
    return firebase.auth().currentUser.uid;
  }

  clearCurrentDeck() {
    this.currentDeck = {}; // the current deck being reviewed
  }

  resetReviewAttributes() {
    this.currentWordIndex = 0; // index of the current word being reviewed
    this.wrongAnswerIndexes = []; // the indexes of the words in currentDeck which were answered incorrectly
  }

  deleteDeck(deckID) {
    function filterOnIDCB(deck) {
      return !(deck.id === deckID);
    }

    this.decks = this.decks.filter(filterOnIDCB);
  }

  addDeck(deck) {
    this.decks.push(deck);
    this.addDeckToFirebase(deck);
  }

  getDeck(deckID) {
    function filterOnIDCB(deck) {
      return deck.id === deckID;
    }

    return this.decks.find(filterOnIDCB);
  }

  selectDeckToReview(deck) {
    this.currentDeck = deck;
    this.currentWordIndex = 0;
    this.wrongAnswerIndexes = [];
  }

  hasNextWord() {
    return this.currentWordIndex < this.currentDeck.words.length - 1;
  }

  getCurrentWord() {
    return this.currentDeck.getWord(this.currentWordIndex).from;
  }

  getCurrentWordAnswer() {
    return this.currentDeck.getWord(this.currentWordIndex).to;
  }

  getNextCurrentWord() {
    this.currentWordIndex++;
    return this.getCurrentWord();
  }

  getCorrectAnswer() {
    return this.currentDeck.getWord(this.currentWordIndex).to;
  }

  answerIsCorrect(answer) {
    return answer.toLowerCase() === this.getCorrectAnswer().toLowerCase();
  }

  // Adds the index of the current word to this.wrongAnswerIndexes
  addCurrentWordToWrongAnswerIndexes() {
    if (!this.wrongAnswerIndexes.includes(this.currentWordIndex)) {
      this.wrongAnswerIndexes.push(this.currentWordIndex);
    }
  }

  getWrongAnswerIndexes() {
    return this.wrongAnswerIndexes;
  }

  getCurrentWordIndex() {
    return this.currentWordIndex;
  }

  getCurrentDeckSize() {
    return this.currentDeck.words.length;
  }

  getDeckOfWrongWords() {
    var wrongWords = [];
    for (let index of this.wrongAnswerIndexes) {
      wrongWords.push(this.currentDeck.words[index]);
    }
    return wrongWords;
  }

  getEditDeck() {
    return this.currentEditDeck;
  }

  setCurrentEditDeck(deck) {
    this.currentEditDeck = deck;
  }

  resetCurrentEditDeck() {
    this.currentEditDeck = false;
  }

  updateCurrentEditDeck(editedDeck) {
    const editDeckID = this.currentEditDeck.getDeckID();
    this.decks = this.decks.map((deck) => {
      if (deck.getDeckID() === editDeckID) {
        return editedDeck;
      } else return deck;
    });
  }

  addDeckToFirebase(deck) {
    const userID = GlossaryModel.getUserID();
    firebase
      .database()
      .ref("users/" + userID + "/decks/" + deck.id)
      .set({
        deck,
      });
  }
}

export default GlossaryModel;
