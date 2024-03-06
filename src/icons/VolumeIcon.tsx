import type { SVGProps } from 'react'

export function VolumeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.383 3.076A1 1 0 0 1 10 4v12a1 1 0 0 1-1.707.707L4.586 13H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.586l3.707-3.707a1 1 0 0 1 1.09-.217m5.274-.147a1 1 0 0 1 1.414 0A9.972 9.972 0 0 1 19 10a9.972 9.972 0 0 1-2.929 7.071a1 1 0 0 1-1.414-1.414A7.971 7.971 0 0 0 17 10a7.97 7.97 0 0 0-2.343-5.657a1 1 0 0 1 0-1.414m-2.829 2.828a1 1 0 0 1 1.415 0A5.983 5.983 0 0 1 15 10a5.984 5.984 0 0 1-1.757 4.243a1 1 0 0 1-1.415-1.415A3.984 3.984 0 0 0 13 10a3.983 3.983 0 0 0-1.172-2.828a1 1 0 0 1 0-1.415"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
