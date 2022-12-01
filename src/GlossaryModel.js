import Deck from "./Deck";

class GlossaryModel {
  constructor(decks = []) {
    this.decks = decks;
    var deck1 = new Deck("Animals", "Swedish", "English", []);
    var deck2 = new Deck("Colors", "Swedish", "English", []);
    var deck3 = new Deck("Countries", "Swedish", "English", []);
    this.decks.push(deck1);
    this.decks.push(deck2);
    this.decks.push(deck3);
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
}

export default GlossaryModel;
