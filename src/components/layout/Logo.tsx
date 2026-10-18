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
        className={cn('w-auto', inverted ? 'h-12 rounded bg-ivory px-3 py-1.5' : 'h-9 sm:h-11')}
      />
      <span
        aria-hidden
        className={cn(
          't-label ml-2.5 text-[0.625rem] font-medium leading-none tracking-[0.2em] sm:ml-3 sm:text-[0.75rem]',
          inverted ? 'text-ivory/85' : 'text-ink-soft',
        )}
      >
        Technologies
      </span>
    </Link>
  )
}
