"use client"
import React, { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import ScaleCard from "./ScaleCard"

export default function MethodologyButton() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  const overlay = open && (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1A1A1A]/40 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-[#FAF7F1] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-[#E8E4DE]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#FAF7F1]/95 backdrop-blur-md border-b border-[#E8E4DE] px-6 py-4 flex items-center justify-between z-10">
          <h2
            className="text-xl font-semibold text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-lora), 'Lora', serif" }}
          >
            Behind the demo
          </h2>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="p-1.5 rounded-full hover:bg-[#E8E4DE] text-[#8A8580] hover:text-[#1A1A1A] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="px-4 py-2">
          <ScaleCard />
        </div>

        <p className="text-center text-[10px] text-[#B5B0A8] pb-4">
          Press Esc or tap outside to close
        </p>
      </div>
    </div>
  )

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#6B6560] hover:text-[#1A1A1A] bg-white/70 hover:bg-white border border-[#E8E4DE] transition-colors backdrop-blur-sm"
        aria-label="How this works at scale"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 4 4 5-5" />
        </svg>
        At scale
      </button>

      {mounted && overlay ? createPortal(overlay, document.body) : null}
    </>
  )
}
