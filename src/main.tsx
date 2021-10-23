import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AuthProvider } from './contexts/auth'
import { ThemeProvider } from './contexts/theme'
import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
