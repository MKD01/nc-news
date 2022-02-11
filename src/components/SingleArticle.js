import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { getArticleById } from '../utils/api';
import { shortDate } from '../utils/shortDate';
import { Comments } from './index';
import Votes from './Votes';

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id).then((res) => {
      setArticle(res);
    });
  }, []);

  return (
    <>
      <div>
        <h3>Topic: {article.topic}</h3>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <div>
          <Votes
            component_name={'articles'}
            votes={article.votes}
            component_id={article.article_id}
          />
          <p id="date">Posted at: {shortDate(article.created_at)}</p>
        </div>
      </div>
      <Comments article_id={article_id} />
    </>
  );
};

export default SingleArticle;
