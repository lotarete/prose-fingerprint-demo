"use client"
import React from "react"
import { cn } from "@/lib/utils"

interface GlassEffectProps {
  children: React.ReactNode
  className?: string
}

export function GlassEffect({ children, className }: GlassEffectProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "bg-white/40 backdrop-blur-xl",
        "border border-white/30",
        "shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.5)]",
        className
      )}
    >
      {children}
    </div>
  )
}

interface GlassDockProps {
  children: React.ReactNode
  className?: string
}

export function GlassDock({ children, className }: GlassDockProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 p-2 rounded-full",
        "bg-white/30 backdrop-blur-xl",
        "border border-white/20",
        "shadow-[0_4px_24px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.4)]",
        className
      )}
    >
      {children}
    </div>
  )
}

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

export function GlassButton({ children, className, active, ...props }: GlassButtonProps) {
  return (
    <button
      className={cn(
        "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
        "backdrop-blur-md",
        active
          ? "bg-white/60 text-[#1A1A1A] shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
          : "bg-transparent text-[#6B6560] hover:bg-white/40 hover:text-[#1A1A1A]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
