"use client"
import React, { useState } from "react"
import { Book } from "@/lib/types"
import StyleRadarChart from "./RadarChart"
import { StyleVector } from "@/lib/types"

interface Props {
  book: Book & { score: number }
  anchorVector: StyleVector
  rank: number
}

function scoreColor(score: number) {
  // Thresholds mirror the legend in InfoButton and the calibrated
  // per-dimension scoring in styleCalc.ts. A green 80+ should be rare
  // and mean "this really does feel like your anchor on every axis."
  if (score >= 80) return "bg-[#D4EDDA] text-[#2D5F3E]"
  if (score >= 60) return "bg-[#FFF3CD] text-[#856404]"
  return "bg-[#F8D7DA] text-[#8B3A3E]"
}

export default function BookCard({ book, anchorVector, rank }: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="bg-white rounded-2xl border border-[#E8E4DE] hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start gap-4 p-4">
        {/* Cover color block */}
        <div
          className="w-12 h-16 rounded-lg flex-shrink-0 shadow-sm"
          style={{ backgroundColor: book.coverColor }}
        />

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#B5B0A8] text-xs font-medium">#{rank}</span>
            <h3 className="font-serif font-semibold text-[#1A1A1A] text-sm truncate">
              {book.title}
            </h3>
          </div>
          <p className="text-[#8A8580] text-xs mb-2">{book.author}</p>
          <p className="text-[#6B6560] text-xs leading-relaxed line-clamp-2">
            {book.whyMatch}
          </p>
        </div>

        {/* Score badge */}
        <div className={`px-3 py-1.5 rounded-full text-sm font-bold flex-shrink-0 ${scoreColor(book.score)}`}>
          {book.score}%
        </div>
      </div>

      {/* Expanded radar */}
      {expanded && (
        <div className="px-4 pb-4 border-t border-[#F0ECE6]">
          <div className="pt-3">
            <StyleRadarChart anchor={anchorVector} compare={book.styleVector} size={220} />
            <p className="text-[#6B6560] text-xs leading-relaxed mt-2 italic">
              &ldquo;{book.fingerprint}&rdquo;
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
