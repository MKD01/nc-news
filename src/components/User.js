import React, { useContext } from 'react';
import { UserContext } from '../contexts/Users';

const User = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome {currentUser.name}</h2>
      <h2>{currentUser.username}</h2>
      <img src={currentUser.avatar_url} />
    </div>
  );
};

export default User;
