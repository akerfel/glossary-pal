class Deck {
  static nextID = 0;

  static getID() {
    const thisID = Deck.nextID;
    Deck.nextID += 1;
    return thisID;
  }

  constructor(name, lang1, lang2, words = []) {
    this.id = Deck.getID();
    this.name = name;
    this.lang1 = lang1;
    this.lang2 = lang2;
    this.words = words;
  }

  getWord(index) {
    return this.words[index]
  }
}

export default Deck;
