import React from 'react';
import { BlogNavStyled } from './BlogNavStyled';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import PrimaryButton from '../../Button/PrimaryButton';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
const BlogNav = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profi')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
    // Set user
    setUser(null);
  };
  useEffect(() => {
    // check if token exist
    const token = user?.token;

    // We have to check if token has expired so we can log user out
    // This part is the token expiry section
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    // Later we will check for the JSON Webtoken
    setUser(JSON.parse(localStorage.getItem('profi')));
  }, [location]);
  return (
    <BlogNavStyled>
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>

      {user ? (
        <div className="items">
          <div className="items-image">
            {user.result.name.charAt(0).toUpperCase()}
          </div>
          <h3>{user.result.name}</h3>
          <button onClick={logout}>Logout</button>
          {/* <PrimaryButton onClick={logout} name={'Logout'} /> */}
        </div>
      ) : (
        <Link to="/auth">
          <PrimaryButton name={'Signin'} />
        </Link>
      )}
    </BlogNavStyled>
  );
};

export default BlogNav;
