import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-app-4pxn.onrender.com/api",
  timeout: 1000,
});


export const fetcharticles = () => {
    return api.get("/articles")
      .then(({data}) => {
        return data.articles
      })
}

export const fetchArticleByID = (article_id) => {
    return api.get(`/articles/${article_id}`)
      .then(({data}) => {
        return data.article
      })
}

export const fetchCommentsByID = (article_id) => {
  return api.get(`/articles/${article_id}/comments`)
      .then(({data}) => {
        return data.comments
      })
}