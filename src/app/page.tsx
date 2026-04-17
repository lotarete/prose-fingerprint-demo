"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { GenreIcon } from "@/components/illustrations"

const GENRES = [
  {
    id: "scifi",
    label: "Science Fiction",
    anchor: "Iain M. Banks",
    author: "Iain M. Banks",
    description: "Culture series & beyond",
    color: "#C5A24D",
  },
  {
    id: "classics",
    label: "Classics",
    anchor: "The Master and Margarita",
    author: "Mikhail Bulgakov",
    description: "Mikhail Bulgakov",
    color: "#8A6E5C",
  },
  {
    id: "romance",
    label: "Romance",
    anchor: "The Night We Met",
    author: "Abby Jimenez",
    description: "Abby Jimenez",
    color: "#E8B4B8",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#F5F1EB" }}>
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
        {/* Background illustrations */}
        <Image
          src="/hero/cat-v2.png"
          alt=""
          width={600}
          height={600}
          priority
          className="absolute top-8 right-8 w-72 h-72 opacity-85 hidden md:block object-contain"
        />
        <Image
          src="/hero/books-v2.png"
          alt=""
          width={600}
          height={600}
          priority
          className="absolute bottom-10 left-10 w-64 h-64 opacity-80 hidden md:block object-contain"
        />

        {/* Decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#C5A24D]/20" />
          <div className="absolute top-[30%] right-[25%] w-1 h-1 rounded-full bg-[#8A6E5C]/20" />
          <div className="absolute bottom-[35%] left-[30%] w-1 h-1 rounded-full bg-[#E8B4B8]/25" />
          <div className="absolute top-[50%] right-[15%] w-1.5 h-1.5 rounded-full bg-[#C5A24D]/15" />
        </div>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <p className="text-[#8A8580] text-sm tracking-widest uppercase mb-4">
            A different kind of recommendation
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-5 leading-tight whitespace-nowrap"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Find authors by <em className="text-[#C5A24D] not-italic">how</em> they write
          </h1>
          <p className="text-[#6B6560] text-lg leading-relaxed max-w-lg mx-auto mb-12">
            Genre tells you what a book is about. Style tells you how it feels to read it.
            We match books on prose rhythm, emotional texture, and voice. If one lands,
            the author&rsquo;s catalog is your next stop.
          </p>

          {/* Genre Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {GENRES.map((genre) => (
              <Link key={genre.id} href={`/demo/${genre.id}`}>
                <LiquidButton size="xl" className="group w-64 sm:w-auto h-auto py-4">
                  <div className="flex items-center gap-4 relative z-20">
                    <GenreIcon genre={genre.id} className="size-12 shrink-0" style={{ color: genre.color }} />
                    <div className="text-left">
                      <div className="font-semibold text-[#1A1A1A] text-base" style={{ fontFamily: "var(--font-lora)" }}>
                        {genre.author}
                      </div>
                      <div className="text-[#8A8580] text-[10px] uppercase tracking-wider">
                        {genre.label}
                      </div>
                    </div>
                  </div>
                </LiquidButton>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-[#B5B0A8] text-xs mt-16 text-center max-w-md">
          Each demo starts with a book you love, then finds books and authors whose prose sits
          in the same neighborhood across 9 dimensions. If one title doesn&apos;t land,
          their catalog might.
        </p>
      </div>
    </div>
  )
}
