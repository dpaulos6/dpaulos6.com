'use client'
import { useState, useEffect } from 'react'
import './globals.css'

const things = [
  'Frontend developer',
  'Passionate music producer',
  'Kind human being',
  'Gamer on free time'
]

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
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
        <div className="w-full h-full absolute top-0 left-0 blur-xl hidden">
          <div className="relative w-full h-full opacity-75">
            <div className="absolute inset-y-0 -right-[5%] rotate-90 top-[10%] -z-10 transform-gpu overflow-hidden blur-3xl">
              <div
                className={`relative right-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 bg-gradient-to-tr from-primary to-accent opacity-30 sm:right-[calc(50%+36rem)] sm:w-[72.1875rem]`}
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }}
              />
            </div>
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-accent opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }}
              />
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-accent to-primary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }}
              />
            </div>
            <div className="absolute inset-x-0 -left-[75%] rotate-180 top-[calc(70%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(80%-20rem)]">
              <div
                className="relative left-[calc(50%-10rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-accent opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-0 bg-gradient-to-br from-primary to-accent via-background opacity-25 hidden"></div>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 py-2 lowercase transition-[font] duration-500 z-10">
          Hi, I&apos;m{' '}
          <b className="font-medium">
            <code>Diogo Paulos</code>
          </b>
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
