import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Privacy from './components/Privacy'
import PoliweekLinks from './components/PoliweekLinks'
import ThemeLayout from './components/ThemeLayout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<ThemeLayout />}>
          <Route path='/' element={<App />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/poliweek/2025' element={<PoliweekLinks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
