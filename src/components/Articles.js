import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../utils/api';

const Articles = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      setArticleList(res);
    });
  });

  return (
    <div>
      <ul>
        {articleList.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h2>{article.title}</h2>
                <h3>{article.topic}</h3>
              </Link>
              <button>Votes: {article.votes}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
