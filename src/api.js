import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-app-4pxn.onrender.com/api",
  timeout: 1000,
});


export const fetcharticles = (slug) => {
    let query = slug

    if (query === ''){
      query = undefined
    }

    return api.get("/articles", {
      params: {
        topic: query,
    }
    }).then(({data}) => {
        return data.articles
      })
}


export const fetchArticleByID = (article_id) => {
    return api.get(`/articles/${article_id}`)
      .then(({data}) => {
        return data.article
      })
}

export const fetchTopics = () => {
  return api.get("/topics")
  .then(({data}) => {
    return data.topics
  })
}


export const postCommentByID = ({article_id, body, username}) => {
  return api.post(`/articles/${article_id}/comments`, {
    article_id: article_id,
    body: body,
    username: username,
  }).then(({data})=>{
    console.log(data)
    return data.comment
  })
}

export const updateArticleVotes = (article_id, voted) => {
  return api.patch(`/articles/${article_id}`, {inc_votes: voted})
}

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then(({data})=>{
    return data.comment
  })
}

export const fetchCommentsByID = (article_id) => {
  return api.get(`/articles/${article_id}/comments`)
      .then(({data}) => {
        return data.comments
      })
}