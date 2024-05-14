import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5rRBdUAWsYUfCJ4vfbwP2IO9_4473uGw",
  authDomain: "auth-testing-b4bf3.firebaseapp.com",
  projectId: "auth-testing-b4bf3",
  storageBucket: "auth-testing-b4bf3.appspot.com",
  messagingSenderId: "285065722075",
  appId: "1:285065722075:web:e87394781958fcc670b4fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)