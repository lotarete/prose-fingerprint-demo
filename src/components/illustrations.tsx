"use client"
import React from "react"

// Hand-drawn style mythical illustrations — ink/sketch aesthetic
// Stronger strokes + darker ink color so they read clearly against the cream bg

const INK = "#3A3632"       // deep warm near-black for primary linework
const INK_SOFT = "#5A5550"  // softer for secondary detail
const GOLD = "#B48A2A"      // darker gold (was #C5A24D) so sparkles stand out

export function DragonWithBook({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.88" stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Dragon body curve */}
        <path d="M60 140c-5-20 10-40 30-50s35-5 40 10c3 10-2 20-15 25" />
        <path d="M115 125c10-5 25-15 30-30s0-30-10-35" />
        {/* Wings */}
        <path d="M85 95c-15-25-5-50 15-60s30 0 25 15" />
        <path d="M95 90c5-30 25-45 40-40s15 20 5 30" />
        {/* Wing membrane lines */}
        <path d="M88 93c-8-15-3-30 8-38" stroke={INK_SOFT} strokeWidth="1.6" opacity="0.75" />
        <path d="M98 88c3-18 15-28 25-25" stroke={INK_SOFT} strokeWidth="1.6" opacity="0.75" />
        {/* Head */}
        <circle cx="118" cy="118" r="8" />
        <path d="M124 114c3-2 6-1 7 1" />
        <circle cx="120" cy="116" r="1.8" fill={INK} />
        {/* Book underneath */}
        <rect x="55" y="142" width="40" height="6" rx="1" />
        <rect x="53" y="144" width="44" height="6" rx="1" />
        <line x1="75" y1="142" x2="75" y2="150" />
        {/* Tail */}
        <path d="M60 140c-10 5-25 0-30-10s0-20 8-22" />
        <path d="M38 108c-3-2-5-8-2-12" />
      </g>
      {/* Stars / sparkles */}
      <g stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" opacity="0.9">
        <path d="M150 70l2-5 2 5-5-2 5-2" />
        <path d="M45 75l1.5-4 1.5 4-4-1.5 4-1.5" />
        <path d="M160 130l1-3 1 3-3-1 3-1" />
      </g>
    </svg>
  )
}

export function ConstellationBook({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.9" stroke={INK} strokeWidth="2" strokeLinecap="round">
        {/* Open book base */}
        <path d="M50 140c20-8 40-8 50 0" strokeWidth="2.4" />
        <path d="M100 140c10-8 30-8 50 0" strokeWidth="2.4" />
        <line x1="100" y1="140" x2="100" y2="128" strokeWidth="2.4" />
        <path d="M50 140l-3 5h56l-3-5" stroke={INK_SOFT} strokeWidth="1.6" />
        <path d="M100 145h53l-3-5" stroke={INK_SOFT} strokeWidth="1.6" />
      </g>
      {/* Stars rising from book */}
      <g opacity="1">
        <circle cx="75" cy="110" r="3" fill={GOLD} />
        <circle cx="100" cy="85" r="3.5" fill={GOLD} />
        <circle cx="125" cy="95" r="3" fill={GOLD} />
        <circle cx="88" cy="65" r="2.5" fill={GOLD} />
        <circle cx="115" cy="55" r="3" fill={GOLD} />
        <circle cx="95" cy="45" r="2.2" fill={GOLD} />
        <circle cx="130" cy="70" r="2.2" fill={GOLD} />
        <circle cx="70" cy="80" r="1.8" fill={GOLD} />
      </g>
      {/* Constellation lines */}
      <g stroke={INK_SOFT} strokeWidth="1.4" strokeDasharray="3 3" opacity="0.7">
        <line x1="75" y1="110" x2="100" y2="85" />
        <line x1="100" y1="85" x2="125" y2="95" />
        <line x1="100" y1="85" x2="88" y2="65" />
        <line x1="88" y1="65" x2="115" y2="55" />
        <line x1="125" y1="95" x2="130" y2="70" />
        <line x1="130" y1="70" x2="115" y2="55" />
        <line x1="115" y1="55" x2="95" y2="45" />
      </g>
    </svg>
  )
}

