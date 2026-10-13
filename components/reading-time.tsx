"use client"

import * as React from "react"

interface ReadingTimeProps {
  content: string
}

export function ReadingTime({ content }: ReadingTimeProps) {
  const minutes = React.useMemo(() => {
    const words = content.trim().split(/\s+/).length
    return Math.max(1, Math.round(words / 200))
  }, [content])

  return <span>{minutes} min read</span>
}
