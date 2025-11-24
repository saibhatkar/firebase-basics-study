import React from "react";
import { useState } from "react";
import { useFirebase } from "../context/Firebase";

const FirebaseContextSignUp = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="signin-page">
        <h2>Firebase Context Sign Up page</h2>
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
          <button
            onClick={() => {
              firebase.signupUserWithPassword(email, password);
              //store user data in realtime database
              //use email prefix as key for storing user data in database
              //   firebase.putData("users/" + email.split("@")[0], {

              //use fixed key "sai2" for storing user data in database
              firebase.putData("users/sai2", {
                email: email,
                password: password,
              });
            }}
          >
            {" "}
            Sign In{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default FirebaseContextSignUp;
