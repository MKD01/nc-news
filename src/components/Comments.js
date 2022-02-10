import React, { useEffect, useState } from 'react';
import { getCommentsByArticleId } from '../utils/api';
import { shortDate } from '../utils/shortDate';
import CreateComment from './CreateComment';
import DeleteComment from './DeleteComment';
import UpVotes from './UpVotes';

const Comments = ({ article_id }) => {
  const [articleComments, setArticleComments] = useState([]);
  const [deletedComment, setDeletedComment] = useState(false);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((res) => {
      setArticleComments(res);
      setDeletedComment(false);
    });
  }, [setArticleComments, deletedComment]);

  return (
    <div>
      <CreateComment
        setArticleComments={setArticleComments}
        article_id={article_id}
      />
      <ul>
        {articleComments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h3>{comment.author}</h3>
              <p>{comment.body}</p>
              <div>
                <p>Posted on: {shortDate(comment.created_at)}</p>
                <UpVotes
                  component_name={'comments'}
                  votes={comment.votes}
                  component_id={comment.comment_id}
                />
              </div>
              <DeleteComment
                setDeletedComment={setDeletedComment}
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
