import Deck from "./Deck";

class GlossaryModel {
  constructor(decks = []) {
    this.decks = decks;

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
}

export default GlossaryModel;
