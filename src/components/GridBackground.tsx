// components/backgrounds/GridBackground.tsx
"use client"

import { cn } from "@/lib/utils"

export default function GridBackground({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative bg-white",
        className
      )}
    >
      {/* grid pattern */}
      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      {children}
    </div>
  )
}