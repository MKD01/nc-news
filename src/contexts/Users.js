import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const LoggedInCheck = JSON.parse(localStorage.getItem("isLoggedIn"));
  console.log(LoggedInCheck);

  const isLoggedIn = currentUser.username !== undefined;

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, isLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};
