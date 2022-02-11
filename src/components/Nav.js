import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/Users';

const Nav = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const logoutHandler = () => {
    setCurrentUser({});
  };

  return (
    <div className="nav">
      <Link className="nav-links" to="/">
        {currentUser.username}
      </Link>
      <Link className="nav-links" to="articles">
        Articles
      </Link>
      <Link className="nav-links" to="/" onClick={logoutHandler}>
        Logout
      </Link>
    </div>
  );
};

export default Nav;
