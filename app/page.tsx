import { KnowledgeSection } from '@/components/knowledge-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import './globals.css'

export default function Home() {
  return (
    <main className='flex flex-1 flex-col items-center gap-20 overflow-x-hidden pt-32 text-text xl:gap-40'>
      <AboutSection />
      <KnowledgeSection />
      <ProjectsSection />
    </main>
  )
}
