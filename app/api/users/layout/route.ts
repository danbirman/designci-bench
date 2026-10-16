import { getServerSession } from "next-auth/next"
import * as z from "zod"

import { authOptions } from "@/lib/auth"
import { LAYOUT_COOKIE, layoutSchema } from "@/lib/layout-preferences"

export async function PATCH(req: Request) {
  try {
    // Ensure the user is authenticated.
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return new Response(null, { status: 403 })
    }

    // Get the request body and validate it.
    const body = await req.json()
    const preferences = layoutSchema.parse(body)

    // Store the preferences for this browser; the dashboard layout applies them.
    return new Response(null, {
      status: 200,
      headers: {
        "Set-Cookie": `${LAYOUT_COOKIE}=${encodeURIComponent(
          JSON.stringify(preferences)
        )}; Path=/; HttpOnly; SameSite=Lax`,
      },
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
