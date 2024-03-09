import { useState, useEffect } from 'react'
import '@/index.css'

export default function Home() {
  const things = [
    'Frontend developer',
    'Passionate music producer',
    'Kind human being',
    'Gamer on free time'
  ]
  const [currentThingIndex, setCurrentThingIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThingIndex((prevIndex) => (prevIndex + 1) % things.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-2 items-center justify-center text-text relative cursor-default">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 py-2 lowercase transition-[font] duration-500">
          Hi, I'm <b className="font-medium">Diogo Paulos</b>
        </span>
        <span className="fade-in-out w-max relative">
          {things.map((thing, index) => (
            <span
              key={index}
              className={`transition-all duration-500 w-max h-fit !leading-[3rem] -mt-7 sm:-mt-5 md:-mt-4 lg:-mt-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r bg-clip-text from-primary to-accent text-transparent lowercase absolute left-1/2 transform -translate-x-1/2 ${index === currentThingIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              style={{ zIndex: index === currentThingIndex ? 1 : 0 }}
            >
              {thing}
            </span>
          ))}
        </span>
      </div>
    </>
  )
}
