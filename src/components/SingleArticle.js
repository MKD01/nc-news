import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { getArticleById } from '../utils/api';

const SingleArticle = () => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById().then((res) => {
      setArticle(res);
    });
  });

  return (
    <div>
      <h2>{article.title}</h2>
    </div>
  );
};

export default SingleArticle;
