import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Welcome to Marble Health
        </h1>
        <Button asChild size="lg">
          <Link href="/onboarding">Get started</Link>
        </Button>
      </div>
    </main>
  )
}
