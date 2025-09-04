export default function SectionBackdrop({
  className = "",
  density = 18,     // dot spacing in px
  dot = "#e5e7eb",  // dot color
  strength = 0.35,  // dot layer opacity
}: {
  className?: string
  density?: number
  dot?: string
  strength?: number
}) {
  return (
    <>
      {/* soft radial washes */}
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 ${className}
          bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.04),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.04),transparent_40%)]
          bg-[length:600px_600px]`}
      />
      {/* vignetted dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
                   [mask-image:radial-gradient(1200px_600px_at_50%_40%,black,transparent)]"
      >
        <div
          className="h-full w-full"
          style={{
            opacity: strength,
            backgroundImage: `radial-gradient(${dot} 1px, transparent 1px)`,
            backgroundSize: `${density}px ${density}px`,
          }}
        />
      </div>
    </>
  )
}