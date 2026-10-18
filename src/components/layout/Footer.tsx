import { Link } from 'react-router-dom'
import { company, contact, footerGroups } from '@/content/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="on-dark border-t border-line-dark bg-ink-deep text-ivory">
      <div className="container-page grid grid-cols-2 gap-x-5 gap-y-8 py-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-12 md:py-16">
        <div className="col-span-2 max-w-sm md:col-span-1">
          <Logo inverted />
          <p className="mt-5 text-base leading-relaxed text-ivory">{company.mission}</p>
          <ul className="mt-6 space-y-1.5 text-[0.95rem]">
            <li>
              <a href={contact.emailHref} className="text-ivory underline-offset-4 hover:underline">
                {contact.email}
              </a>
            </li>
            <li>
              <a href={contact.phoneHref} className="text-ivory underline-offset-4 hover:underline">
                {contact.phone}
              </a>
            </li>
          </ul>
        </div>
        {footerGroups.map((g) => (
          <nav key={g.label} aria-label={g.label}>
            <p className="t-label mb-4 text-[#ff9a55]">{g.label}</p>
            <ul className="space-y-0">
              {g.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="inline-flex min-h-11 items-center text-[0.95rem] text-ivory/85 underline-offset-4 hover:text-white hover:underline"
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
