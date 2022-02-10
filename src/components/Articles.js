import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../utils/api';
import { shortDate } from '../utils/shortDate';
import OrderBy from './OrderBy';
import SortBy from './SortBy';
import Topics from './Topics';

const Articles = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedSortBy, setSelectedSortBy] = useState('created_at');
  const [selectedOrderBy, setSelectedOrderBy] = useState('DESC');
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getArticles(selectedTopic, selectedSortBy, selectedOrderBy).then((res) => {
      setArticleList(res);
    });
  }, [selectedTopic, selectedSortBy, selectedOrderBy]);

  return (
    <div>
      <Topics
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
      <SortBy
        selectedSortBy={selectedSortBy}
        setSelectedSortBy={setSelectedSortBy}
      />
      <OrderBy
        selectedOrderBy={selectedOrderBy}
        setSelectedOrderBy={setSelectedOrderBy}
      />
      <ul>
        {articleList.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h2>{article.author}</h2>
                <h2>{article.title}</h2>
              </Link>
              <h3>Topic: {article.topic}</h3>
              <h3>Comments: {article.comment_count}</h3>
              <button>Votes: {article.votes}</button>
              <p id="date">Posted at: {shortDate(article.created_at)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
