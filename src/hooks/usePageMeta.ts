import { useEffect } from 'react'
import { metaFor } from '@/content/routes'
import { SITE_URL } from '@/content/site'

/** Keeps <title> and description in sync on client-side navigation.
 *  Initial HTML already carries the right tags (injected at prerender time). */
export function usePageMeta(pathname: string) {
  useEffect(() => {
    const meta = metaFor(pathname)
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    const setMeta = (attribute: 'name' | 'property', key: string, value: string) => {
      const selector = `meta[${attribute}="${key}"]`
      let element = document.head.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.append(element)
      }
      element.setAttribute('content', value)
    }
    const noindex = !meta.indexable || import.meta.env.VITE_NOINDEX === 'true'
    if (noindex) setMeta('name', 'robots', 'noindex')
    else document.head.querySelector('meta[name="robots"]')?.remove()
    const url = SITE_URL + (meta.path === '/' ? '/' : meta.path)
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (meta.path === '/404') {
      canonical?.remove()
      document.head.querySelector('meta[property="og:url"]')?.remove()
    } else {
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.append(canonical)
      }
      canonical.href = url
      setMeta('property', 'og:url', url)
    }
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
  }, [pathname])
}
