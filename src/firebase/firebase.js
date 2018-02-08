import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC3jhDRWZSusxI7Bw9MZ5PjL9fBzRf0ASM",
  authDomain: "okokanya-2376e.firebaseapp.com",
  databaseURL: "https://okokanya-2376e.firebaseio.com",
  projectId: "okokanya-2376e",
  storageBucket: "okokanya-2376e.appspot.com",
  messagingSenderId: "620448681389"
};

if (!firebase.apps.length) firebase.initializeApp(config);

const auth = firebase.auth();

export { auth };
