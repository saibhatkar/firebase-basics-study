import React, { useContext } from "react";
import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

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
const firebaseApp = initializeApp(firebaseConfig);

//initialize firebase auth
const firebaseAuth = getAuth(firebaseApp);

//initialize realtime database
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

//custom hook to use firebase context in any component
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

    const signupUserWithPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    }

    //function to put data in realtime database 
    //at given key with given data object 
    const putData = (key,data) => {
        set(ref(database, key), data);
    }
  return (
    <FirebaseContext.Provider value={{signupUserWithPassword, putData}}>
      {/* children components will go here */}
      {props.children}
    </FirebaseContext.Provider>
  );
};

// export default FirebaseProvider;
