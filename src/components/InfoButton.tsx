"use client"
import React, { useState, useEffect } from "react"

const DIMENSIONS = [
  {
    label: "Humor",
    plain: "How funny is it?",
    low: "Serious the whole way through.",
    high: "Makes you laugh out loud.",
  },
  {
    label: "Emotional Depth",
    plain: "How much it makes you feel.",
    low: "Light, breezy, no tissues needed.",
    high: "Might make you cry on a plane.",
  },
  {
    label: "Prose Complexity",
    plain: "How fancy the writing is.",
    low: "Easy words, short sentences, feels like talking to a friend.",
    high: "Long twisty sentences with big words — closer to Shakespeare.",
  },
  {
    label: "Dialogue Forward",
    plain: "How much people are talking vs. being described.",
    low: "Mostly the narrator describing things.",
    high: "Mostly characters talking to each other.",
  },
  {
    label: "Pace",
    plain: "How fast stuff happens.",
    low: "Slow and thoughtful. Sit with a cup of tea.",
    high: "Can't-put-it-down, something happens every page.",
  },
  {
    label: "Descriptiveness",
    plain: "How much the book paints what things look, smell, and feel like.",
    low: "Gets to the point, barely describes anything.",
    high: "You can picture every room, every sunset, every meal.",
  },
  {
    label: "Introspection",
    plain: "How much we're inside a character's head.",
    low: "We see what they do from the outside, like watching a movie.",
    high: "We hear every thought and worry they have.",
  },
  {
    label: "Lyricism",
    plain: "How poetic the writing sounds.",
    low: "Sounds like normal talking.",
    high: "Sentences feel like music or poetry, beautiful even on their own.",
  },
  {
    label: "Darkness",
    plain: "How heavy, sad, or scary the book is.",
    low: "Warm and hopeful, happy endings.",
    high: "Bleak, grim, or full of dread.",
  },
]

export default function InfoButton() {
  const [open, setOpen] = useState(false)

  // Lock body scroll when modal open + close on ESC
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

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="What do these style categories mean?"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#6B6560] hover:text-[#1A1A1A] bg-[#F0ECE6] hover:bg-[#E8E4DE] border border-[#E8E4DE] transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        What do these mean?
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1A1A1A]/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[#FAF7F1] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-[#E8E4DE]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#FAF7F1]/95 backdrop-blur-md border-b border-[#E8E4DE] px-6 py-4 flex items-center justify-between z-10">
              <h2
                className="text-xl font-semibold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                A plain-English guide
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

            <div className="px-6 py-6">
              {/* Big picture */}
              <section className="mb-8">
                <h3
                  className="text-base font-semibold text-[#1A1A1A] mb-2"
                  style={{ fontFamily: "var(--font-lora)" }}
                >
                  What is this even trying to do?
                </h3>
                <p className="text-sm text-[#3A3632] leading-relaxed">
                  Most book apps recommend by <em>topic</em>: &ldquo;you read a pirate book,
                  here&apos;s another pirate book.&rdquo; This tries to recommend by <em>feel</em>.
                  Two pirate books can feel wildly different: one might be funny and fast,
                  the other might be slow and sad. We score each book on nine different
                  &ldquo;feels&rdquo; and find books that feel the same as the one you loved.
                </p>
              </section>

              {/* How the card reads */}
              <section className="mb-8">
                <h3
                  className="text-base font-semibold text-[#1A1A1A] mb-2"
                  style={{ fontFamily: "var(--font-lora)" }}
                >
                  How to read each card
                </h3>
                <p className="text-sm text-[#3A3632] leading-relaxed mb-3">
                  We don&apos;t roll up a single &ldquo;match&rdquo; number for each book.
                  Instead, each card shows the axes where a book sits close to your anchor
                  and the axes where it drifts, so you can decide which trade-offs matter
                  for the kind of read you&apos;re looking for.
                </p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#EFF5EC] text-[#3E6A3B] font-medium">
                    Similar on: axes within ~0.15 of anchor
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#F4EDE4] text-[#8A6A38] font-medium">
                    Differs on: axes ~0.25+ apart
                  </span>
                </div>
                <p className="text-sm text-[#3A3632] leading-relaxed">
                  Tap any card to open the radar chart and per-axis readout. The nine
                  numbers there are honest: a 100 means identical on that axis, a 0 means
                  half the scale apart or more. No verdict, just the picture.
                </p>
              </section>

              {/* Dimensions */}
              <section>
                <h3
                  className="text-base font-semibold text-[#1A1A1A] mb-3"
                  style={{ fontFamily: "var(--font-lora)" }}
                >
                  The 9 &ldquo;feels&rdquo; we measure
                </h3>
                <div className="space-y-3">
                  {DIMENSIONS.map((d) => (
                    <div
                      key={d.label}
                      className="bg-white rounded-xl border border-[#E8E4DE] p-4"
                    >
                      <div className="flex items-baseline gap-2 mb-1.5 flex-wrap">
                        <h4
                          className="text-sm font-semibold text-[#1A1A1A]"
                          style={{ fontFamily: "var(--font-lora)" }}
                        >
                          {d.label}
                        </h4>
                        <span className="text-xs text-[#8A8580]">· {d.plain}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div className="bg-[#F0ECE6] rounded-lg px-3 py-2">
                          <div className="text-[#8A8580] uppercase tracking-wider text-[10px] mb-0.5">Low</div>
                          <div className="text-[#3A3632]">{d.low}</div>
                        </div>
                        <div className="bg-[#F0ECE6] rounded-lg px-3 py-2">
                          <div className="text-[#8A8580] uppercase tracking-wider text-[10px] mb-0.5">High</div>
                          <div className="text-[#3A3632]">{d.high}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Close hint */}
              <p className="text-center text-[10px] text-[#B5B0A8] mt-6">
                Press Esc or tap outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
