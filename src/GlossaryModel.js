import WordList from "./WordList";

class GlossaryModel {
    constructor(wordLists = []){
        this.wordLists = wordLists
        var wordList1 = new WordList("Animals", "Swedish", "English", []);
        var wordList2 = new WordList("Colors", "Swedish", "English", []);
        var wordList3 = new WordList("Countries", "Swedish", "English", []);
        this.wordLists.push(wordList1)
        this.wordLists.push(wordList2)
        this.wordLists.push(wordList3)
    }

    // Returns a list with the names of all glossary lists
    getListNames() {
        function getNameOfListCB(wordlist) {
            return wordlist.name
        }

        return this.wordLists.map(getNameOfListCB)
    }
}

export default GlossaryModel