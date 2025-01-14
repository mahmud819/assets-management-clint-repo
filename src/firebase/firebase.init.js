import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPPP1pM6lFoRCECSbWyTDbL7WPu6XKzYo",
  authDomain: "assignment-twelve-479bb.firebaseapp.com",
  projectId: "assignment-twelve-479bb",
  storageBucket: "assignment-twelve-479bb.firebasestorage.app",
  messagingSenderId: "985373719654",
  appId: "1:985373719654:web:f789fdbcf6d06f5ba8c1a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);