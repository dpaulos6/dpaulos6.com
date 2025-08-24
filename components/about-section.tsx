import { CornerLeftDown } from 'lucide-react'
import { getDob } from '@/utils/dob'
import { Title } from './title'
import Image from 'next/image'

export function AboutSection() {
  const age = getDob('2003-05-17')

  return (
    <div className='mb-40 flex w-full max-w-7xl flex-col items-center'>
      <Title
        title="Who am I?"
        className="mb-32"
      />
      <div className='flex w-full flex-col items-center gap-16 px-8 xs:px-12 sm:px-16 md:px-20 lg:flex-row'>
        <div className='relative flex w-2/3 items-center'>
          <div className='-top-12 absolute left-1/2 z-10 flex translate-x-1/3 items-center gap-2'>
            <CornerLeftDown className='aspect-square h-auto w-5 sm:w-6 md:w-7' />
            <div className='-space-y-1 sm:-space-y-2 flex flex-col items-center whitespace-nowrap'>
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
            className='w-full select-none rounded-b-full'
            priority
          />
        </div>
        <div className='relative flex flex-col justify-center gap-6 text-start text-xl leading-relaxed md:text-2xl lg:w-2/3'>
          <span>
            I&apos;m Diogo Paulos, currently {age} years old and living in the
            beauty of{' '}
            <span className='bg-gradient-to-b from-60% from-transparent to-60% to-primary/60'>
              Portugal
            </span>
            .
          </span>
          <span>
            One thing that I love is coding . I&apos;m{' '}
            <span className='bg-gradient-to-b from-60% from-transparent to-60% to-primary/60'>
              passionate
            </span>{' '}
            about exploring different programming languages and frameworks and
            I&apos;m always eager to{' '}
            <span className='bg-gradient-to-b from-60% from-transparent to-60% to-primary/60'>
              learn
            </span>{' '}
            something new. Right now, I&apos;m fully immersed in mastering
            modern web development technologies, so I can take my projects to
            the{' '}
            <span className='bg-gradient-to-b from-60% from-transparent to-60% to-primary/60'>
              next level
            </span>
            .
          </span>
          <span>
            Aside from work, I{' '}
            <span className='bg-gradient-to-b from-60% from-transparent to-60% to-primary/60'>
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
