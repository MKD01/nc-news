import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { UserContext } from '../contexts/Users';
import { postCommentByArticleId } from '../utils/api';
import { shortDate } from '../utils/shortDate';

const CreateComment = ({ article_id }) => {
  const { currentUser } = useContext(UserContext);
  const [newComments, setNewComments] = useState([]);

  const newCommentHandler = () => {
    if (newComments.length) {
    }
  };

  const commentHandler = (event) => {
    event.preventDefault();
    let comment = event.target.comment.value;
    postCommentByArticleId(article_id, currentUser.username, comment).then(
      (res) => {
        setNewComments((currentComments) => [...currentComments, res]);
      }
    );
  };

  return (
    <div>
      <form onSubmit={(event) => commentHandler(event)}>
        <label>
          Comment: <input id="comment"></input>
        </label>
        <button>Comment</button>
      </form>
      <ul>
        {newComments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h3>{comment.author}</h3>
              <p>{comment.body}</p>
              <a>Votes: {comment.votes}</a>
              <a>Posted on: {shortDate(comment.created_at)}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CreateComment;
