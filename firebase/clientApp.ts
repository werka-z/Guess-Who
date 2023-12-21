import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7J-hccUQ53oWgiEPh1Z764BalYqD7rp0",
  authDomain: "guess-who-4fae8.firebaseapp.com",
  projectId: "guess-who-4fae8",
  storageBucket: "guess-who-4fae8.appspot.com",
  messagingSenderId: "215339641068",
  appId: "1:215339641068:web:6a5e76498ee49cecb39dc9",
  measurementId: "G-HL75HLZMKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);