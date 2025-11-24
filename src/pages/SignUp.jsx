import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => {
      console.log("user data: ", value);
      alert("User created successfully");      
    })
    // // if response is 400 display error message
    // }).catch((error) => {
    //   if (error.code === 'auth/email-already-in-use') {
    //     alert("Email already in use");
    //   } else {
    //     alert("Error creating user: " + error.message);
    //   }
    // });
    
  };
  return (
    <>
      <div className="signup-page">
        <div className="email">
          <label name="email"> Email: </label>
          <input
            type="email"
            required
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password">
          <label name="password"> Password: </label>
          <input
            type="password"
            required
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="submitBtn">
          <button onClick={createUser}> Sign Up </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
