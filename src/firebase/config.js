import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGmbfVo-5jECJQ9Az3RiIP1sqt_cSaa70",
  authDomain: "react-coderh.firebaseapp.com",
  projectId: "react-coderh",
  storageBucket: "react-coderh.appspot.com",
  messagingSenderId: "745069442691",
  appId: "1:745069442691:web:c7535d40b97b0e16b64db6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)