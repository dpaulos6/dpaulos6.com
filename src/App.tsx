import BackgroundAudio from '@/components/BackgroundAudio'
import Navbar from '@/components/navbar'

export default function App() {
  return (
    <>
      <div className="hidden limit:flex">
        <Navbar />
        <BackgroundAudio />
      </div>
      <div className="w-screen h-screen flex justify-center items-center limit:hidden">
        <span className="flex text-text text-base text-center px-4">
          Your device's screen is too small to render this website.
        </span>
      </div>
    </>
  )
}
