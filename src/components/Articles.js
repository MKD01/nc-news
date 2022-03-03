import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";
import { shortDate } from "../utils/shortDate";
import { OrderBy, PageCount, SortBy, Topics, Votes } from "./index";

const Articles = () => {
  const [articleList, setArticleList] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrderBy, setSelectedOrderBy] = useState("DESC");
  const [currentPage, setCurrentPage] = useState({
    page: 1,
    maxPage: 1,
  });

  useEffect(() => {
    setArticleList([]);
    getArticles(
      selectedTopic,
      selectedSortBy,
      selectedOrderBy,
      currentPage.page
    ).then((res) => {
      setArticleList(res);
    });
  }, [selectedTopic, selectedSortBy, selectedOrderBy, currentPage]);

  return (
    <>
      <div className='filter-options'>
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
      </div>
      {articleList.length ? (
        <div className='articles-container'>
          <p id='page'>{`Page: ${currentPage.page} / ${currentPage.maxPage} `}</p>
          <ul>
            {articleList.map((article) => {
              return (
                <section className='single-article'>
                  <li key={article.article_id}>
                    <Link to={`/articles/${article.article_id}`}>
                      <div className='author-topic'>
                        <h3>Author: {article.author}</h3>
                        <h3>Topic: {article.topic}</h3>
                      </div>
                      <section>
                        <h2>{article.title}</h2>
                        <h3>Comments: {article.comment_count}</h3>
                      </section>
                    </Link>
                    <div className='created-at-votes'>
                      <p className='date'>
                        Posted at: {shortDate(article.created_at)}
                      </p>
                      <Votes
                        component_name={"articles"}
                        votes={article.votes}
                        component_id={article.article_id}
                      />
                    </div>
                  </li>
                </section>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <PageCount
        selectedTopic={selectedTopic}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Articles;
