"use client"
import React from "react"
import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts"
import { StyleVector, DIMENSION_LABELS, StyleDimension } from "@/lib/types"

interface Props {
  anchor: StyleVector
  compare?: StyleVector
  size?: number
}

const DIMENSIONS: StyleDimension[] = [
  "humor", "emotionalDepth", "proseComplexity", "dialogueForwardness",
  "pace", "descriptiveness", "introspection", "lyricism", "darkness"
]

export default function StyleRadarChart({ anchor, compare, size = 300 }: Props) {
  const data = DIMENSIONS.map(dim => ({
    dimension: DIMENSION_LABELS[dim],
    anchor: Math.round(anchor[dim] * 100),
    ...(compare ? { compare: Math.round(compare[dim] * 100) } : {}),
  }))

  return (
    <ResponsiveContainer width="100%" height={size}>
      <RechartsRadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
        <PolarGrid stroke="#E8E4DE" strokeWidth={1} />
        <PolarAngleAxis
          dataKey="dimension"
          tick={{ fill: "#8A8580", fontSize: 11, fontFamily: "Inter" }}
          tickLine={false}
        />
        <Radar
          name="Anchor"
          dataKey="anchor"
          stroke="#C5A24D"
          fill="#C5A24D"
          fillOpacity={0.2}
          strokeWidth={2}
        />
        {compare && (
          <Radar
            name="Compare"
            dataKey="compare"
            stroke="#5CC8B8"
            fill="#5CC8B8"
            fillOpacity={0.15}
            strokeWidth={2}
          />
        )}
      </RechartsRadarChart>
    </ResponsiveContainer>
  )
}
