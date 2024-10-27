import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import "@fortawesome/fontawesome-free/css/all.css"
import { TypeWriter } from './Chtgpt.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <TextTypingAnimation/> */}
    {/* <TypeWriter/> */}
  </React.StrictMode>,
)
