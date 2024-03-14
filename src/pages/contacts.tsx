import '@/index.css'
import { Link } from 'react-router-dom'

export default function Contacts() {
  return (
    <section id="contacts_page">
      <div className="w-screen h-screen flex flex-col gap-2 items-center justify-center text-text">
        <span className="text-5xl">This is still being built</span>
        <span className="text-lg">
          You can join my{' '}
          <Link to="https://discord.gg/Y7ujpKmmma" className="text-primary">
            discord
          </Link>{' '}
          if you wanna see its progress
        </span>
      </div>
    </section>
  )
}
