import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyDeDEvjy40--B74SSUUYTlVCru3-LWZV3k",
    authDomain: "miloficiosdb.firebaseapp.com",
    databaseURL: "https://miloficiosdb.firebaseio.com",
    projectId: "miloficiosdb",
    storageBucket: "",
    messagingSenderId: "623306744977"
  }
  firebase.initializeApp(config)
  var db = firebase.firestore();
  var auth = firebase.auth()
}
// const auth = firebase.auth()

export { db, auth }