import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { getArticleById } from '../utils/api';
import { shortDate } from '../utils/shortDate';
import Comments from './Comments';

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
          <p id="votes">Votes: {article.votes}</p>
          <p id="date">Posted at: {shortDate(article.created_at)}</p>
        </div>
      </div>
      <Comments article_id={article_id} />
    </>
  );
};

export default SingleArticle;
