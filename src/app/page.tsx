import './globals.css'
import About from '@/components/about/About'
import Projects from '@/components/Projects'
import Hire from '@/components/Hire'

export default function Home() {
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
