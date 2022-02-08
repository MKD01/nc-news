import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/Users';

const Nav = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const logoutHandler = () => {
    setCurrentUser({});
  };

  return (
    <div>
      <Link to="/">{currentUser.username}</Link>
      <Link to="articles">Articles</Link>
      <Link to="/" onClick={logoutHandler}>
        Logout
      </Link>
    </div>
  );
};

export default Nav;
