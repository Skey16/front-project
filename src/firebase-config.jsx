// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3C0ynUoJCi5mD417ttHZrBqtlBJB15bo",
  authDomain: "react-firebase-97d96.firebaseapp.com",
  projectId: "react-firebase-97d96",
  storageBucket: "react-firebase-97d96.appspot.com",
  messagingSenderId: "614237584802",
  appId: "1:614237584802:web:71c43e0dc416a49eb706fb",
  measurementId: "G-6XK2RR4R0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);