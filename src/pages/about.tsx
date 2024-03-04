import '@/index.css'

export default function About() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-2 items-center justify-center text-text">
        <span className="text-5xl">This is still being built</span>
        <span className="text-lg">
          You can join my{' '}
          <a href="https://discord.gg/Y7ujpKmmma" className="text-primary">
            discord
          </a>{' '}
          if you wanna see its progress
        </span>
      </div>
    </>
  )
}
