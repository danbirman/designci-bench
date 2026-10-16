"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"
import { layoutSchema } from "@/lib/layout-preferences"

type FormData = z.infer<typeof layoutSchema>

interface LayoutSettingsProps {
  compact?: boolean
  sidebar?: boolean
}

export function LayoutSettings({
  compact = false,
  sidebar = true,
}: LayoutSettingsProps) {
  const router = useRouter()
  const { handleSubmit, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(layoutSchema),
    defaultValues: { compact, sidebar },
  })
  const values = watch()
  const [isSaving, setIsSaving] = React.useState<boolean>(false)

  async function onSubmit(data: FormData) {
    setIsSaving(true)

    const response = await fetch("/api/users/layout", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    setIsSaving(false)

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your layout preferences were not saved. Please try again.",
        variant: "destructive",
      })
    }

    toast({
      description: "Your layout preferences have been saved.",
    })

    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader>
          <CardTitle>Dashboard layout</CardTitle>
          <CardDescription>Choose how the dashboard is laid out on this device.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="compact">Compact spacing</Label>
            <Switch
              id="compact"
              checked={values.compact}
              onCheckedChange={(checked) =>
                setValue("compact", checked, { shouldDirty: true })
              }
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="sidebar">Show sidebar navigation</Label>
            <Switch
              id="sidebar"
              checked={values.sidebar}
              onCheckedChange={(checked) =>
                setValue("sidebar", checked, { shouldDirty: true })
              }
            />
          </div>
          <div role="tablist" className="mt-2 flex gap-1 rounded-md bg-muted p-1">
            {["Comfortable", "Compact"].map((tab) => (
              <button
                key={tab}
                role="tab"
                type="button"
                onClick={() =>
                  setValue("compact", tab === "Compact", { shouldDirty: true })
                }
                className={`rounded-sm px-3 py-1.5 text-sm font-medium ${
                  (tab === "Compact") === values.compact
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-4">
          <Button type="submit" disabled={isSaving}>
            {isSaving && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Save preferences
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
