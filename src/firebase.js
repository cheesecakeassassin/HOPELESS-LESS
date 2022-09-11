// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMmol0MMXibm1NP-pgGbh4N6uwI9BUHyM",
    authDomain: "gothope-4961c.firebaseapp.com",
    projectId: "gothope-4961c",
    storageBucket: "gothope-4961c.appspot.com",
    messagingSenderId: "505415833517",
    appId: "1:505415833517:web:37b4ec8e4a6d32984c3324",
    measurementId: "G-SXNSWZCETS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
export {firestore};