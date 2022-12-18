class Deck {
  constructor(id, name, lang1, lang2, words = []) {
    this.id = id;
    this.name = name;
    this.lang1 = lang1;
    this.lang2 = lang2;
    this.words = words;
  }

  getDeckID() {
    return this.id;
  }

  getWord(index) {
    return this.words[index];
  }
}

export default Deck;
