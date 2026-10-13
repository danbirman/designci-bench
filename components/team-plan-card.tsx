import Link from "next/link"

import { Icons } from "@/components/icons"

const features = [
  "Everything in PRO",
  "Up to 10 members",
  "Shared drafts",
  "Roles and permissions",
]

export function TeamPlanCard() {
  return (
    <div className="mx-auto flex w-[480px] flex-col gap-6 rounded-lg border p-10">
      <div className="grid gap-2">
        <h3 className="text-xl font-bold sm:text-2xl">Team</h3>
        <p className="text-[15px] leading-normal text-muted-foreground">
          For small teams publishing together. Billed per workspace.
        </p>
      </div>
      <ul className="grid gap-3 text-sm text-muted-foreground">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Icons.check className="mr-2 h-4 w-4" /> {feature}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-4xl font-bold">$49</h4>
        <Link
          href="/login"
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Start with Team
        </Link>
      </div>
    </div>
  )
}
