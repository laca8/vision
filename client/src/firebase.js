// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBM9vl7YFvQOCUzOQdBnLINQ3tcBi-V6NM",
  authDomain: "upload-players.firebaseapp.com",
  projectId: "upload-players",
  storageBucket: "upload-players.appspot.com",
  messagingSenderId: "50714473612",
  appId: "1:50714473612:web:a1504657ae373b9691f7a9",
  measurementId: "G-JD9ND517L4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
