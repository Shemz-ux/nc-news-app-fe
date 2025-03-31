import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Articles from '../components/Articles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Articles/>
    </>
  )
}

export default App
