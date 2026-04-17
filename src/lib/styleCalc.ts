import { StyleVector, Book } from "./types"

const DIMENSIONS: (keyof StyleVector)[] = [
  "humor", "emotionalDepth", "proseComplexity", "dialogueForwardness",
  "pace", "descriptiveness", "introspection", "lyricism", "darkness"
]

/**
 * Per-dimension match score, 0–100.
 *
 * Each style dimension is scored on its own 0–100 scale based on how close
 * the anchor and candidate sit on that axis:
 *
 *   diff 0.00 → 100   (identical on this axis)
 *   diff 0.10 →  80
 *   diff 0.25 →  50
 *   diff 0.50 →   0   (half the scale apart — the axis doesn't match)
 *   diff >0.5 →   0   (clamped)
 *
 * The 2x penalty and the hard 0 floor are intentional. They stop a single
 * dimension from silently "voting yes" just because both books happen to
 * sit on the same half of an axis.
 */
export function dimensionScore(a: number, b: number): number {
  const diff = Math.abs(a - b)
  return Math.max(0, Math.round(100 * (1 - 2 * diff)))
}

/**
 * Cosine similarity — kept for diagnostic / methodology purposes only.
 *
 * Note: with all-positive style vectors, cosine similarity systematically
 * reports 0.85–0.99 for almost any pair of books in the same genre, which
 * looks confident but isn't informative. That's why the user-facing
 * `matchScore` below does not use this function.
 */
export function cosineSimilarity(a: StyleVector, b: StyleVector): number {
  let dot = 0, magA = 0, magB = 0
  for (const dim of DIMENSIONS) {
    dot += a[dim] * b[dim]
    magA += a[dim] * a[dim]
    magB += b[dim] * b[dim]
  }
  if (magA === 0 || magB === 0) return 0
  return dot / (Math.sqrt(magA) * Math.sqrt(magB))
}

/**
 * Overall match score, 0–100: the mean of the 9 per-dimension scores.
 *
 * Because every dimension is independently capped (a 0.5+ gap contributes
 * a 0), no book can average above ~95 unless it really is near-identical
 * across all 9 axes. The headline number is a straight arithmetic mean
 * of per-category scores, which means the UI and the underlying math
 * agree: "each category worth 100, overall is the average."
 */
export function matchScore(a: StyleVector, b: StyleVector): number {
  let sum = 0
  for (const dim of DIMENSIONS) {
    sum += dimensionScore(a[dim], b[dim])
  }
  return Math.round(sum / DIMENSIONS.length)
}

/**
 * Every dimension's score in one call — handy for detail views.
 */
export function allDimensionScores(
  anchor: StyleVector,
  compare: StyleVector
): { dimension: keyof StyleVector; anchorVal: number; compareVal: number; diff: number; score: number }[] {
  return DIMENSIONS.map(dim => ({
    dimension: dim,
    anchorVal: anchor[dim],
    compareVal: compare[dim],
    diff: Math.abs(anchor[dim] - compare[dim]),
    score: dimensionScore(anchor[dim], compare[dim]),
  }))
}

export function getTopDimensionMatches(
  anchor: StyleVector,
  compare: StyleVector,
  count: number = 3
): { dimension: keyof StyleVector; anchorVal: number; compareVal: number; diff: number; score: number }[] {
  return allDimensionScores(anchor, compare)
    .sort((a, b) => a.diff - b.diff)
    .slice(0, count)
}

export function rankMatches(anchor: Book, books: Book[]): (Book & { score: number })[] {
  return books
    .filter(b => !b.isAnchor && b.genre === anchor.genre)
    .map(book => ({
      ...book,
      score: matchScore(anchor.styleVector, book.styleVector),
    }))
    .sort((a, b) => b.score - a.score)
}

export function toRadarData(vector: StyleVector) {
  return DIMENSIONS.map(dim => ({
    dimension: dim,
    label: dim.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase()),
    value: vector[dim],
  }))
}
