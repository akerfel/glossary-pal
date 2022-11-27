import Deck from "./Deck";

class GlossaryModel {
    constructor(decks = []){
        this.decks = decks
        var deck1 = new Deck("Animals", "Swedish", "English", []);
        var deck2 = new Deck("Colors", "Swedish", "English", []);
        var deck3 = new Deck("Countries", "Swedish", "English", []);
        this.decks.push(deck1)
        this.decks.push(deck2)
        this.decks.push(deck3)
    }

    // Returns a list with the names of all decks
    getListNames() {
        function getNameOfListCB(deck) {
            return deck.name
        }

        return this.decks.map(getNameOfListCB)
    }
}

export default GlossaryModel