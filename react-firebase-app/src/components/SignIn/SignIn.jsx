import React, { useState } from "react";
import styles from "./SignIn.module.css";
import { fire } from "../../Firebase";
import validate from "./ValidateLogin";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const validateLogin = () => {
    <validate/>
  };

  const userSingIn = (e) => {
    validateLogin()
    e.preventDefault();
    const fb = fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={userSingIn}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Email"
          className="form-control m-1"
        />
        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
          className="form-control m-1"
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
