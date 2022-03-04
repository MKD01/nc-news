import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/Users";

const Nav = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  let navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setCurrentUser({});
    alert("You are now logged out.");
    routeChange("/");
  };

  return (
    <div className='nav'>
      <Link className='nav-links' to='/'>
        {currentUser.username}
      </Link>
      <Link className='nav-links' to='articles'>
        Articles
      </Link>
      <Link className='nav-links' to='/' onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
};

export default Nav;
