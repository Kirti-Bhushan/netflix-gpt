// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmmN28ZbfOAeJ6sWtcPbwnBI00q2dNDQs",
  authDomain: "netflixgpt-a324c.firebaseapp.com",
  projectId: "netflixgpt-a324c",
  storageBucket: "netflixgpt-a324c.appspot.com",
  messagingSenderId: "870031824339",
  appId: "1:870031824339:web:05f270d12e81b1d4864b26",
  measurementId: "G-4YNQJ3PDXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()