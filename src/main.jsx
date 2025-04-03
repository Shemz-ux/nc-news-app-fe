import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { VoteProvider } from '../context/VoteContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <StrictMode> */}
      <VoteProvider>
        <App />
      </VoteProvider>
    {/* </StrictMode>, */}
  </BrowserRouter>
)
