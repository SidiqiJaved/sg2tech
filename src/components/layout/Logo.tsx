import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

/** Official SG2 logo with a quiet "Technologies" wordmark. The artwork has dark letters, so the inverted variant sits on an ivory chip. */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" aria-label="SG2 Technologies, home" className="inline-flex items-center">
      <img
        src="/logo.png"
        alt="SG2"
        width={600}
        height={218}
        className={cn('w-auto', inverted ? 'h-12 rounded bg-ivory px-3 py-1.5' : 'h-11')}
      />
      <span
        aria-hidden
        className={cn(
          't-label ml-3 hidden border-l pl-3 text-[0.62rem] leading-none tracking-[0.22em] min-[400px]:inline',
          inverted ? 'border-ivory/30 text-ivory/80' : 'border-line text-ink-soft',
        )}
      >
        Technologies
      </span>
    </Link>
  )
}
