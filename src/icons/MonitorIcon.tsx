import type { SVGProps } from 'react'

export function MonitorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <rect width={20} height={14} x={2} y={3} rx={2}></rect>
        <path d="M8 21h8m-4-4v4"></path>
      </g>
    </svg>
  )
}
