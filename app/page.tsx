import { KnowledgeSection } from '@/components/knowledge-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { Navbar } from '@/components/navbar'
import './globals.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col overflow-x-hidden">
        <div className="flex-1 flex flex-col gap-20 xl:gap-40 items-center text-text overflow-x-hidden pt-32">
          <AboutSection />
          <KnowledgeSection />
          <ProjectsSection />
        </div>
      </div>
    </>
  )
}
