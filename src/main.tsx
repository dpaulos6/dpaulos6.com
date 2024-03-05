import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Home from '@/pages/home'
import About from '@/pages/about'
import Works from '@/pages/works'
import Contacts from '@/pages/contacts'
import ThemeSwitcher from '@/components/ThemeSwitcher.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="hidden limit:flex">
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <App />
        <ThemeSwitcher />
      </BrowserRouter>
    </div>
    <div className="w-screen h-screen flex justify-center items-center limit:hidden">
      <span className="flex text-text text-base text-center px-4">
        Your device's screen is too small to render this website.
      </span>
    </div>
    <Analytics />
  </React.StrictMode>
)
