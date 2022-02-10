import React, { useContext } from 'react';
import { UserContext } from '../contexts/Users';
import { deleteComment } from '../utils/api';

const DeleteComment = ({ setDeletedCommentId, comment_id, author }) => {
  const { currentUser } = useContext(UserContext);

  const deleteHandler = () => {
    deleteComment(comment_id);
    setDeletedCommentId(comment_id);
  };

  const isCurrentUserCheck = () => {
    if (author === currentUser.username) {
      return <button onClick={() => deleteHandler(comment_id)}>Delete</button>;
    } else {
      return <></>;
    }
  };

  return isCurrentUserCheck();
};

export default DeleteComment;
