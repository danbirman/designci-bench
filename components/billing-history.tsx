import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

export function BillingHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing History</CardTitle>
        <CardDescription>Invoices for your past payments.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-dashed py-10 text-center">
          <Icons.billing className="h-8 w-8 text-gray-400" />
          <p className="text-sm font-medium">No invoices yet</p>
          <p className="text-sm text-gray-500">
            Invoices will show up here after your first payment.
          </p>
          <Link
            href="/pricing"
            className="text-sm font-medium underline-offset-4 outline-none hover:underline"
          >
            Compare plans
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
