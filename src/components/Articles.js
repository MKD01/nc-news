import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../utils/api';
import Topics from './Topics';

const Articles = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      setArticleList(res);
    });
  }, []);

  return (
    <div>
      <Topics />
      <ul>
        {articleList.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h2>{article.title}</h2>
              </Link>
              <h3>Topic: {article.topic}</h3>
              <h3>Comments: {article.comment_count}</h3>
              <button>Votes: {article.votes}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
