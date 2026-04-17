"use client"
import React from "react"

interface MatrixEntry {
  label: string
  author: string
  styleMatch: boolean
  topicMatch: boolean
  note: string
}

const MATRIX_DATA: MatrixEntry[] = [
  {
    label: "The Bright Hour",
    author: "Nina Riggs",
    styleMatch: true,
    topicMatch: true,
    note: "Literary terminal illness memoir with poetic grace, closest sibling",
  },
  {
    label: "H is for Hawk",
    author: "Helen Macdonald",
    styleMatch: true,
    topicMatch: false,
    note: "Same lyrical intellectual prose, but about falconry and grief — not medicine",
  },
  {
    label: "Being Mortal",
    author: "Atul Gawande",
    styleMatch: false,
    topicMatch: true,
    note: "Same subject (mortality, medicine) but accessible narrative, not philosophical",
  },
  {
    label: "Sapiens",
    author: "Yuval Noah Harari",
    styleMatch: false,
    topicMatch: false,
    note: "Different everything: modern, confident, macro-historical vs personal lyricism",
  },
]

export default function StyleTopicMatrix() {
  return (
    <div className="bg-white rounded-2xl border border-[#E8E4DE] p-6 my-6">
      <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-1">
        Style and topic are independent axes
      </h3>
      <p className="text-[#8A8580] text-sm mb-5">
        This is why genre-based recommendations miss the mark. A book can match how it&apos;s written without matching what it&apos;s about — and vice versa.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {MATRIX_DATA.map((entry) => (
          <div
            key={entry.label}
            className="rounded-xl p-4 border border-[#F0ECE6]"
            style={{
              backgroundColor:
                entry.styleMatch && entry.topicMatch
                  ? "#F0FAF0"
                  : entry.styleMatch
                    ? "#FFF8E8"
                    : entry.topicMatch
                      ? "#F0F4FA"
                      : "#FAF0F0",
            }}
          >
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${entry.styleMatch ? "bg-[#C5A24D]/20 text-[#8B7028]" : "bg-[#E8E4DE] text-[#8A8580]"}`}>
                {entry.styleMatch ? "✓ Style" : "✗ Style"}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${entry.topicMatch ? "bg-[#5CC8B8]/20 text-[#3A7A6F]" : "bg-[#E8E4DE] text-[#8A8580]"}`}>
                {entry.topicMatch ? "✓ Topic" : "✗ Topic"}
              </span>
            </div>
            <p className="font-serif font-semibold text-sm text-[#1A1A1A]">{entry.label}</p>
            <p className="text-[#8A8580] text-xs mb-1">{entry.author}</p>
            <p className="text-[#6B6560] text-xs leading-relaxed">{entry.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
