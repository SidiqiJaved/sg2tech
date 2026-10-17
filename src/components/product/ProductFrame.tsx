import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface Props {
  /** Window title, e.g. "Revenue overview". */
  title: string
  /** Real screenshot. When provided it replaces the illustrative children, same frame and layout. */
  screenshot?: { src: string; alt: string; width: number; height: number }
  /** Shown as a visible label whenever illustrative content is displayed. */
  illustrative?: boolean
  dark?: boolean
  className?: string
  children?: ReactNode
}

/**
 * Browser-style frame for product visuals. Swap `children` for `screenshot`
 * once approved screenshots exist; no surrounding layout needs to change.
 */
export function ProductFrame({
  title,
  screenshot,
  illustrative = true,
  dark,
  className,
  children,
}: Props) {
  const showLabel = !screenshot && illustrative
  return (
    <figure
      className={cn(
        'overflow-hidden rounded-lg border shadow-[0_30px_60px_-30px_rgba(27,40,41,0.45)]',
        dark ? 'border-line-dark bg-[#17191c]' : 'light-surface border-line bg-paper',
        className,
      )}
    >
      <div
        className={cn(
          'flex items-center gap-3 border-b px-4 py-2.5',
          dark ? 'border-line-dark bg-[#1f2227]' : 'border-line bg-ivory',
        )}
      >
        <span aria-hidden className="flex gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <i className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <i className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        </span>
        <span className="t-label truncate text-[0.68rem] text-ink-mute">{title}</span>
        {showLabel && (
          <span className="t-label ml-auto shrink-0 rounded-full border border-dashed border-ink-mute/60 px-2 py-0.5 text-[0.62rem] text-ink-soft">
            Illustrative data
          </span>
        )}
      </div>
      {screenshot ? (
        <img
          src={screenshot.src}
          alt={screenshot.alt}
          width={screenshot.width}
          height={screenshot.height}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
      ) : (
        <div className="p-4 sm:p-6">{children}</div>
      )}
    </figure>
  )
}
