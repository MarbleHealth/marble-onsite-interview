export default function OnboardingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="max-w-2xl rounded-lg border-2 border-dashed border-muted-foreground/40 bg-muted/30 p-10 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          TODO — build me
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight">
          The intake product lives here.
        </h1>
        <p className="text-base text-muted-foreground">
          This is your starting point. Build the intake &amp; matching
          experience on this route (and any others you create). See the{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">README</code>{" "}
          for more info.
        </p>
      </div>
    </main>
  )
}