export function PhoenixFromPages({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.9" stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Pages / paper stack at bottom */}
        <path d="M65 155h70" />
        <path d="M68 150h64" />
        <path d="M72 145h56" />
        {/* Phoenix rising — flowing curves */}
        <path d="M100 145c0-15-10-25-5-40s15-25 20-35" />
        <path d="M115 70c5-10 15-15 20-10s3 12-5 18" />
        <path d="M130 78c8-3 12 2 10 8s-8 8-12 5" />
      </g>
      {/* Wing left */}
      <g stroke={INK_SOFT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
        <path d="M95 105c-15-5-30-2-38 8" />
        <path d="M95 100c-20-10-35-5-40 5" opacity="0.8" />
        <path d="M95 95c-18-15-28-10-32 0" opacity="0.7" />
        {/* Wing right */}
        <path d="M105 105c15-5 30-2 38 8" />
        <path d="M105 100c20-10 35-5 40 5" opacity="0.8" />
        <path d="M105 95c18-15 28-10 32 0" opacity="0.7" />
        {/* Tail feathers */}
        <path d="M100 145c-8 0-15-5-18-12" opacity="0.7" />
        <path d="M100 145c8 0 15-5 18-12" opacity="0.7" />
      </g>
      {/* Flame accents */}
      <g stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" opacity="0.9">
        <path d="M112 72c2-5 6-8 8-6" />
        <path d="M120 65c1-4 4-6 6-4" />
      </g>
      <g opacity="0.85">
        <circle cx="80" cy="80" r="1.6" fill={GOLD} />
        <circle cx="120" cy="90" r="1.6" fill={GOLD} />
      </g>
    </svg>
  )
}

export function QuillAndStars({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.9" stroke={INK} strokeWidth="2" strokeLinecap="round">
        {/* Quill */}
        <path d="M30 95L60 45c5-10 15-20 25-22s12 5 8 15L65 85" />
        <path d="M30 95c0 3 2 5 5 5s8-3 10-8" />
        <line x1="60" y1="45" x2="55" y2="55" stroke={INK_SOFT} strokeWidth="1.4" opacity="0.7" />
      </g>
      {/* Ink trail becoming stars */}
      <g opacity="1">
        <circle cx="75" cy="40" r="2.2" fill={GOLD} />
        <circle cx="85" cy="28" r="1.8" fill={GOLD} />
        <circle cx="68" cy="30" r="1.6" fill={GOLD} />
        <circle cx="90" cy="38" r="1.4" fill={GOLD} />
        <circle cx="78" cy="22" r="1.8" fill={GOLD} />
      </g>
      <g stroke={INK_SOFT} strokeWidth="1.2" strokeDasharray="2 2" opacity="0.6">
        <line x1="75" y1="40" x2="85" y2="28" />
        <line x1="85" y1="28" x2="78" y2="22" />
        <line x1="68" y1="30" x2="78" y2="22" />
      </g>
    </svg>
  )
}

export function CozyCat({ className = "" }: { className?: string }) {
  // Sumi-e inspired — loose, gestural ink strokes, intentionally imperfect.
  // A sitting cat seen from behind with its head turned, plus a red hanko seal.
  const SEAL = "#B03A2E"
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Single gestural back-and-tail stroke — the defining "brush" of the piece */}
      <path
        d="M58 166 C52 132 66 96 92 90 C116 86 128 96 134 112 C140 128 138 148 150 158 C162 166 170 154 164 138 C160 126 150 122 146 132"
        stroke={INK}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.92"
      />
      {/* Belly / underside — looser, thinner stroke that fades */}
      <path
        d="M70 164 C76 146 80 128 96 118"
        stroke={INK_SOFT}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.65"
      />
      {/* Ears — two quick slashes, not symmetrical */}
      <path
        d="M78 88 L72 66 L92 82"
        stroke={INK}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M108 82 L118 62 L124 86"
        stroke={INK}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Head — a soft wobble, not a perfect circle */}
      <path
        d="M76 96 C74 82 88 74 100 76 C114 78 124 86 124 98 C124 110 114 118 100 118 C86 118 78 110 76 96 Z"
        stroke={INK}
        strokeWidth="4.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Eyes — two closed crescents, slightly uneven */}
      <path d="M88 98 Q92 94 96 98" stroke={INK} strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M106 99 Q110 95 114 99" stroke={INK} strokeWidth="2.4" strokeLinecap="round" fill="none" />
      {/* Nose — a single dab */}
      <ellipse cx="101" cy="106" rx="2" ry="1.6" fill={INK} />
      {/* Whisker — one casual flick */}
      <path d="M82 108 Q72 110 66 108" stroke={INK_SOFT} strokeWidth="1.4" strokeLinecap="round" opacity="0.7" fill="none" />
      {/* Ink splatter dots — wabi-sabi imperfection */}
      <g fill={INK} opacity="0.55">
        <circle cx="50" cy="172" r="1.6" />
        <circle cx="44" cy="178" r="1" />
        <circle cx="175" cy="150" r="1.2" />
      </g>
      {/* Hanko seal — red square signature */}
      <g>
        <rect x="160" y="170" width="18" height="18" fill={SEAL} opacity="0.88" rx="1" />
        <path d="M164 179 L174 179 M169 174 L169 184" stroke="#F5F1EB" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export function StackOfBooks({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Bottom book — slightly tilted */}
        <g transform="rotate(-4 100 158)">
          <rect x="40" y="148" width="120" height="20" rx="2.5" />
          <line x1="40" y1="156" x2="160" y2="156" stroke={INK_SOFT} strokeWidth="1.3" opacity="0.75" />
          <line x1="52" y1="158" x2="52" y2="168" stroke={INK_SOFT} strokeWidth="1.3" opacity="0.65" />
        </g>
        {/* Middle book — opposite tilt */}
        <g transform="rotate(3 100 132)">
          <rect x="50" y="122" width="100" height="20" rx="2.5" />
          <line x1="50" y1="130" x2="150" y2="130" stroke={INK_SOFT} strokeWidth="1.3" opacity="0.75" />
          <line x1="62" y1="132" x2="62" y2="142" stroke={INK_SOFT} strokeWidth="1.3" opacity="0.65" />
        </g>
        {/* Top book — straight, with a little ribbon bookmark */}
        <rect x="58" y="96" width="84" height="22" rx="2.5" />
        <line x1="58" y1="105" x2="142" y2="105" stroke={INK_SOFT} strokeWidth="1.3" opacity="0.75" />
        {/* Bookmark ribbon draping down */}
        <path d="M128 96v24l-4-5-4 5V96" fill="none" />
      </g>
      {/* Title stripes / spine details */}
      <g stroke={INK_SOFT} strokeWidth="1.4" strokeLinecap="round" opacity="0.75">
        <line x1="72" y1="108" x2="110" y2="108" />
        <line x1="72" y1="113" x2="100" y2="113" />
      </g>
      {/* Star on top book (spine accent) */}
      <g fill={GOLD}>
        <circle cx="134" cy="108" r="1.8" />
      </g>
      {/* Sparkles around the stack */}
      <g stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" opacity="0.9">
        <path d="M36 72l2-5 2 5-5-2 5-2" />
        <path d="M166 58l1.5-4 1.5 4-4-1.5 4-1.5" />
      </g>
      <g opacity="0.85">
        <circle cx="50" cy="90" r="1.4" fill={GOLD} />
        <circle cx="160" cy="100" r="1.4" fill={GOLD} />
      </g>
    </svg>
  )
}

