import { Link } from 'react-router-dom'
import { company, footerGroups } from '@/content/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="on-dark bg-ink text-ivory">
      <div className="container-page grid gap-14 py-16 md:grid-cols-[1.4fr_repeat(4,1fr)] md:py-20">
        <div className="max-w-sm">
          <Logo inverted />
          <p className="mt-6 font-display text-2xl leading-snug tracking-tight text-ivory">
            {company.mission}
          </p>
        </div>
        {footerGroups.map((g) => (
          <nav key={g.label} aria-label={g.label}>
            <p className="t-label mb-4 text-[#ff9a55]">{g.label}</p>
            <ul className="space-y-2.5">
              {g.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-[0.95rem] text-ivory/85 underline-offset-4 hover:text-white hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line-dark">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-ivory/70 sm:flex-row sm:justify-between">
          <p>
            © {company.year} {company.legalName}. All rights reserved.
          </p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
