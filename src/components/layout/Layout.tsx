import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Footer } from './Footer'
import { Header } from './Header'

/** Scroll to top (or to a hash target) on navigation, and move focus to main. */
function useRouteEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
}

export function Layout() {
  const { pathname } = useLocation()
  usePageMeta(pathname)
  useRouteEffects()
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
