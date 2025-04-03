import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Articles from '../components/Articles'
import { Routes, Route } from "react-router-dom";
import ArticleItem from '../components/ArticleItem';
import Comment from '../components/Comment';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Articles/>} />
        <Route path="/articles/:article_id" element={<ArticleItem/>} />
        <Route path="/articles/:article_id/comments" element={<Comment/>} />
      </Routes>
    </>
  )
}

export default App
