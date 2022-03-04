import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/Users";
import { getUserByUsername } from "../utils/api";

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [registerSelected, setRegisterSelected] = useState(false);

  const registerHandler = () => {
    setRegisterSelected((currSelected) => !currSelected);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    let username = event.target.username.value;
    getUserByUsername(username).then((res) => {
      console.log(res);
      setCurrentUser(res);
    });
  };

  const registerForm = () => {
    if (registerSelected) {
      return (
        <div className='register'>
          <form>
            <label>
              <input id='name' placeholder='Name' required></input>
            </label>
            <label>
              <input id='username' placeholder='Username' required></input>
            </label>
            <label>
              <input id='avatar_url' placeholder='Avatar Url'></input>
            </label>
            <button>Register</button>
          </form>
        </div>
      );
    }
  };

  return (
    <div className='login'>
      <h1>Login</h1>
      <form
        id='login-form'
        onSubmit={(event) => {
          loginHandler(event);
        }}
      >
        <label>
          <input id='username' placeholder='Username' required></input>
        </label>
        <button>Login</button>
      </form>
      <button id='create-new-account-button' onClick={registerHandler}>
        Create New Account
      </button>
      {registerForm()}
    </div>
  );
};

export default Login;
