import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/home'
import About from '@/pages/about'
import Works from '@/pages/works'
import Contacts from '@/pages/contacts'

import { Analytics } from '@vercel/analytics/react'

import BackgroundAudio from '@/components/BackgroundAudio'
import Navbar from '@/components/navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
      <BackgroundAudio />
      <Analytics />
    </>
  )
}