export function TeaAndBook({ className = "" }: { className?: string }) {
  // Looser, more painterly mug — wonky rim, wandering steam, imperfect edges.
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Steam — wandering, uneven curls */}
      <g stroke={INK_SOFT} strokeLinecap="round" fill="none" opacity="0.7">
        <path d="M44 50 C42 40 50 36 44 26 C40 18 46 14 44 8" strokeWidth="2" />
        <path d="M58 50 C62 40 54 34 62 24 C66 16 60 12 64 6" strokeWidth="2" opacity="0.8" />
        <path d="M72 50 C68 40 76 36 70 28" strokeWidth="1.8" opacity="0.6" />
      </g>
      {/* Mug body — hand-drawn, slightly tilted, edges not straight */}
      <path
        d="M34 54 C36 60 34 72 36 82 C37 90 42 96 52 97 C62 98 72 96 78 90 C82 86 82 74 82 66 C82 60 82 56 82 52"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Mug rim — wobbly ellipse */}
      <path
        d="M34 54 C40 48 72 48 82 52 C76 58 42 58 34 54 Z"
        stroke={INK}
        strokeWidth="2.6"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Handle — off-kilter loop */}
      <path
        d="M82 62 C94 62 96 70 94 76 C92 82 86 84 82 82"
        stroke={INK}
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* A loose brush stripe across the mug — decorative */}
      <path
        d="M38 72 C48 70 64 70 78 72"
        stroke={INK_SOFT}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
      {/* A small gold dot on the mug — tiny accent, not a literal heart */}
      <circle cx="58" cy="78" r="2.2" fill={GOLD} opacity="0.9" />
      {/* Open book under mug — loose, scribbly */}
      <g stroke={INK} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M12 104 C28 100 44 100 56 104" />
        <path d="M56 104 C72 100 90 100 106 104" />
        <path d="M56 104 L56 96" />
      </g>
      {/* Page squiggles — imperfect "text" lines */}
      <g stroke={INK_SOFT} strokeWidth="1.2" strokeLinecap="round" opacity="0.55" fill="none">
        <path d="M20 108 C26 107 34 107 40 108" />
        <path d="M22 112 C30 111 38 111 44 112" />
        <path d="M66 108 C74 107 84 107 92 108" />
        <path d="M68 112 C76 111 88 111 96 112" />
      </g>
      {/* Loose ink dots */}
      <g fill={INK} opacity="0.4">
        <circle cx="28" cy="96" r="0.9" />
        <circle cx="100" cy="98" r="1" />
      </g>
    </svg>
  )
}

