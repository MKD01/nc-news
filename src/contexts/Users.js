import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedInCheck, setLoggedInCheck] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const loggedInUser = JSON.parse(localStorage.getItem("username"));

  if (loggedInUser && loggedInCheck) {
    setLoggedInCheck(false);
    setCurrentUser(loggedInUser);
  }

  const isLoggedIn = currentUser.username !== undefined;

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, isLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};
