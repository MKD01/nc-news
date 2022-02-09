import React, { useEffect, useState } from 'react';
import { getCommentsByArticleId } from '../utils/api';
import { shortDate } from '../utils/shortDate';
import CreateComment from './CreateComment';

const Comments = ({ article_id }) => {
  const [articleComments, setArticleComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((res) => {
      setArticleComments(res);
    });
  }, []);

  return (
    <div>
      <CreateComment article_id={article_id} />
      <ul>
        {articleComments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h3>{comment.author}</h3>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
              <p>Posted on: {shortDate(comment.created_at)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
