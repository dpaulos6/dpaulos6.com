import '@/app/preloader.css'

export function Preloader() {
  return (
    <div className="absolute top-0 left-0 bg-background w-full h-screen flex justify-center items-center z-[9999] overflow-hidden">
      <div className="jelly"></div>
      <svg
        width="0"
        height="0"
        className="jelly-maker"
      >
        <defs>
          <filter id="uib-jelly-ooze">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="6.25"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            ></feColorMatrix>
            <feBlend
              in="SourceGraphic"
              in2="ooze"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  )
}
