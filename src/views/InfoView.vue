<script setup>
import { NButton, NInput } from 'naive-ui'
</script>

<script>
export default {
    props: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
};
</script>

<template>
    <div>
        <img alt="Glossary Pal logo" class="logo" src="@/assets/logo.png" width="400" height="125" />
    </div>

    <p style="color:#FFFFFF"> Hi and welcome to Glossary Pal; a project for the course DH2642 at KTH. </p>
    <br />

    <p style="color:#FFFFFF"> This app can be used as a tool for language learning through vocabulary quizzes. </p>
    <br />
    <p style="color:#FFFFFF">You can create your own vocabulary quizzes by pressing the "Create a deck" button on the
        home page. You can give your deck a name, and choose languages for the deck. When you add words to your deck,
        you may manually enter the word in the two languages. If you don't know the translation of the word when
        creating the deck, you can press the "Get translation" button to get Google Translate's recommended translation
        of the word. You may also delete words from your decks by pressing the red "Delete" button. </p>
    <br />
    <p style="color:#FFFFFF"> To start cramming, press the "Review" button on the homepage to start a quiz on your
        chosen deck.</p>
    <br />
    <p style="color:#FFFFFF"> Enjoy the app!</p>
    <br />
    <p style="color:#FFFFFF">//Carl, David, Magnus and Shotaro</p>
</template>

<style scoped>
a:link {
    color: blue;
    background-color: transparent;
    text-decoration: none;
}

a:visited {
    color: purple;
    background-color: transparent;
    text-decoration: none;
}

a:hover {
    color: red;
    background-color: transparent;
    text-decoration: underline;
}

a:active {
    color: yellow;
    background-color: transparent;
    text-decoration: underline;
}

.logo {
    margin-bottom: 75px;
}

.createDeck {
    margin-bottom: 50px;
}

.title {
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 24px;
}

.deck {
    margin: 5px auto;
    color: rgb(0, 255, 13);
    font-weight: bold;
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    width: 435px;
    border-radius: 8px;
    border: 2px solid rgb(206, 50, 50);
}

.signup {
    margin: 5px auto;
    color: rgb(0, 255, 13);
    font-weight: bold;
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    width: 435px;
    border-radius: 8px;
    border: 2px solid rgb(206, 50, 50);
}

.deckName {
    text-align: left;
    float: left;
    width: 100px;
}

.deckLanguages {
    font-size: 12px;
    color: rgb(34, 34, 34);
    margin: 15px;
    float: center;
    width: 100px;
}
</style>