export function GenreIcon({ genre, className = "", style }: { genre: string; className?: string; style?: React.CSSProperties }) {
  if (genre === "scifi") {
    return (
      <svg viewBox="0 0 48 48" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <circle cx="24" cy="24" r="10" />
          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(-30 24 24)" opacity="0.8" />
          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(30 24 24)" opacity="0.8" />
          <circle cx="24" cy="24" r="2.4" fill="currentColor" />
          <circle cx="15" cy="12" r="1.3" fill="currentColor" />
          <circle cx="36" cy="16" r="1.1" fill="currentColor" opacity="0.8" />
          <circle cx="10" cy="32" r="1.1" fill="currentColor" opacity="0.7" />
        </g>
      </svg>
    )
  }
  if (genre === "romance") {
    return (
      <svg viewBox="0 0 48 48" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 38s-12-8-15-15c-2-5 0-10 5-12s9 1 10 4c1-3 5-6 10-4s7 7 5 12c-3 7-15 15-15 15z" />
          <path d="M20 22c-1 3 0 6 4 9" opacity="0.75" />
        </g>
      </svg>
    )
  }
  // classics — open book with a feather-quill hint
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 14c6-3 12-3 16 0v24c-4-3-10-3-16 0V14z" />
        <path d="M40 14c-6-3-12-3-16 0v24c4-3 10-3 16 0V14z" />
        <line x1="24" y1="14" x2="24" y2="38" opacity="0.7" />
        <path d="M30 10l4-3 1 2-3 4" opacity="0.85" />
        <path d="M32 12l-6 7" opacity="0.7" />
      </g>
    </svg>
  )
}
