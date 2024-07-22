import Link from 'next/Link'

const Page = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col gap-2 items-center justify-center text-text">
        <span className="text-7xl text-primary">404</span>
        <span className="text-5xl">Page not found!</span>
        <Link
          href="/"
          className="text-lg px-6 py-2 bg-background-menu border-2 border-background-border mt-6 rounded-xl"
        >
          Home Page
        </Link>
      </div>
    </>
  )
}

export default Page
