import React, { useContext } from 'react';
import { UserContext } from '../contexts/Users';

const CreateComment = ({ article_id }) => {
  const { currentUser } = useContext(UserContext);

  const commentHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={(event) => commentHandler()}>
        <label>
          Comment: <input id="comment"></input>
        </label>
      </form>
    </div>
  );
};

export default CreateComment;
