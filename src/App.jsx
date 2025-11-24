import React from "react";
import "./App.css";
import { app } from "./firebase"; //import app to make sure firebase is initialized
import { getDatabase, ref, set, onValue } from "firebase/database"; //import database function
import AuthenticationUser from "./authenticationUser";
import SignUp from "./pages/SignUp";
const db = getDatabase(app); //1.initialize database  2.db is created instance of database

// learn about putting and reading data from realtime database
// get, child, ref, set, onValue

// If you want, I can also show:
// 🔹 onValue() (real-time listener)
// 🔹 how to write data with set(), update(), push()
// 🔹 CRUD examples (Create/Read/Update/Delete)

// ********** Reading data once **********
// const dbRef = ref(db);                // "/"
// const usersRef = child(dbRef, "users");   // "/users"
// const userRef = child(usersRef, "sai2");  // "/users/sai2"

// get(userRef).then(snapshot => console.log(snapshot.val()));

function App() {
  //function to put data in database on button click
  const putData = () => {
    set(ref(db, "users/sai2"), {
      id: 2,
      name: "May",
      age: 77,
    });
  };

  //function to read data from database on button click
  const readRealtime = () => {
    onValue(ref(db, "users/sai2"), (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  };

  return (
    <>
      <div>project setup started</div>
      <div className="getStart">
        <p>Post data onlcickining the below button</p>

        <button onClick={putData}>Put Data</button>
        <p>Read data from database</p>
        <button onClick={readRealtime}>Read Data</button>
      </div>

      <div className="boxToAllComponents">
      <h4>Authentication User Component</h4>
        <AuthenticationUser />
      </div>

      <div className="signup">
        <SignUp />
      </div>
    </>
  );
}

export default App;
