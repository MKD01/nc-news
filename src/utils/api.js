import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mkd-nc-news.herokuapp.com/api',
});

export const getUserByUsername = (username) => {
  return api.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};

export const getArticles = (topic, sort_by, order_by, p) => {
  return api
    .get(`/articles`, { params: { topic, sort_by, order_by, p } })
    .then((res) => {
      return res.data.articles;
    });
};

export const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return api.get(`/articles/${article_id}/comments?limit=100`).then((res) => {
    return res.data.comments;
  });
};

export const getTopics = () => {
  return api.get(`/topics`).then((res) => {
    return res.data.topics;
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

export const patchArticleVotes = (article_id) => {
  return api.patch(`/articles/${article_id}`, { inc_votes: 1 });
};

export const deleteComment = (comment_id) => {
  return api.delete(`comments/${comment_id}`);
};

export const getArticlesCount = () => {
  return api.get(`/articles?limit=1844674407370955161`).then((res) => {
    return res.data.articles.length;
  });
};
