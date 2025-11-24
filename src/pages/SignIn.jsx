import React, { useState } from "react";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log("Sign In Successful: ", value);
      })
      .catch((error) => {
        console.log("Error in signing in", error);
      });
  };

  return (
    <>
      <div className="signin-page">
        <h2>Sign In page</h2>
        <div className="email">
          <label name="email"> Email: </label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password">
          <label name="password"> Password: </label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="submitBtn">
          <button onClick={signInUser}> Sign In </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
