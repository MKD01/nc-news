import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/Users';
import { getUserByUsername } from '../utils/api';

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [registerSelected, setRegisterSelected] = useState(false);

  const registerHandler = () => {
    setRegisterSelected((currSelected) => !currSelected);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    let username = event.target.username.value;
    if (username) {
      getUserByUsername(username).then((res) => {
        setCurrentUser(res);
      });
    }
  };

  const registerForm = () => {
    if (registerSelected) {
      return (
        <div>
          <form>
            <label>
              Name: <input id="name"></input>
            </label>
            <label>
              Username: <input id="username"></input>
            </label>
            <label>
              Avatar: <input id="avatar_url"></input>
            </label>
          </form>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(event) => {
          loginHandler(event);
        }}
      >
        <label>
          Username: <input id="username"></input>
        </label>
        <button>Login</button>
      </form>
      <button onClick={registerHandler}>Register</button>
      {registerForm()}
    </div>
  );
};

export default Login;
