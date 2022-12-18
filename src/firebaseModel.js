import GlossaryModel from "./GlossaryModel";
import firebase from "firebase";


function getUserID() {
  if (firebase.auth().currentUser) {
    return firebase.auth().currentUser.uid;
  }
  else throw "No user found.";
}

function firebaseModelPromise() {
  function initModelACB(firebaseData) {
    console.log("user: " + getUserID())
    console.log(firebaseData.val());
    return new GlossaryModel();
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
  function addDeckObs(deck) {
    firebase
      .database()
      .ref("users/" + getUserID() + "/decks/" + deck.id)
      .set({
        deck,
      });
  }
}

export { firebaseModelPromise, updateFirebaseFromModel };
