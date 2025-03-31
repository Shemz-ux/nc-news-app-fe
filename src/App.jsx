import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Articles from '../components/Articles'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Articles/>} />
      </Routes>
    </>
  )
}

export default App
