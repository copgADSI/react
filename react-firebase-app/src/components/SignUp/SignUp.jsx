import React from "react";
import { useState } from "react";
import { fire } from "../../Firebase";
import { Alert } from "../SignIn/Alert";
export function SignUp() {
  const [checkboxD, setCheckboxD] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(false);
  const [rePassword, setRePassword] = useState("", false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [role, setRole] = useState("Customer");
  const userSingUp = (e) => {
    e.preventDefault();
    const db = fire.firestore(); //Registro de usuario + firestore 
    const data = fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) =>
        db.collection("users").add({
          uid: res.user.uid, //Id del usuario recien creado
          avatar: 'https://firebasestorage.googleapis.com/v0/b/react-fb-1408e.appspot.com/o/avatar%2Favatar.png?alt=media&token=da11cbbb-c28a-4683-9db8-65c981a39ca5',
          name: name,
          phone: phone,
          role: "Customer",
          created_that: Date(Date.now()),
          updated_that: Date(Date.now())
        }),
        alert("New User created successfully!")
      );
  };
  const showPass = () => {
    console.log(123);
    setPassword(password ? false : true);
    setRePassword(rePassword ? false : true);
  };

  return (
    <>
      <form className="row g-3 m-3" onSubmit={userSingUp}>
          <Alert/>
        <div className="col-md-6">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="col-md-6">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Enter your Name"
          />
        </div>
        <div className="col-md-6">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={password ? "password" : "text"}
            className="form-control"
            placeholder="Enter Password"
          />
        </div>
        <div className="col-md-6">
          <input
            onChange={(e) => setRePassword(e.target.value)}
            type={rePassword ? "password" : "text"}
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>
        <div className="col-md-6">
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            className="form-control"
            placeholder="Enter your Phone"
          />
        </div>
        <div className="col-md-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkbox"
            onClick={showPass}
          />
          <label htmlFor="checkbox">Show Password</label>
          <button className="btn btn-primary m-3 ">SignUp</button>
        </div>
      </form>
    </>
  );
}
