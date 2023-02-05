// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7wxBdduf-8dfBtue9kx9Ri5R0mHPZpMw",
    authDomain: "react-todo-d6012.firebaseapp.com",
    projectId: "react-todo-d6012",
    storageBucket: "react-todo-d6012.appspot.com",
    messagingSenderId: "71121929887",
    appId: "1:71121929887:web:4e3e875c72d2c3e4ed44aa",
    measurementId: "G-3TGN6JL8M9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

