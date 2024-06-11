// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5eWjTFOJHIHbvJ0h9OMdqnKt1S0oJw7s",
  authDomain: "setting-goals-78558.firebaseapp.com",
  projectId: "setting-goals-78558",
  storageBucket: "setting-goals-78558.appspot.com",
  messagingSenderId: "180636847460",
  appId: "1:180636847460:web:b376eeff21ef5dfec77e71",
  measurementId: "G-EZXNSP6X5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);