import React, { useContext } from 'react';
import { UserContext } from '../contexts/Users';
import { postCommentByArticleId } from '../utils/api';

const CreateComment = ({ setArticleComments, article_id }) => {
  const { currentUser } = useContext(UserContext);

  const commentHandler = (event) => {
    event.preventDefault();
    let comment = event.target.comment.value;
    postCommentByArticleId(article_id, currentUser.username, comment).then(
      (res) => {
        setArticleComments((currentComments) => [res, ...currentComments]);
        event.target.comment.value = '';
      }
    );
  };

  return (
    <div>
      <form onSubmit={(event) => commentHandler(event)}>
        <label>
          Comment: <input type="text" id="comment" required></input>
        </label>
        <button>Comment</button>
      </form>
    </div>
  );
};

export default CreateComment;
