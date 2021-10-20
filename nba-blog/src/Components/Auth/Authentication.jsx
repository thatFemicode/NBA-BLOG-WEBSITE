import React from "react";
import { AuthStyled } from "./AuthStyled";
import Bg from "./img/bg.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import ball from "./img/Allen.svg";
import { GoogleLogin } from "react-google-login";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const eye = <FontAwesomeIcon icon={faEye} />;
const Authentication = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const handleChange = (e) => {
    // Note a Form is an object
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  return (
    <AuthStyled>
      <div className="auth-form-container-fields">
        <div className="auth-form-container-fields-content">
          <p>{isSignup ? "Sign up" : "Sign in"}</p>
          <form>
            {isSignup && (
              <div className="auth-form-container-fields-content-input">
                <label htmlFor="fullName">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  // value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignup && (
              <div className="auth-form-container-fields-content-input">
                <label htmlFor="username">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth-form-container-fields-content-input">
              <label htmlFor="phoneNumber">Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                required
              />
            </div>
            <div className="auth-form-container-fields-content-input">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <i onClick={togglePasswordVisiblity}>{eye}</i>
            </div>
            {isSignup && (
              <div className="auth-form-container-fields-content-input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type={passwordShown ? "text" : "password"}
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
                <i onClick={togglePasswordVisiblity}>{eye}</i>
              </div>
            )}
            <div className="auth-form-container-fields-content-button">
              <button>{isSignup ? "Sign Up 🏀" : "Sign In 🏀"}</button>
              <Link className="btn-home" to="/">
                Home 🏀
              </Link>
            </div>
          </form>
          <div className="auth-form-container-fields-account">
            <p>
              {isSignup
                ? "Already have an account 🏀?"
                : "Don't have an account 🏀?"}
              <span onClick={switchMode}>
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
        {/* <img className="ball" src={ball} ref={images} alt="" />
        <img className="balls" src={ball} ref={images} alt="" /> */}
      </div>
      <div className="auth-img">
        <img src={Bg} alt="" />
      </div>
    </AuthStyled>
  );
};

export default Authentication;
