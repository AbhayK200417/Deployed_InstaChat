// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbhBin6WcsXc8_k959oWV-9zcO5PvXIv4",
  authDomain: "instachat-e89ea.firebaseapp.com",
  projectId: "instachat-e89ea",
  storageBucket: "instachat-e89ea.appspot.com",
  messagingSenderId: "777406954468",
  appId: "1:777406954468:web:7b1270b25e8cfea4e8e5f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)