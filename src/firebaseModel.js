import GlossaryModel from "./GlossaryModel";
import Deck from "./Deck";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

function isLoggedIn() {
  if (firebase.auth().currentUser) return true;
  else return false;
}

function getUserID() {
  if (firebase.auth().currentUser) {
    return firebase.auth().currentUser.uid;
  } else throw "No user found.";
}

function firebaseModelPromise() {
  function initModelACB(firebaseData) {
    function deckValsIntoDecksCB(vals) {
      return new Deck(vals.id, vals.name, vals.lang1, vals.lang2, vals.words);
    }
    const deckListVals = Object.values(firebaseData.val().decks);
    const decks = deckListVals.map(deckValsIntoDecksCB);
    return new GlossaryModel(decks, firebaseData.val().nextDeckID);
  }

  function newUserACB() {
    return new GlossaryModel();
  }

  return firebase
    .database()
    .ref("users/" + getUserID() + "/")
    .once("value")
    .then(initModelACB)
    .catch(newUserACB);
}

function updateFirebaseFromModel(model) {
  function addDeckObs(payload) {
    if (payload && payload.addOrEditDeck) {
      firebase
        .database()
        .ref("users/" + getUserID() + "/decks/" + payload.addOrEditDeck.id)
        .set(payload.addOrEditDeck);
    }
  }

  function nextDeckIDObs(payload) {
    if (payload && payload.nextDeckID) {
      firebase
        .database()
        .ref("users/" + getUserID() + "/nextDeckID")
        .set(payload.nextDeckID);
    }
  }

  function deleteDeckObs(payload) {
    if (payload && (payload.deleteDeckID || payload.deleteDeckID == 0)) {
      firebase
        .database()
        .ref("users/" + getUserID() + "/decks/" + payload.deleteDeckID)
        .set(null);
    }
  }

  model.addObserver(addDeckObs);
  model.addObserver(nextDeckIDObs);
  model.addObserver(deleteDeckObs);
}

export { isLoggedIn, firebaseModelPromise, updateFirebaseFromModel };
