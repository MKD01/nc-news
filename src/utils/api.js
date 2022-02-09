import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mkd-nc-news.herokuapp.com/api',
});

export const getUserByUsername = (username) => {
  return api.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};

export const getArticles = () => {
  return api.get(`/articles`).then((res) => {
    return res.data.articles;
  });
};

export const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postCommentByArticleId = (article_id, currUser, comment) => {
  return api
    .post(`/articles/${article_id}/comments`, {
      username: currUser,
      body: comment,
    })
    .then((res) => {
      return res.data.comment;
    });
};
