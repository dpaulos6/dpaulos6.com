import Link from 'next/link'

const Page = () => {
  return (
    <>
      <div className='flex min-h-screen w-full flex-col items-center justify-center gap-2 text-text'>
        <span className="text-7xl text-primary">404</span>
        <span className="text-5xl">Page not found!</span>
        <Link
          href="/"
          className='mt-6 rounded-xl border-2 border-background-border bg-background-menu px-6 py-2 text-lg'
        >
          Home Page
        </Link>
      </div>
    </>
  )
}

export default Page
