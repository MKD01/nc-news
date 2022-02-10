import React, { useContext } from 'react';
import { UserContext } from '../contexts/Users';
import { deleteComment } from '../utils/api';

const DeleteComment = ({ setDeletedComment, comment_id, author }) => {
  const { currentUser } = useContext(UserContext);

  const deleteHandler = () => {
    deleteComment(comment_id);
    setDeletedComment(true);
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
