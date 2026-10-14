"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface UsageStatsProps {
  postCount: number
  publishedCount: number
}

export function UsageStats({ postCount, publishedCount }: UsageStatsProps) {
  const stats = [
    { label: "Total posts", value: postCount },
    { label: "Published", value: publishedCount },
    { label: "Drafts", value: postCount - publishedCount },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardHeader className="p-[13px] pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground/50">
              {stat.label}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-[13px] pt-0">
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
