import React, { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import { shortDate } from "../utils/shortDate";
import { CreateComment, DeleteComment, Votes } from "./index";

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
    <div className='comments'>
      <CreateComment
        setArticleComments={setArticleComments}
        article_id={article_id}
      />
      <ul className='comments-section'>
        {articleComments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h3>Author: {comment.author}</h3>
              <p className='body'>{comment.body}</p>
              <div>
                <p>Posted on: {shortDate(comment.created_at)}</p>
                <Votes
                  component_name={"comments"}
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
