// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkmWzPvQXl0BmGTS-xxzr227trUGqcGF4",
  authDomain: "bdlibraryonline.firebaseapp.com",
  projectId: "bdlibraryonline",
  storageBucket: "bdlibraryonline.appspot.com",
  messagingSenderId: "908122156006",
  appId: "1:908122156006:web:7de47cf1939443e7bdc427",
  measurementId: "G-PQ9SE6F5BE"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);


export default appfirebase;