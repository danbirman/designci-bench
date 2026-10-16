import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { readLayoutPreferences } from "@/lib/layout-preferences"
import { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/header"
import { LayoutSettings } from "@/components/layout-settings"
import { DashboardShell } from "@/components/shell"
import { UserNameForm } from "@/components/user-name-form"

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
}

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const layout = readLayoutPreferences()

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <UserNameForm user={{ id: user.id, name: user.name || "" }} />
        <LayoutSettings compact={layout.compact} sidebar={layout.sidebar} />
      </div>
    </DashboardShell>
  )
}
