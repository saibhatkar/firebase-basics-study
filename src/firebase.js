// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxrK0Xarbh5mUnRvmNVWAoEAX2j2Gm6JQ",
  authDomain: "fir-basics-study-d78f6.firebaseapp.com",
  projectId: "fir-basics-study-d78f6",
  storageBucket: "fir-basics-study-d78f6.firebasestorage.app",
  messagingSenderId: "393652226312",
  appId: "1:393652226312:web:3b817b647d3e067f2f44bd",
  databaseURL: "https://fir-basics-study-d78f6-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
