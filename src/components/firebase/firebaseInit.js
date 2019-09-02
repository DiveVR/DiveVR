import firebase from 'firebase'
import { firebaseConfig } from "../config/config.js"

var fire = firebase.initializeApp(firebaseConfig)
export default fire