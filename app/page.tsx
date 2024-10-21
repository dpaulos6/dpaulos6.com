import { KnowledgeSection } from '@/components/knowledge-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import './globals.css'

export default function Home() {
  return (
    <main className="flex-1 flex flex-col gap-20 xl:gap-40 items-center text-text overflow-x-hidden pt-32 bg-green-300 dark:bg-green-500">
      <AboutSection />
      <KnowledgeSection />
      <ProjectsSection />
    </main>
  )
}
