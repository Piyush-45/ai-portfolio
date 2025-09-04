// components/backgrounds/DotBackground.tsx
"use client"

import { cn } from "@/lib/utils"

export default function DotBackground({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("relative bg-white", className)}>
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      {children}
    </div>
  )
}