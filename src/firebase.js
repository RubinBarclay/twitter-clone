// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLgErNDuazl1JX4MxsnqZokAa4F9TX-CY",
  authDomain: "twitter-clone-c4768.firebaseapp.com",
  projectId: "twitter-clone-c4768",
  storageBucket: "twitter-clone-c4768.appspot.com",
  messagingSenderId: "133993319337",
  appId: "1:133993319337:web:5dab4077aa14ab529512b8",
};

// Initialize Firebase and create database
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
