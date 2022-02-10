import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { UserContext } from '../contexts/Users';
import { postCommentByArticleId } from '../utils/api';
import { shortDate } from '../utils/shortDate';
import DeleteComment from './DeleteComment';

const CreateComment = ({ setDeletedCommentId, article_id }) => {
  const { currentUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState([]);

  const commentHandler = (event) => {
    event.preventDefault();
    let comment = event.target.comment.value;
    postCommentByArticleId(article_id, currentUser.username, comment).then(
      (res) => {
        setNewComment((currentComments) => [...currentComments, res]);
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
      <ul>
        {newComment.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h3>{comment.author}</h3>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
              <p>Posted on: {shortDate(comment.created_at)}</p>
              <DeleteComment
                setDeletedCommentId={setDeletedCommentId}
                author={comment.author}
                comment_id={comment.comment_id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CreateComment;
