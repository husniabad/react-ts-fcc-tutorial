import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodoProvider } from './context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TodoProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </TodoProvider>
)
