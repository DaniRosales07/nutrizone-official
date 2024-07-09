import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxfDRqw1TJ9eB8JNABzVFEzHu70YX8Hds",
    authDomain: "nutrizone-official.firebaseapp.com",
    projectId: "nutrizone-official",
    storageBucket: "nutrizone-official.appspot.com",
    messagingSenderId: "976569478420",
    appId: "1:976569478420:web:a7ea0f419a006ed7cea601",
    measurementId: "G-JDJ8PH3LCQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);