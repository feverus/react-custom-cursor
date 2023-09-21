import React from 'react'
import ReactDOM from 'react-dom/client'
import { CustomCursor } from './lib/'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomCursor cursor={'🦝'}>
      <App />
    </CustomCursor>
  </React.StrictMode>,
)
