import React from 'react';
import { AuthStyled } from './AuthStyled';
import Bg from './img/bg.svg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import ball from "./img/Allen.svg";
// import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const eye = <FontAwesomeIcon icon={faEye} />;
const Authentication = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // two types of submitnone for the signup and another fot the signin
    if (isSignup) {
      // We are going to dispatch an action
      // We pass in the formData and history so we can navigate once something happens
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
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
          <p>{isSignup ? 'Sign up' : 'Sign in'}</p>
          <form onSubmit={handleSubmit}>
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
                type={passwordShown ? 'text' : 'password'}
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
                  type={passwordShown ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
                <i onClick={togglePasswordVisiblity}>{eye}</i>
              </div>
            )}
            <div className="auth-form-container-fields-content-button">
              <button>{isSignup ? 'Sign Up 🏀' : 'Sign In 🏀'}</button>
              <Link className="btn-home" to="/">
                Home 🏀
              </Link>
            </div>
          </form>
          <div className="auth-form-container-fields-account">
            <p>
              {isSignup
                ? 'Already have an account 🏀?'
                : "Don't have an account 🏀?"}
              <span onClick={switchMode}>
                {isSignup ? 'Sign In' : 'Sign Up'}
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
