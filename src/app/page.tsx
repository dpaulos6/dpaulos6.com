'use client'
import { useState, useEffect } from 'react'
import './globals.css'
import HireMeButton from '@/components/HireMeButton'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Hire from '@/components/Hire'
import Contacts from '@/components/Contacts'

const things = [
  'Frontend developer',
  'Passionate music producer',
  'Kind human being',
  'Gamer on free time'
]

export default function Home() {
  const [currentThingIndex, setCurrentThingIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThingIndex((prevIndex) => (prevIndex + 1) % things.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="w-full flex flex-col overflow-x-hidden">
        <About />
        <Projects />
        <Hire />
      </div>
    </>
  )
}
