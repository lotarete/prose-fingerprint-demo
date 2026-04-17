export interface StyleVector {
  humor: number
  emotionalDepth: number
  proseComplexity: number
  dialogueForwardness: number
  pace: number
  descriptiveness: number
  introspection: number
  lyricism: number
  darkness: number
}

export interface Book {
  id: string
  title: string
  author: string
  genre: "scifi" | "romance" | "classics"
  isAnchor: boolean
  coverColor: string
  styleVector: StyleVector
  fingerprint: string
  whyMatch: string
}

export type StyleDimension = keyof StyleVector

export const DIMENSION_LABELS: Record<StyleDimension, string> = {
  humor: "Humor",
  emotionalDepth: "Emotional Depth",
  proseComplexity: "Prose Complexity",
  dialogueForwardness: "Dialogue Forward",
  pace: "Pace",
  descriptiveness: "Descriptiveness",
  introspection: "Introspection",
  lyricism: "Lyricism",
  darkness: "Darkness",
}

export const DIMENSION_DESCRIPTIONS: Record<StyleDimension, [string, string]> = {
  humor: ["Serious", "Comedic"],
  emotionalDepth: ["Light", "Devastating"],
  proseComplexity: ["Simple", "Literary"],
  dialogueForwardness: ["Descriptive", "Dialogue-driven"],
  pace: ["Meditative", "Propulsive"],
  descriptiveness: ["Spare", "Richly detailed"],
  introspection: ["External", "Internal"],
  lyricism: ["Functional", "Poetic"],
  darkness: ["Hopeful", "Dark"],
}

export const GENRE_META: Record<string, { label: string; description: string; icon: string }> = {
  scifi: {
    label: "Science Fiction",
    description: "Start with Iain M. Banks",
    icon: "telescope",
  },
  classics: {
    label: "Classics",
    description: "Start with The Master and Margarita",
    icon: "book-open",
  },
  romance: {
    label: "Romance",
    description: "Start with The Night We Met",
    icon: "heart",
  },
}
