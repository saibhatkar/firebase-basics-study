import React from "react";
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const AuthenticationUser = () => {

    //function to sign up user
  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, "sai@test1.com", "123456").then(
      (value) => console.log("user created", value)
    );
  };

  return (<>
  <div className="login" >
    <p>Click below button to sign up user</p>
    <button onClick={signUpUser}>Sign Up User</button>
  </div>
  </>);
};

export default AuthenticationUser;
