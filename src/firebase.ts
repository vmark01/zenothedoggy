// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr-YIzsZTNmCZQAjH6sa9MJzNaNE1B_mM",
  authDomain: "zenothedoggy-54f6d.firebaseapp.com",
  projectId: "zenothedoggy-54f6d",
  storageBucket: "zenothedoggy-54f6d.firebasestorage.app",
  messagingSenderId: "1084840964744",
  appId: "1:1084840964744:web:ce43cd711c5bce68db253d",
  measurementId: "G-W6PSB688JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };