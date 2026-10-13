"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

const preferences = [
  {
    id: "comments",
    label: "Comments",
    description: "When someone comments on one of your posts.",
  },
  {
    id: "mentions",
    label: "Mentions",
    description: "When someone mentions you in a post or a comment.",
  },
  {
    id: "digest",
    label: "Weekly digest",
    description: "A summary of activity across your posts.",
  },
]

export function NotificationSettings() {
  const [enabled, setEnabled] = React.useState<Record<string, boolean>>({
    comments: true,
    mentions: true,
    digest: false,
  })
  const [showHelp, setShowHelp] = React.useState<boolean>(false)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle>Email Notifications</CardTitle>
          <button
            type="button"
            onClick={() => setShowHelp(!showHelp)}
            className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Icons.help className="h-4 w-4" />
          </button>
        </div>
        <CardDescription>
          Choose which emails you want to receive.
        </CardDescription>
        {showHelp && (
          <p className="text-sm text-muted-foreground">
            Security and billing emails are always sent.
          </p>
        )}
      </CardHeader>
      <CardContent className="grid gap-6">
        {preferences.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="grid gap-1">
              <Label htmlFor={item.id}>{item.label}</Label>
              <p className="text-[13px] text-muted-foreground">
                {item.description}
              </p>
            </div>
            <button
              id={item.id}
              type="button"
              role="switch"
              aria-checked={enabled[item.id]}
              onClick={() =>
                setEnabled({ ...enabled, [item.id]: !enabled[item.id] })
              }
              className={cn(
                "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                enabled[item.id] ? "bg-primary" : "bg-input"
              )}
            >
              <span
                className={cn(
                  "inline-block h-5 w-5 rounded-full bg-background shadow-lg transition-transform",
                  enabled[item.id] ? "translate-x-5" : "translate-x-0.5"
                )}
              />
            </button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
