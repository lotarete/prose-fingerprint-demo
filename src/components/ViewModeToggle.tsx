"use client"
import React from "react"

export type ViewMode = "reader" | "builder"

interface Props {
  mode: ViewMode
  onChange: (mode: ViewMode) => void
}

export default function ViewModeToggle({ mode, onChange }: Props) {
  return (
    <div className="hidden md:inline-flex items-center rounded-full border border-[#E8E4DE] bg-white/70 backdrop-blur-sm p-0.5 text-xs">
      <button
        onClick={() => onChange("reader")}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          mode === "reader"
            ? "bg-[#1A1A1A] text-white"
            : "text-[#6B6560] hover:text-[#1A1A1A]"
        }`}
        aria-pressed={mode === "reader"}
      >
        Reader
      </button>
      <button
        onClick={() => onChange("builder")}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          mode === "builder"
            ? "bg-[#1A1A1A] text-white"
            : "text-[#6B6560] hover:text-[#1A1A1A]"
        }`}
        aria-pressed={mode === "builder"}
      >
        Builder
      </button>
    </div>
  )
}
