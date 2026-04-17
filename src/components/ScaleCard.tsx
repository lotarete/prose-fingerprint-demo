"use client"
import React from "react"

export default function ScaleCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#E8E4DE] p-6 my-8">
      <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-1">
        How this works at scale
      </h3>
      <p className="text-[#8A8580] text-sm mb-5">
        This demo covers 42 hand-picked books across three genres. These are the key moments to consider for getting from here to a full catalog of hundreds of thousands of titles.
      </p>

      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-[#C5A24D]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#C5A24D] font-serif font-bold text-sm">1</span>
          </div>
          <div>
            <p className="font-medium text-sm text-[#1A1A1A]">Grounded style vectors for the full catalog</p>
            <p className="text-[#6B6560] text-xs leading-relaxed mt-0.5">
              For each book, assemble a grounding packet (StoryGraph mood/pace tags, the top 20 Goodreads reviews across star ratings, and 2–3 preview passages) and have an AI model output the 9-dimension vector plus per-axis confidence. Same reasoning used for the 42 demo titles, run at batch scale.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-[#5CC8B8]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#5CC8B8] font-serif font-bold text-sm">2</span>
          </div>
          <div>
            <p className="font-medium text-sm text-[#1A1A1A]">Human-curated anchor books stay the calibration backbone</p>
            <p className="text-[#6B6560] text-xs leading-relaxed mt-0.5">
              Anchor books define what each axis <em>means</em>{" "}to a reader. 40–100 anchor books per genre, hand-reviewed, are the reference point every generated vector is scored against. It&apos;s what keeps &ldquo;humour 0.7&rdquo; meaning the same thing across a 200K-title catalog.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-[#E8B4B8]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#C47A80] font-serif font-bold text-sm">3</span>
          </div>
          <div>
            <p className="font-medium text-sm text-[#1A1A1A]">On-demand for the long tail</p>
            <p className="text-[#6B6560] text-xs leading-relaxed mt-0.5">
              When someone searches for an obscure title, generate its profile on the fly from available metadata and reviews, then cache it forever. A few cents per new title at 2026 API rates; obscure books with thin review data carry wider confidence bars so we never overstate certainty. The long tail builds itself as users use the app.
            </p>
          </div>
        </div>

        <div className="flex gap-3 mt-6 pt-5 border-t border-[#F0ECE6]">
          <div className="w-8 h-8 rounded-full bg-[#F0ECE6] flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#8A8580] font-serif font-bold text-sm">+</span>
          </div>
          <div>
            <p className="font-medium text-sm text-[#1A1A1A]">Continuous audit + behavioural signal</p>
            <p className="text-[#6B6560] text-xs leading-relaxed mt-0.5">
              A rolling sample of generated vectors is re-checked against live Goodreads / StoryGraph / Kirkus signals, so agreement rate is a number we can cite, not a vibe. Over time, reader co-occurrence (&ldquo;loved Banks, also loved Leckie&rdquo;) becomes an additive signal that reinforces or flags the vector-based match.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-[#F0ECE6]">
        <p className="text-[#8A8580] text-[11px] uppercase tracking-widest mb-1.5">
          Compute budget, ballpark
        </p>
        <p className="text-[#6B6560] text-xs leading-relaxed">
          At 2026 batch-API rates, standing up a 500K-title catalog is roughly <strong className="text-[#1A1A1A] font-medium">$5–10K one-time</strong>, with ongoing model spend in the low tens of thousands per year.
        </p>
      </div>
    </div>
  )
}
