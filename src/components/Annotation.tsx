"use client"
import React from "react"

interface AnnotationProps {
  text: string
  /** Optional "At scale:" pivot line — describes how this part of the demo generalises in production */
  scale?: string
  /** Which side of the parent container the annotation sits on */
  side: "left" | "right"
  /** Vertical anchor relative to the parent */
  anchor?: "top" | "middle" | "bottom"
  /** Pick one of three slightly different squiggle paths so multiple annotations don't look identical */
  variant?: 1 | 2 | 3
  /** Optional vertical offset (px) for fine-tuning */
  offsetY?: number
  /** Optional reading-order number rendered as a hand-drawn circled icon above the text */
  number?: number
}

// Three slightly wobbly hand-drawn circle paths for the numbered badge — rotated via
// the `variant` to keep multiple badges from looking stamped-out identical.
// Drawn in a 44x44 viewBox, centred on (22, 22).
const CIRCLE_PATHS = [
  "M 22 3 C 32 3, 41 10, 41 22 C 41 33, 33 41, 22 41 C 11 41, 3 33, 3 22 C 3 11, 12 3, 22 3 Z",
  "M 22 4 C 33 4, 40 12, 40 22 C 40 33, 32 40, 21 40 C 11 40, 4 32, 4 21 C 4 11, 12 4, 22 4 Z",
  "M 21 3 C 32 3, 40 11, 41 22 C 41 32, 33 41, 22 41 C 11 41, 4 33, 3 22 C 3 11, 11 4, 21 3 Z",
]

// Three hand-drawn squiggle paths that visually connect the label to the target.
// All paths drawn in a 220x60 viewBox. Arrowheads have been removed; the lines
// alone are used to gesture toward the card.
const ARROW_PATHS = {
  // Right-side annotations: line runs from the label side (right) toward the card (left)
  right: {
    1: "M 215 12 C 170 8, 130 38, 85 22 S 25 18, 12 30",
    2: "M 215 8 C 165 30, 120 6, 70 36 S 22 42, 12 28",
    3: "M 215 18 C 175 12, 135 32, 90 14 S 35 30, 12 24",
  },
  // Left-side annotations: line runs from the label side (left) toward the card (right)
  left: {
    1: "M 5 12 C 50 8, 90 38, 135 22 S 195 18, 208 30",
    2: "M 5 8 C 55 30, 100 6, 150 36 S 198 42, 208 28",
    3: "M 5 18 C 45 12, 85 32, 130 14 S 185 30, 208 24",
  },
}

export default function Annotation({
  text,
  scale,
  side,
  anchor = "middle",
  variant = 1,
  offsetY = 0,
  number,
}: AnnotationProps) {
  const verticalClass =
    anchor === "top"
      ? "top-2"
      : anchor === "bottom"
      ? "bottom-2"
      : "top-1/2 -translate-y-1/2"

  // Sit fully outside the card. xl breakpoint so we don't crowd the layout on smaller screens.
  // Tight ml/mr at xl so the annotation can extend further toward the viewport edge.
  const sideClass =
    side === "right"
      ? "left-full ml-3 xl:ml-3"
      : "right-full mr-3 xl:mr-3"

  // Text alignment: text "leans toward" the card
  const textAlign = side === "right" ? "text-left" : "text-right"

  return (
    <div
      className={`pointer-events-none absolute hidden xl:flex flex-col z-20 w-[260px] ${verticalClass} ${sideClass}`}
      style={{ transform: anchor === "middle" ? `translateY(calc(-50% + ${offsetY}px))` : `translateY(${offsetY}px)` }}
    >
      {typeof number === "number" && (
        <div className={`mb-2 flex ${side === "right" ? "justify-start" : "justify-end"}`}>
          <div className="relative w-11 h-11">
            <svg
              viewBox="0 0 44 44"
              className="absolute inset-0 w-full h-full overflow-visible"
              aria-hidden
            >
              <path
                d={CIRCLE_PATHS[(variant - 1) % CIRCLE_PATHS.length]}
                stroke="#1A1A1A"
                strokeWidth="1.6"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <span
              className="absolute inset-0 flex items-center justify-center text-[#3A3632] text-[22px] leading-none"
              style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
            >
              {number}
            </span>
          </div>
        </div>
      )}
      <p
        className={`text-[#3A3632] text-[20px] leading-snug mb-5 ${textAlign}`}
        style={{ fontFamily: "'Caveat', cursive", fontWeight: 500 }}
      >
        {text}
      </p>
      {scale && (
        <p
          className={`text-[#8A6E5C] text-[17px] leading-snug mb-2 ${textAlign}`}
          style={{ fontFamily: "'Caveat', cursive", fontWeight: 500 }}
        >
          <span className="font-semibold">At scale →</span> {scale}
        </p>
      )}
      <svg
        height="50"
        viewBox="0 0 220 50"
        preserveAspectRatio="none"
        fill="none"
        className="w-full overflow-visible"
        aria-hidden
      >
        <path
          d={ARROW_PATHS[side][variant]}
          stroke="#1A1A1A"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}
