"use client"
import React, { useState } from "react"
import { Book, StyleVector, DIMENSION_LABELS, StyleDimension } from "@/lib/types"
import { allDimensionScores } from "@/lib/styleCalc"
import StyleRadarChart from "./RadarChart"

interface Props {
  book: Book
  anchorVector: StyleVector
}

/**
 * Scoreless book card.
 *
 * No overall match percentage and no rank — the card surfaces which axes
 * this book is close to the anchor on and which it drifts on, then lets
 * the reader draw their own conclusion. The radar and per-axis readout
 * on click are the primary view.
 *
 * The list itself is still ordered (by the calibrated per-dim average
 * under the hood — something has to choose the order), we just don't
 * display that ordering as a rank, because a rank is still a small
 * verdict the reader didn't ask for.
 */
export default function BookCardScoreless({ book, anchorVector }: Props) {
  const [expanded, setExpanded] = useState(false)

  const dimScores = allDimensionScores(anchorVector, book.styleVector)

  // "Similar on" = top 3 axes by per-dim score, kept only if they're
  // actually close (>= 70). "Differs on" = the axes that drag this book
  // away from the anchor, kept only if they're genuinely far (<= 50).
  // Thresholds mean we don't put a chip on the card just to fill the slot.
  const sortedBySimilarity = [...dimScores].sort((a, b) => b.score - a.score)
  const similarOn = sortedBySimilarity.slice(0, 3).filter(d => d.score >= 70)
  const differsOn = sortedBySimilarity
    .slice(-3)
    .filter(d => d.score <= 50)
    .reverse() // worst first

  const labelFor = (dim: StyleDimension) => DIMENSION_LABELS[dim]

  return (
    <div
      className="bg-white rounded-2xl border border-[#E8E4DE] hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start gap-4 p-4">
        {/* Cover */}
        <div
          className="w-12 h-16 rounded-lg flex-shrink-0 shadow-sm"
          style={{ backgroundColor: book.coverColor }}
        />

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-serif font-semibold text-[#1A1A1A] text-sm truncate">
            {book.title}
          </h3>
          <p className="text-[#8A8580] text-xs mb-2">{book.author}</p>

          <p className="text-[#6B6560] text-xs leading-relaxed italic mb-2.5">
            &ldquo;{book.fingerprint}&rdquo;
          </p>

          {/* Similar / differs rows — honest factual summary, not a verdict */}
          {similarOn.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 mb-1 text-[11px]">
              <span className="text-[#8A8580] uppercase tracking-wider text-[10px]">
                Similar on
              </span>
              {similarOn.map(d => (
                <span
                  key={d.dimension}
                  className="px-2 py-0.5 rounded-full bg-[#EFF5EC] text-[#3E6A3B] font-medium"
                >
                  {labelFor(d.dimension as StyleDimension)}
                </span>
              ))}
            </div>
          )}

          {differsOn.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px]">
              <span className="text-[#8A8580] uppercase tracking-wider text-[10px]">
                Differs on
              </span>
              {differsOn.map(d => (
                <span
                  key={d.dimension}
                  className="px-2 py-0.5 rounded-full bg-[#F4EDE4] text-[#8A6A38] font-medium"
                >
                  {labelFor(d.dimension as StyleDimension)}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Expanded radar — the real primary view */}
      {expanded && (
        <div className="px-4 pb-4 border-t border-[#F0ECE6]">
          <div className="pt-3">
            <p className="text-[#8A8580] text-[10px] uppercase tracking-widest mb-1">
              Style profile vs. your anchor
            </p>
            <StyleRadarChart anchor={anchorVector} compare={book.styleVector} size={220} />
          </div>
        </div>
      )}
    </div>
  )
}
