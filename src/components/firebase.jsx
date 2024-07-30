// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACuqbZFMslfnDdjg6rrYHZCht0CvtWLfs",
  authDomain: "react-fa5f1.firebaseapp.com",
  projectId: "react-fa5f1",
  storageBucket: "react-fa5f1.appspot.com",
  messagingSenderId: "873246413873",
  appId: "1:873246413873:web:d8db2c95d3794900cfb110",
  measurementId: "G-82TQDRQGSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
