import '@/app/globals.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-2 items-center justify-center text-text">
        <div className="flex gap-16 justify-between items-center w-full max-w-7xl">
          <div className="flex flex-col gap-6">
            <Image
              src="/dpaulos6_nobg.png"
              alt="A photo of me."
              width={9999}
              height={9999}
              className="w-96 h-auto rounded-b-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl">
              My name is{' '}
              <b className="font-normal text-primary">Diogo Paulos</b>, I&apos;m
              20 years old and I&apos;m a Portuguese{' '}
              <b className="font-normal text-primary">fullstack developer</b>.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
