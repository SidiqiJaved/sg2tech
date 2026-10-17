import { useEffect, useRef, useState } from 'react'
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { demoCta, navGroups, topLevelLinks } from '@/content/site'
import { cn } from '@/lib/cn'
import { Logo } from './Logo'

function DesktopGroup({ group }: { group: (typeof navGroups)[number] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const panelId = `nav-${group.label.toLowerCase()}`
  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 rounded px-3 py-2 text-[0.95rem] font-medium text-ink hover:text-copper-deep"
      >
        {group.label}
        <ChevronDown
          aria-hidden
          size={15}
          className={cn('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>
      <div id={panelId} hidden={!open} className="absolute left-0 top-full z-50 w-80 pt-2">
        <ul className="border border-line bg-paper p-2 shadow-[0_18px_40px_-20px_rgba(27,40,41,0.35)]">
          {group.links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="block rounded px-3 py-3 hover:bg-ivory">
                <span className="block font-medium text-ink">{l.label}</span>
                {l.description && <span className="t-caption block">{l.description}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, search } = useLocation()
  const menuBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => setMobileOpen(false), [pathname, search])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        menuBtn.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 bg-ivory transition-[border-color] duration-300',
        scrolled || mobileOpen ? 'border-b border-line' : 'border-b border-transparent',
      )}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navGroups.map((g) => (
            <DesktopGroup key={g.label} group={g} />
          ))}
          {topLevelLinks.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  'rounded px-3 py-2 text-[0.95rem] font-medium hover:text-copper-deep',
                  isActive ? 'text-copper-deep' : 'text-ink',
                )
              }
            >
              {l.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to={demoCta.to}
            className="hidden rounded-full bg-ink px-5 py-2.5 text-[0.9rem] font-medium text-ivory transition-colors hover:bg-copper-deep sm:inline-block"
          >
            {demoCta.label}
          </Link>
          <button
            ref={menuBtn}
            type="button"
            className="-mr-2 rounded p-2 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileOpen ? <X aria-hidden size={26} /> : <Menu aria-hidden size={26} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!mobileOpen}
        className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-ivory lg:hidden"
      >
        <div className="container-page py-8">
          {navGroups.map((g) => (
            <div key={g.label} className="border-b border-line py-5">
              <p className="t-label mb-3 text-copper-deep">{g.label}</p>
              <ul className="space-y-1">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="block py-2 font-display text-2xl tracking-tight">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="border-b border-line py-5">
            {topLevelLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block py-2 font-display text-2xl tracking-tight"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            to={demoCta.to}
            className="mt-8 block rounded-full bg-ink px-6 py-4 text-center font-medium text-ivory"
          >
            {demoCta.label}
          </Link>
        </div>
      </nav>
    </header>
  )
}
