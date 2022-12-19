import Deck from "./Deck";

class GlossaryModel {
  constructor(decks = [], nextDeckID = 0) {
    this.decks = decks;
    this.observers = [];
    this.nextDeckID = nextDeckID;
  }

  getNextDeckID() {
    const thisID = this.nextDeckID;
    this.nextDeckID += 1;
    this.notifyObservers({ nextDeckID: this.nextDeckID });
    return thisID;
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
    this.notifyObservers({ deleteDeckID: deckID });
  }

  addDeck(deck) {
    this.decks.push(deck);
    this.notifyObservers({ addOrEditDeck: deck });
  }

  // Returns a deep copy of the specified deck
  getDeck(deckID) {
    function filterOnIDCB(deck) {
      return deck.id === deckID;
    }

    var deck = this.decks.find(filterOnIDCB)
    var deckDeepCopy = this.getDeepCopyOfDeck(deck);
    return deckDeepCopy;
  }

  shuffleCurrentDeck() {
    this.currentDeck.words = this.currentDeck.words
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  // Sets currentDeck to a deep copy of the given deck
  selectDeckToReview(deck) {
    this.currentDeck = this.getDeepCopyOfDeck(deck);
    this.currentWordIndex = 0;
    this.wrongAnswerIndexes = [];

    this.shuffleCurrentDeck();
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

  setCurrentDeckToWrongAnswers() {
    this.currentDeck.words = this.getDeckOfWrongWords();
  }

  getDeepCopyOfDeck(deckToCopy) {
    var deepCopyDeck = new Deck(
      deckToCopy.id,
      deckToCopy.name,
      deckToCopy.lang1,
      deckToCopy.lang2,
      []
    );

    for (let word of deckToCopy.words) {
      deepCopyDeck.words.push({from: word.from, to: word.to});
    }

    return deepCopyDeck;
  }

  resetCurrentEditDeck() {
    this.currentEditDeck = false;
  }

  setCurrentDeckToFullDeck() {
    this.currentDeck = this.getDeck(this.currentDeck.id);
  }

  updateCurrentEditDeck(editedDeck) {
    const editDeckID = this.currentEditDeck.getDeckID();
    this.decks = this.decks.map((deck) => {
      if (deck.getDeckID() === editDeckID) {
        return editedDeck;
      } else return deck;
    });
    this.notifyObservers({ addOrEditDeck: editedDeck });
  }

  notifyObservers(payload) {
    function invokeObserverCB(obs) {
      try {
        obs(payload);
      } catch (err) {
        console.log(err);
      }
    }
    this.observers.forEach(invokeObserverCB);
  }

  addObserver(callback) {
    this.observers.push(callback);
  }

  removeObserver(callback) {
    this.observers = this.observers.filter(function removeCallbackCB(cb) {
      return cb !== callback;
    });
  }
}

export default GlossaryModel;
