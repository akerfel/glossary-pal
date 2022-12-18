import GlossaryModel from "./GlossaryModel";
import firebase from "firebase";

function getUserID() {
  if (firebase.auth().currentUser) {
    return firebase.auth().currentUser.uid;
  } else throw "No user found.";
}

function firebaseModelPromise() {
  function initModelACB(firebaseData) {
    console.log("user: " + getUserID());
    //console.log(firebaseData.val());
    const deckList = Object.values(firebaseData.val().decks)
    console.log(deckList)
    return new GlossaryModel(deckList, firebaseData.val().nextDeckID);
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
    if (payload && payload.addDeck) {
    firebase
      .database()
      .ref("users/" + getUserID() + "/decks/" + payload.addDeck.id)
      .set(payload.addDeck);
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

  model.addObserver(addDeckObs);
  model.addObserver(nextDeckIDObs);
}

export { firebaseModelPromise, updateFirebaseFromModel };
