import {fire} from "../firebase/firebaseInit.js"
import {updateName} from "./firebaseDB.js"
const util = require('util');

export function login(email, password) {
    return fire
      .auth()
      .signInWithEmailAndPassword(email, password);
}

export function signUp(firstName, lastName, email, password) {
  return fire 
    .auth()
    .createUserWithEmailAndPassword(email, password).then(() => {
      updateName(firstName, lastName, fire.auth().currentUser.uid)
    });
}