// firebase.js
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// const app = initializeApp(firebaseConfig);



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrX2Os4nGYSf2IXqDsgHVRX_KN8jYpo5w",
  authDomain: "wedding-wishes-32cd3.firebaseapp.com",
  projectId: "wedding-wishes-32cd3",
  storageBucket: "wedding-wishes-32cd3.firebasestorage.app",
  messagingSenderId: "776801023738",
  appId: "1:776801023738:web:a8190209c93fee82b87b43",
  measurementId: "G-SE420NGGNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Kết nối Firestore
export const db = getFirestore(app);