// src/lib/utils.ts
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge Tailwind / className values safely.
 * Accepts the same args as clsx.
 */
export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(...inputs))
}