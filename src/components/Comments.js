import React, { useEffect, useState } from 'react';
import { getCommentsByArticleId } from '../utils/api';
import { shortDate } from '../utils/shortDate';
import CreateComment from './CreateComment';
import DeleteComment from './DeleteComment';

const Comments = ({ article_id }) => {
  const [articleComments, setArticleComments] = useState([]);
  const [deletedCommentId, setDeletedCommentId] = useState(0);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((res) => {
      setArticleComments(res);
      setDeletedCommentId(0);
    });
  }, [deletedCommentId]);

  return (
    <div>
      <CreateComment
        setDeletedCommentId={setDeletedCommentId}
        article_id={article_id}
      />
      <ul>
        {articleComments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h3>{comment.author}</h3>
              <p>{comment.body}</p>
              <div>
                <p>Votes: {comment.votes}</p>
                <p>Posted on: {shortDate(comment.created_at)}</p>
              </div>
              <DeleteComment
                setDeletedCommentId={setDeletedCommentId}
                setArticleComments={setArticleComments}
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

export default Comments;
