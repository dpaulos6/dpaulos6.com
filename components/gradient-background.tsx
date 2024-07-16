const GradientBackground = () => {
  return (
    <div className="absolute flex-1 flex-grow inset-0 bg-background bg-[linear-gradient(to_right,rgb(var(--background-hover))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--background-hover))_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-40 pointer-events-none">
      <div className="relative w-full h-full">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
    </div>
  )
}

export default GradientBackground
