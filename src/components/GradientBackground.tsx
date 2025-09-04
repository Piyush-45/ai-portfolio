// components/backgrounds/GradientBackground.tsx
"use client"

import { cn } from "@/lib/utils"

export default function GradientBackground({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative bg-gradient-to-br from-gray-50 via-white to-white",
        className
      )}
    >
      {/* optional blur blob */}
      <div className="absolute top-[-50px] left-[-50px] h-[300px] w-[300px] rounded-full bg-gradient-to-br from-blue-100 to-purple-200 blur-3xl opacity-40 -z-10" />
      {children}
    </div>
  )
}