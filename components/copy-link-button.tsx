"use client"

import * as React from "react"
import { Check, Link2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function CopyLinkButton() {
  const [hasCopied, setHasCopied] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (!hasCopied) {
      return
    }

    const timeout = setTimeout(() => setHasCopied(false), 2000)
    return () => clearTimeout(timeout)
  }, [hasCopied])

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(window.location.href)
        setHasCopied(true)
      }}
      className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "px-2")}
    >
      {hasCopied ? (
        <Check className="h-4 w-4" />
      ) : (
        <Link2 className="h-4 w-4" />
      )}
    </button>
  )
}
