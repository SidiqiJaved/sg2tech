import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CircleAlert, CircleCheck } from 'lucide-react'
import { PageIntro } from '@/components/ui/Blocks'
import { cn } from '@/lib/cn'
import { contact } from '@/content/site'

type Inquiry = 'demo' | 'custom'
type Status = 'idle' | 'sending' | 'sent' | 'error' | 'not-configured'
type Errors = Partial<Record<'name' | 'email' | 'company' | 'message', string>>

/**
 * Delivery is Netlify Forms (the static form below is detected at deploy time).
 * It is only treated as live when VITE_FORMS_ENABLED === 'true', so a local or
 * unconfigured build can never report a false success. See README.
 */
const FORMS_ENABLED = import.meta.env?.VITE_FORMS_ENABLED === 'true'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(d: FormData): Errors {
  const e: Errors = {}
  const name = String(d.get('name') ?? '').trim()
  const email = String(d.get('email') ?? '').trim()
  const company = String(d.get('company') ?? '').trim()
  const message = String(d.get('message') ?? '').trim()
  if (name.length < 2) e.name = 'Enter your full name.'
  if (!emailRe.test(email)) e.email = 'Enter a valid work email address.'
  if (company.length < 2) e.company = 'Enter your company name.'
  if (message.length < 20)
    e.message = 'Please describe your needs in at least a sentence or two (20+ characters).'
  if (message.length > 3000) e.message = 'Please keep the description under 3,000 characters.'
  return e
}

const encode = (d: FormData) =>
  new URLSearchParams(Array.from(d.entries()).map(([k, v]) => [k, String(v)])).toString()

const inputCls =
  'mt-2 block w-full rounded-none border border-ink/40 bg-paper px-4 py-3.5 text-base text-ink placeholder:text-ink-mute/70 focus:border-ink aria-[invalid=true]:border-[#a8321b]'

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string
  label: string
  error?: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="t-caption">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-start gap-1.5 text-sm text-[#a8321b]">
          <CircleAlert aria-hidden size={16} className="mt-0.5 shrink-0" /> {error}
        </p>
      )}
    </div>
  )
}

