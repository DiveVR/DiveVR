import {fire} from "../firebase/firebaseInit.js"

export function login(email, password) {
    return fire
      .auth()
      .signInWithEmailAndPassword(email, password);
}

export function signUp(email, password) {
  return fire 
    .auth()
    .createUserWithEmailAndPassword(email, password);
}