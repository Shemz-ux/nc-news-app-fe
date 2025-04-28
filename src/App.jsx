import Header from '../components/Header'
import Articles from '../components/Articles'
import { Routes, Route } from "react-router-dom";
import ArticleItem from '../components/ArticleItem';
import Comment from '../components/Comment';
import ErrorPage from '../components/ErrorPage';

function App() {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path="/" element={<Articles/>} />
        <Route path="/articles/:article_id" element={<ArticleItem/>} />
        <Route path="/articles/:article_id/comments" element={<Comment/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </main>
  )
}

export default App