export function ContactPage() {
  const [params] = useSearchParams()
  const [inquiry, setInquiry] = useState<Inquiry>('demo')
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const formRef = useRef<HTMLFormElement>(null)
  const summaryRef = useRef<HTMLDivElement>(null)

  // Read the query after hydration so server and client markup match.
  useEffect(() => {
    const q = params.get('inquiry')
    if (q === 'demo' || q === 'custom') setInquiry(q)
  }, [params])

  useEffect(() => {
    if (status === 'sent' || status === 'error' || status === 'not-configured')
      summaryRef.current?.focus()
  }, [status])

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const data = new FormData(ev.currentTarget)
    const found = validate(data)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }
    // Spam: only bots fill the hidden honeypot field. Drop silently.
    if (data.get('bot-field')) {
      setStatus('sent')
      return
    }
    if (!FORMS_ENABLED) {
      setStatus('not-configured')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      formRef.current?.reset()
    } catch {
      setStatus('error')
    }
  }

  const errCount = Object.keys(errors).length
  const desc = (id: keyof Errors) => (errors[id] ? `${id}-error` : undefined)

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Book a demo or start a conversation."
        lead="Tell us a little about your business and what you are trying to solve. A person will read it and reply."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-20">
          <aside className="lg:col-span-4">
            <h2 className="t-label mb-6 text-copper-deep">Reach us directly</h2>
            <ul className="mb-12 space-y-3">
              <li>
                <span className="t-label block text-ink-mute">Email</span>
                <a
                  href={contact.emailHref}
                  className="font-display text-2xl tracking-tight underline decoration-copper/50 underline-offset-4 hover:decoration-copper-deep"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <span className="t-label block text-ink-mute">Phone</span>
                <a
                  href={contact.phoneHref}
                  className="font-display text-2xl tracking-tight underline decoration-copper/50 underline-offset-4 hover:decoration-copper-deep"
                >
                  {contact.phone}
                </a>
              </li>
            </ul>
            <h2 className="t-label mb-6 text-copper-deep">Two ways to start</h2>
            <dl className="space-y-8">
              <div className="rule-tick pt-5">
                <dt className="t-h3">Product demonstration</dt>
                <dd className="t-body mt-2 text-[0.95rem]">
                  For multi-location restaurants and franchises interested in Financial Intelligence
                  or Franchise Management.
                </dd>
              </div>
              <div className="rule-tick pt-5">
                <dt className="t-h3">Custom software consultation</dt>
                <dd className="t-body mt-2 text-[0.95rem]">
                  For organizations in any industry that need an application, integration or
                  automation built.
                </dd>
              </div>
            </dl>
          </aside>

          <div className="lg:col-span-8">
            <div ref={summaryRef} tabIndex={-1} aria-live="polite" className="outline-none">
              {status === 'sent' && (
                <div
                  role="status"
                  className="mb-8 flex gap-3 border border-sage-deep/40 bg-sage p-5 text-sage-deep"
                >
                  <CircleCheck aria-hidden className="mt-0.5 shrink-0" size={20} />
                  <p>
                    <strong>Thank you.</strong> Your message was sent. We will reply to the email
                    address you provided.
                  </p>
                </div>
              )}
              {status === 'error' && (
                <div
                  role="alert"
                  className="mb-8 flex gap-3 border border-[#a8321b]/50 bg-[#f6e3de] p-5 text-[#7d2412]"
                >
                  <CircleAlert aria-hidden className="mt-0.5 shrink-0" size={20} />
                  <p>
                    <strong>We could not send your message.</strong> Nothing was submitted. Please
                    try again in a few minutes.
                  </p>
                </div>
              )}
              {status === 'not-configured' && (
                <div
                  role="alert"
                  className="mb-8 flex gap-3 border border-copper/60 bg-copper-soft/60 p-5 text-ink"
                >
                  <CircleAlert aria-hidden className="mt-0.5 shrink-0" size={20} />
                  <p>
                    <strong>Message not sent.</strong> Form delivery is not connected on this
                    preview site yet, so your details were not transmitted anywhere.
                  </p>
                </div>
              )}
              {errCount > 0 && (
                <div
                  role="alert"
                  className="mb-8 border border-[#a8321b]/50 bg-[#f6e3de] p-5 text-[#7d2412]"
                >
                  <p className="font-medium">
                    Please fix {errCount === 1 ? 'one field' : `${errCount} fields`} below.
                  </p>
                </div>
              )}
            </div>

            <form
              ref={formRef}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              noValidate
              className="space-y-7"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="sr-only" aria-hidden>
                <label>
                  Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <fieldset>
                <legend className="text-sm font-medium">What can we help with?</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {(
                    [
                      ['demo', 'Product demonstration'],
                      ['custom', 'Custom software consultation'],
                    ] as const
                  ).map(([v, l]) => (
                    <label
                      key={v}
                      className={cn(
                        'flex cursor-pointer items-center gap-3 border px-4 py-3.5 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-copper',
                        inquiry === v ? 'border-ink bg-paper' : 'border-ink/30 hover:border-ink/70',
                      )}
                    >
                      <input
                        type="radio"
                        name="inquiry"
                        value={v}
                        checked={inquiry === v}
                        onChange={() => setInquiry(v)}
                        className="h-4 w-4 accent-[#a8400a]"
                      />
                      {l}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-7 sm:grid-cols-2">
                <Field id="name" label="Full name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={desc('name')}
                    className={inputCls}
                  />
                </Field>
                <Field id="email" label="Work email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={desc('email')}
                    className={inputCls}
                  />
                </Field>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <Field id="company" label="Company" error={errors.company}>
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    required
                    aria-invalid={!!errors.company}
                    aria-describedby={desc('company')}
                    className={inputCls}
                  />
                </Field>
                <div hidden={inquiry !== 'demo'}>
                  <Field id="locations" label="Number of locations (optional)">
                    <input
                      id="locations"
                      name="locations"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={5}
                      className={inputCls}
                    />
                  </Field>
                </div>
              </div>

              <Field
                id="message"
                label={
                  inquiry === 'demo' ? 'What would you like to see?' : 'What do you need to build?'
                }
                error={errors.message}
                hint="A few sentences is plenty. Please do not include passwords or financial account numbers."
              >
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  maxLength={3000}
                  aria-invalid={!!errors.message}
                  aria-describedby={['message-hint', desc('message')].filter(Boolean).join(' ')}
                  className={inputCls}
                />
              </Field>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="t-caption max-w-md">
                  We will use the details you submit only to respond to your inquiry.
                </p>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 font-medium text-ivory transition-colors hover:bg-copper-deep disabled:cursor-wait disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
