import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

/** Official SG2 logo. The artwork has dark letters, so the inverted variant sits on an ivory chip. */
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
    </Link>
  )
}
