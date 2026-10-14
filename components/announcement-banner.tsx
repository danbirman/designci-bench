"use client"

import * as React from "react"
import Link from "next/link"

import { Icons } from "@/components/icons"

export function AnnouncementBanner() {
  const [isOpen, setIsOpen] = React.useState<boolean>(true)

  if (!isOpen) {
    return null
  }

  return (
    <div className="bg-[#1a1a1a] text-white">
      <div className="container flex h-10 items-center justify-between gap-4 text-sm">
        <p className="truncate">
          Team workspaces are now available on the PRO plan.{" "}
          <Link
            href="/pricing"
            className="font-medium underline underline-offset-4"
          >
            See pricing
          </Link>
        </p>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="rounded-md p-1 outline-none transition-colors hover:bg-white/10"
        >
          <Icons.close className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
