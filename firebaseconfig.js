// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKhx0zU-65ar1wTRMke3oRAA-kg4vFiYM",
  authDomain: "fithub-da6fa.firebaseapp.com",
  projectId: "fithub-da6fa",
  storageBucket: "fithub-da6fa.firebasestorage.app",
  messagingSenderId: "532839664258",
  appId: "1:532839664258:web:b14a6ce15e653d6d1f429b",
  measurementId: "G-0TKN1C9Q31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);