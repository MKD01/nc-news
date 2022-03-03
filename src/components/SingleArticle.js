import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { shortDate } from "../utils/shortDate";
import { Comments } from "./index";
import Votes from "./Votes";

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
      <div className='single-article-container'>
        <div>
          <h3>Author: {article.author}</h3>
          <h3>Topic: {article.topic}</h3>
        </div>
        <h2>{article.title}</h2>
        <p id='body'>{article.body}</p>
        <div>
          <p id='date'>Posted at: {shortDate(article.created_at)}</p>
          <Votes
            component_name={"articles"}
            votes={article.votes}
            component_id={article.article_id}
          />
        </div>
      </div>
      <Comments article_id={article_id} />
    </>
  );
};

export default SingleArticle;
