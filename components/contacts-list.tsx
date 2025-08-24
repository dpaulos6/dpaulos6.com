import { contacts } from '@/data'
import Link from 'next/link'

export default function ContactsList() {
  return (
    <div className='mx-auto flex w-fit flex-wrap items-center justify-center gap-1 px-8 md:flex-nowrap'>
      {contacts.map((contact, i) => (
        <Link
          key={i}
          href={contact.href}
          target="_blank"
          className='flex w-fit select-none items-center gap-1.5 rounded-xl p-1.5 transition hover:bg-primary/10 hover:text-primary'
        >
          <contact.icon className="text-2xl md:text-3xl" />
          <span className='sr-only text-xl md:text-2xl'>{contact.label}</span>
        </Link>
      ))}
    </div>
  )
}
