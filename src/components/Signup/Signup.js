import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordlBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  if (user) {
    navigate("/shop");
  }
  const handleCreatUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("password did not match");
      return;
    }
    if (password.length < 6) {
      setError("password must be 6 characters");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreatUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordlBlur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input
            onSubmit={handleCreatUser}
            className="form-submit"
            type="submit"
            value="Sign Up"
          />
        </form>
        <p>
          Already have an account?
          <Link className="form-link" to="/login">
            Please Login
          </Link>
        </p>
        <div className="hr-style">
          <div className="hr-container">
            <hr />
          </div>
          <p>or</p>
          <div className="hr-container">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
