import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
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
      <div className='hidden limit:flex'>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Router>
        <BackgroundAudio />
        <Analytics />
      </div>
      <div className="w-screen h-screen flex justify-center items-center limit:hidden">
        <span className='flex text-text text-base text-center px-4'>Your device's screen is too small to render this website.</span>
      </div>
    </>
  )
}
