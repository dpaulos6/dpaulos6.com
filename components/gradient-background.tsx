const GradientBackground = () => {
  return (
    <div className='pointer-events-none absolute inset-0 flex-1 flex-grow bg-[linear-gradient(to_right,rgb(var(--background-hover))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--background-hover))_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] bg-background opacity-40'>
      <div className='relative h-full w-full'>
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      </div>
    </div>
  )
}

export default GradientBackground
