import { useEffect } from 'react'
import { metaFor } from '@/content/routes'

/** Keeps <title> and description in sync on client-side navigation.
 *  Initial HTML already carries the right tags (injected at prerender time). */
export function usePageMeta(pathname: string) {
  useEffect(() => {
    const meta = metaFor(pathname)
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  }, [pathname])
}
