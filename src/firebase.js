import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyArGeHaWkZ3wIvfXJUROUKdxZfEw73j5HM",
  authDomain: "quora-clone-1b761.firebaseapp.com",
  databaseURL: "https://quora-clone-1b761-default-rtdb.firebaseio.com",
  projectId: "quora-clone-1b761",
  storageBucket: "quora-clone-1b761.appspot.com",
  messagingSenderId: "5474927088",
  appId: "1:5474927088:web:7dff5a7f8b5e9b5d575d35",
  measurementId: "G-RS6THMYKEZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
