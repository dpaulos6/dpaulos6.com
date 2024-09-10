import { contacts } from '@/data'
import Link from 'next/link'

export default function ContactsList() {
  return (
    <div className="flex flex-wrap gap-1 md:flex-nowrap px-8 items-center justify-center w-fit mx-auto">
      {contacts.map((contact, i) => (
        <Link
          key={i}
          href={contact.href}
          target="_blank"
          className="w-fit flex gap-1.5 items-center p-1.5 rounded-xl hover:bg-primary/10 hover:text-primary transition select-none"
        >
          <contact.icon className="text-2xl md:text-3xl" />
          <span className="text-xl md:text-2xl sr-only">{contact.label}</span>
        </Link>
      ))}
    </div>
  )
}
