import { fire } from "./firebaseInit.js";
const util = require('util');

export function updateName(firstName, lastName, uid) {
    const userFirstRef = fire.database().ref(util.format('%s/firstName', uid))
    const userLastRef = fire.database().ref(util.format('%s/lastName', uid))
    userFirstRef.set(firstName)
    userLastRef.set(lastName)
}