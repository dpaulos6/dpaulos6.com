import { CornerLeftDown } from 'lucide-react'
import { getDob } from '@/utils/dob'
import { Title } from './title'
import Image from 'next/image'

export function AboutSection() {
  const age = getDob('2003-05-17')

  return (
    <div className="w-full max-w-7xl flex flex-col items-center mb-40">
      <Title
        title="Who am I?"
        className="mb-32"
      />
      <div className="flex flex-col items-center lg:flex-row gap-16 w-full px-8 xs:px-12 sm:px-16 md:px-20">
        <div className="flex items-center w-2/3 relative">
          <div className="absolute -top-12 left-1/2 translate-x-1/3 flex items-center gap-2 z-10">
            <CornerLeftDown className="w-5 sm:w-6 md:w-7 h-auto aspect-square" />
            <div className="flex flex-col items-center -space-y-1 sm:-space-y-2 whitespace-nowrap">
              <span className="text-sm sm:text-base md:text-lg">
                Full-stack
              </span>
              <span className="text-xs sm:text-sm md:text-base">Developer</span>
            </div>
          </div>
          <Image
            src="/dpaulos6_nobg.png"
            alt="Diogo Paulos"
            width={9999}
            height={9999}
            className="w-full rounded-b-full select-none"
            priority
          />
        </div>
        <div className="flex flex-col gap-6 lg:w-2/3 justify-center text-xl md:text-2xl text-start leading-relaxed relative">
          <span>
            I&apos;m Diogo Paulos, currently {age} years old and living in the
            beauty of{' '}
            <span className="bg-gradient-to-b from-transparent from-60% to-primary/60 to-60%">
              Portugal
            </span>
            .
          </span>
          <span>
            One thing that I love is coding . I&apos;m{' '}
            <span className="bg-gradient-to-b from-transparent from-60% to-primary/60 to-60%">
              passionate
            </span>{' '}
            about exploring different programming languages and frameworks and
            I&apos;m always eager to{' '}
            <span className="bg-gradient-to-b from-transparent from-60% to-primary/60 to-60%">
              learn
            </span>{' '}
            something new. Right now, I&apos;m fully immersed in mastering
            modern web development technologies, so I can take my projects to
            the{' '}
            <span className="bg-gradient-to-b from-transparent from-60% to-primary/60 to-60%">
              next level
            </span>
            .
          </span>
          <span>
            Aside from work, I{' '}
            <span className="bg-gradient-to-b from-transparent from-60% to-primary/60 to-60%">
              enjoy
            </span>{' '}
            various hobbies, such as cooking , playing video games, producing
            music, taking and editing photos, among others.
          </span>
        </div>
      </div>
    </div>
  )
}
