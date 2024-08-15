// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAleLgFV0guFoSQEaQSrHEm2o8cUUVFN4k",
  authDomain: "flashcard-saas-f2dc5.firebaseapp.com",
  projectId: "flashcard-saas-f2dc5",
  storageBucket: "flashcard-saas-f2dc5.appspot.com",
  messagingSenderId: "90087394824",
  appId: "1:90087394824:web:9d4ce623a422c1fb998bbd",
  measurementId: "G-JT2QLSN55S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}