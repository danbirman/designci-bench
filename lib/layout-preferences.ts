import { cookies } from "next/headers"
import * as z from "zod"

export const LAYOUT_COOKIE = "layout-preferences"

export const layoutSchema = z.object({
  compact: z.boolean(),
  sidebar: z.boolean(),
})

export type LayoutPreferences = z.infer<typeof layoutSchema>

/** The layout preferences stored for this browser, or none. Server components only. */
export function readLayoutPreferences(): Partial<LayoutPreferences> {
  const raw = cookies().get(LAYOUT_COOKIE)?.value
  if (!raw) {
    return {}
  }
  try {
    return layoutSchema.partial().parse(JSON.parse(decodeURIComponent(raw)))
  } catch {
    return {}
  }
}
