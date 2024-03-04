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
        <span className="text-lg xs:text-2xl md:text-4xl lg:text-5xl px-4 py-2 lowercase transition-all">
          Hi, I'm <b className="font-medium">Diogo Paulos</b>
        </span>
        <span className="fade-in-out w-max relative">
          {things.map((thing, index) => (
            <span
              key={index}
              className={`transition-opacity w-max h-fit leading-tight -mt-4 md:-mt-2 lg:-mt-1 text-sm xs:text-lg md:text-2xl lg:text-4xl bg-gradient-to-r bg-clip-text from-primary to-pink-400 text-transparent lowercase duration-500 absolute left-1/2 transform -translate-x-1/2 ${index === currentThingIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
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
