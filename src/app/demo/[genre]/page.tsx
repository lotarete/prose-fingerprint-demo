"use client"
import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { getBooksByGenre, getAnchorBook } from "@/lib/books"
import { rankMatches } from "@/lib/styleCalc"
import { GENRE_META } from "@/lib/types"
import BookCardScoreless from "@/components/BookCardScoreless"
import StyleRadarChart from "@/components/RadarChart"
import InfoButton from "@/components/InfoButton"
import MethodologyButton from "@/components/MethodologyButton"
import ViewModeToggle, { ViewMode } from "@/components/ViewModeToggle"
import Annotation from "@/components/Annotation"
import { GenreIcon } from "@/components/illustrations"
import { GlassDock, GlassButton } from "@/components/ui/liquid-glass"

const GENRE_COLORS: Record<string, string> = {
  scifi: "#C5A24D",
  classics: "#8A6E5C",
  romance: "#E8B4B8",
}

const VIEW_MODE_KEY = "style-match:view-mode"

export default function GenreDemoPage() {
  const params = useParams()
  const genre = params.genre as string
  const anchor = getAnchorBook(genre)
  const meta = GENRE_META[genre]

  const [viewMode, setViewMode] = useState<ViewMode>("reader")

  // Load persisted view mode on mount
  useEffect(() => {
    const stored = window.localStorage.getItem(VIEW_MODE_KEY)
    if (stored === "reader" || stored === "builder") setViewMode(stored)
  }, [])

  // Persist on change
  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode)
    window.localStorage.setItem(VIEW_MODE_KEY, mode)
  }

  if (!anchor || !meta) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#F5F1EB" }}>
        <p className="text-[#8A8580]">Genre not found.</p>
      </div>
    )
  }

  const ranked = rankMatches(anchor, getBooksByGenre(genre))
  const showAnnotations = viewMode === "builder"

  return (
    <div className="min-h-screen" style={{ background: "#F5F1EB" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F5F1EB]/80 border-b border-[#E8E4DE]/50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="text-[#8A8580] hover:text-[#1A1A1A] transition-colors text-sm flex items-center gap-1.5 flex-shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M10 12L6 8l4-4" />
            </svg>
            Back
          </Link>

          <GlassDock>
            {Object.entries(GENRE_META).map(([key, val]) => (
              <Link key={key} href={`/demo/${key}`}>
                <GlassButton active={key === genre}>
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <GenreIcon genre={key} className="w-7 h-7" />
                    <span className="hidden sm:inline">{val.label}</span>
                  </span>
                </GlassButton>
              </Link>
            ))}
          </GlassDock>

          <div className="flex items-center gap-2 flex-shrink-0">
            <ViewModeToggle mode={viewMode} onChange={handleViewModeChange} />
            <MethodologyButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Anchor Section */}
        <div className="relative mb-8">
          <div className="bg-white rounded-2xl border border-[#E8E4DE] p-6">
            <div className="flex items-start gap-4 mb-4">
              <div
                className="w-16 h-22 rounded-lg flex-shrink-0 shadow-md"
                style={{ backgroundColor: anchor.coverColor, height: "5.5rem" }}
              />
              <div className="flex-1">
                <p className="text-[#8A8580] text-xs uppercase tracking-widest mb-1">
                  Anchor Book
                </p>
                <h1
                  className="text-2xl font-semibold text-[#1A1A1A] mb-1"
                  style={{ fontFamily: "var(--font-lora)" }}
                >
                  {anchor.title}
                </h1>
                <p className="text-[#6B6560] text-sm mb-3">{anchor.author}</p>
                <p className="text-[#6B6560] text-sm leading-relaxed italic">
                  &ldquo;{anchor.fingerprint}&rdquo;
                </p>
              </div>
            </div>

            <div className="border-t border-[#F0ECE6] pt-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[#8A8580] text-xs uppercase tracking-widest">
                  Style Profile
                </p>
                <InfoButton />
              </div>
              <StyleRadarChart anchor={anchor.styleVector} size={280} />
            </div>
          </div>

          {showAnnotations && (
            <>
              <Annotation
                side="right"
                anchor="top"
                variant={1}
                offsetY={32}
                number={1}
                text="Claude wrote this style fingerprint from what it already knows about how the book is described in public: Goodreads, StoryGraph, Kirkus, NYT / Guardian reviews. Never the book's own prose."
                scale="Claude writes each from a grounding packet: ~20 Goodreads reviews + StoryGraph tags + 2–3 preview passages per book."
              />
              <Annotation
                side="left"
                anchor="bottom"
                variant={2}
                offsetY={-40}
                number={2}
                text="Claude scored all 9 axes (0–1) the same way. The model isn't generating opinions. It's averaging ones that already exist, and we audited a sample to prove it."
                scale="Same 9 axes, auto-scored per title. A rolling audit re-checks 5% of new vectors against live reviews, so drift shows up as a number, not a vibe."
              />
            </>
          )}
        </div>

        {/* Match List */}
        <div className="space-y-3 mb-8">
          {ranked.map((book, i) => {
            const card = (
              <BookCardScoreless
                key={book.id}
                book={book}
                anchorVector={anchor.styleVector}
              />
            )
            // Wrap the first card to host annotations alongside it
            if (i === 0 && showAnnotations) {
              return (
                <div key={book.id} className="relative">
                  {card}
                  <Annotation
                    side="right"
                    anchor="top"
                    variant={3}
                    offsetY={8}
                    number={4}
                    text="Green = axes this book is closest to the anchor book on. Tan = axes they're furthest apart on. No overall score shown — the reader weighs the trade-off."
                    scale="Identical math. Anchor books stay human-curated (40–100 per genre) so each axis keeps meaning the same thing as the catalog grows."
                  />
                  <Annotation
                    side="left"
                    anchor="bottom"
                    variant={1}
                    offsetY={160}
                    number={3}
                    text="Each book gets its own style fingerprint the same way as the anchor book, so you can read the two side-by-side and feel the overlap yourself."
                    scale="Same method across the catalog. Per-axis confidence is added so books with thin review data flag themselves instead of faking certainty."
                  />
                </div>
              )
            }
            return card
          })}
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-[#B5B0A8] text-xs">
            Style vectors derived from public metadata and review signals.
            No copyrighted text was used.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            {Object.entries(GENRE_META).map(([key, val]) => (
              key !== genre && (
                <Link
                  key={key}
                  href={`/demo/${key}`}
                  className="text-sm font-medium hover:underline"
                  style={{ color: GENRE_COLORS[key] }}
                >
                  Try {val.label} →
                </Link>
              )
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
