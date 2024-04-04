import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './18n.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </React.StrictMode>,
  </BrowserRouter>
)
