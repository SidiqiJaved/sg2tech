import { Button } from '@/components/ui/Button'

export function NotFoundPage() {
  return (
    <section className="py-28 sm:py-40">
      <div className="container-page">
        <p className="t-label mb-6 text-copper-deep">404</p>
        <h1 className="t-h1 max-w-3xl">That page isn’t here.</h1>
        <p className="t-lead mt-6 max-w-xl">It may have moved, or the link may be mistyped.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/">Back to home</Button>
          <Button to="/contact" variant="secondary">
            Contact SG2
          </Button>
        </div>
      </div>
    </section>
  )
}
