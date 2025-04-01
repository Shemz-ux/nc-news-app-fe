import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Articles from '../components/Articles'
import { Routes, Route } from "react-router-dom";
import ArticleItem from '../components/ArticleItem';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Articles/>} />
        <Route path="/articles/:article_id" element={<ArticleItem/>} />
      </Routes>
    </>
  )
}

export default App
