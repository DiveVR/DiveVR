import firebase from 'firebase'
import { firebaseConfig } from "../config/config.js"

export var fire = firebase.initializeApp(firebaseConfig)
export var storage = firebase.storage()