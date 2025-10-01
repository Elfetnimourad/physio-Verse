// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgpNtrNSfGrmIGZNPDh3k4VFrtHx4iYcY",
  authDomain: "physio-verse.firebaseapp.com",
  projectId: "physio-verse",
  storageBucket: "physio-verse.firebasestorage.app",
  messagingSenderId: "67764244985",
  appId: "1:67764244985:web:a9f36aa13879b521516d28",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
