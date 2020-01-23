import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhMSU7lDUkKKjhR9n5sXPx7kEj3GMTXXs",
  authDomain: "workout-83253.firebaseapp.com",
  databaseURL: "https://workout-83253.firebaseio.com",
  projectId: "workout-83253",
  storageBucket: "workout-83253.appspot.com",
  messagingSenderId: "409790651677",
  appId: "1:409790651677:web:0e90885a88f271ee8f55f4",
  measurementId: "G-32Y07Y01H8"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
