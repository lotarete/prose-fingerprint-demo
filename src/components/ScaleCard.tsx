"use client"
import React from "react"

export default function ScaleCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#E8E4DE] p-6 my-8">
      <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-1">
        How this works at scale
      </h3>
      <p className="text-[#8A8580] text-sm mb-5">
        This demo covers 42 hand-picked books across three genres. These are the four moments that matter when getting from here to a catalogue of hundreds of thousands of titles.
      </p>

      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-[#C5A24D]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#C5A24D] font-serif font-bold text-sm">1</span>
          </div>
          <div>
            <p className="font-medium text-sm text-[#1A1A1A]">When a new book enters the catalogue</p>
            <p className="text-[#6B6560] text-xs leading-relaxed mt-0.5">
              Grab ~20 Goodreads reviews sampled across star ratings, the StoryGraph mood and pace tags, and 2–3 free preview passages. Bundle them into a grounding packet, hand it to the AI with the 9-axis rubric, and out comes the vector plus a per-axis confidence score. Same reasoning we used for the 42 demo titles, now run as a batch job across the whole backlist.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-[#5CC8B8]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#5CC8B8] font-serif font-bold text-sm">2</span>
          </div>
          <div>
            <p className="font-medium text-sm text-[#1A1A1A]">When the AI scores a new book, it needs a yardstick</p>
            <p className="text-[#6B6560] text-xs leading-relaxed mt-0.5">
              Drop 40–100 hand-reviewed anchor books <em>per genre</em>{" "}into the prompt as fixed examples (&ldquo;romance: Beach Read humour 0.68, Gone Girl 0.2&rdquo;), so every new book lands on the same scale. That&apos;s what keeps &ldquo;humour 0.7&rdquo; meaning the same thing across a 200K-title catalogue, even after a model upgrade or a reworded prompt that would otherwise quietly drift the scale. Per-genre, because romance humour and literary-classics humour aren&apos;t the same thing.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-[#E8B4B8]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#C47A80] font-serif font-bold text-sm">3</span>
          </div>
          <div>
            <p className="font-medium text-sm text-[#1A1A1A]">When someone searches for a book we haven&apos;t seen yet</p>
            <p className="text-[#6B6560] text-xs leading-relaxed mt-0.5">
              Generate its profile on the fly from whatever metadata and reviews exist, then cache it forever. A few cents per new title at 2026 API rates. Obscure books with thin review data come back with wider confidence bars, so we never overstate certainty. The long tail builds itself as readers use the app.
            </p>
          </div>
        </div>

        <div className="flex gap-3 mt-6 pt-5 border-t border-[#F0ECE6]">
          <div className="w-8 h-8 rounded-full bg-[#F0ECE6] flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#8A8580] font-serif font-bold text-sm">+</span>
          </div>
          <div>
            <p className="font-medium text-sm text-[#1A1A1A]">When we want to know the catalogue is still right</p>
            <p className="text-[#6B6560] text-xs leading-relaxed mt-0.5">
              Re-check a rolling 5% of new vectors against live Goodreads / StoryGraph / Kirkus signals, so agreement rate is a number we can cite, not a vibe. Over time, reader co-occurrence (&ldquo;loved Banks, also loved Leckie&rdquo;) becomes a second signal that reinforces or flags the vector-based match.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
