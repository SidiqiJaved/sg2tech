import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CircleAlert, CircleCheck } from 'lucide-react'
import { PageIntro } from '@/components/ui/Blocks'
import { cn } from '@/lib/cn'
import { contact } from '@/content/site'
import { mobilePrivacyNotice, smsConsentDisclosure, smsConsentVersion } from '@/content/legal'
import { validate, recordSmsConsent, type Errors } from '@/lib/contactValidation'

type Inquiry = 'demo' | 'custom'
type Product = '' | 'financial-intelligence' | 'franchise-management' | 'both'
type Status = 'idle' | 'sending' | 'sent' | 'error' | 'not-configured'

/**
 * Delivery is Netlify Forms (the static form below is detected at deploy time).
 * It is only treated as live when VITE_FORMS_ENABLED === 'true', so a local or
 * unconfigured build can never report a false success. See README.
 */
// Read as a plain `import.meta.env.X` member so Vite substitutes it at build time.
const FORMS_ENABLED = import.meta.env.VITE_FORMS_ENABLED === 'true'

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
  const [product, setProduct] = useState<Product>('')
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const [sentTo, setSentTo] = useState({ name: '', email: '' })
  const formRef = useRef<HTMLFormElement>(null)
  const summaryRef = useRef<HTMLDivElement>(null)
  // Synchronous guard: state updates are async, so a fast double click could otherwise post twice.
  const inFlight = useRef(false)

  // Read the query after hydration so server and client markup match.
  useEffect(() => {
    const q = params.get('inquiry')
    setInquiry(q === 'custom' ? 'custom' : 'demo')
    const selected = params.get('product')
    setProduct(
      selected === 'financial-intelligence' ||
        selected === 'franchise-management' ||
        selected === 'both'
        ? selected
        : '',
    )
    setErrors({})
  }, [params])

  useEffect(() => {
    if (status === 'sent' || status === 'error' || status === 'not-configured')
      summaryRef.current?.focus()
  }, [status])

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (inFlight.current) return
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
    inFlight.current = true
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(recordSmsConsent(data, new Date().toISOString())),
      })
      if (!res.ok) throw new Error(String(res.status))
      setSentTo({
        name: String(data.get('name')).trim().split(/\s+/)[0] ?? '',
        email: String(data.get('email')).trim(),
      })
      setStatus('sent')
      formRef.current?.reset()
      setProduct('')
    } catch {
      setStatus('error')
    } finally {
      inFlight.current = false
    }
  }

  const errCount = Object.keys(errors).length
  const desc = (id: keyof Errors) => (errors[id] ? `${id}-error` : undefined)

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={inquiry === 'demo' ? 'Request a demo.' : 'Discuss a project.'}
        lead="Tell us a little about your business. We’ll reply to arrange the next step."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="min-w-0 lg:col-span-7 lg:row-start-1">
            <div ref={summaryRef} tabIndex={-1} aria-live="polite" className="outline-none">
              {status === 'sent' && (
                <div
                  role="status"
                  className="mb-8 flex gap-3 border border-sage-deep/40 bg-sage p-5 text-sage-deep"
                >
                  <CircleCheck aria-hidden className="mt-0.5 shrink-0" size={20} />
                  <p>
                    <strong>
                      Thank you{sentTo.name ? `, ${sentTo.name}` : ''}. We have received your
                      message.
                    </strong>{' '}
                    {sentTo.email
                      ? `We will reply to ${sentTo.email}`
                      : 'We will reply to the email address you provided'}
                    . If it is urgent, call us at {contact.phone}.
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
                    <strong>We could not send your message.</strong> Please try again or contact us
                    by email.
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
              <input type="hidden" name="sms-consent-version" value={smsConsentVersion} />
              <input type="hidden" name="sms-consent-disclosure" value={smsConsentDisclosure} />
              <input type="hidden" name="sms-consent-at" value="" />
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
                      ['demo', 'Product demo'],
                      ['custom', 'Custom project'],
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
                        onChange={() => {
                          setInquiry(v)
                          setErrors({})
                          setStatus('idle')
                        }}
                        className="h-4 w-4 accent-[#a8400a]"
                      />
                      {l}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div hidden={inquiry !== 'demo'}>
                <Field id="product" label="Which product? (optional)">
                  <select
                    id="product"
                    name="product"
                    disabled={inquiry !== 'demo'}
                    value={product}
                    onChange={(event) => setProduct(event.target.value as Product)}
                    className={inputCls}
                  >
                    <option value="">Not sure yet</option>
                    <option value="financial-intelligence">Financial Intelligence</option>
                    <option value="franchise-management">Franchise Management</option>
                    <option value="both">Both products</option>
                  </select>
                </Field>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <Field id="name" label="Full name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    maxLength={120}
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
                    maxLength={254}
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
                    maxLength={160}
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
                      disabled={inquiry !== 'demo'}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={5}
                      className={inputCls}
                    />
                  </Field>
                </div>
              </div>

              <Field
                id="phone"
                label="Mobile phone (optional)"
                error={errors.phone}
                hint="Include your country code. A phone number alone does not opt you into SMS."
              >
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={30}
                  aria-invalid={!!errors.phone}
                  aria-describedby={['phone-hint', desc('phone')].filter(Boolean).join(' ')}
                  className={inputCls}
                />
              </Field>

              <Field
                id="message"
                label={
                  inquiry === 'demo'
                    ? 'What would you like to see? (optional)'
                    : 'What do you need to build?'
                }
                error={errors.message}
                hint="A few sentences is plenty. Please do not include passwords or financial account numbers."
              >
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required={inquiry === 'custom'}
                  maxLength={3000}
                  aria-invalid={!!errors.message}
                  aria-describedby={['message-hint', desc('message')].filter(Boolean).join(' ')}
                  className={inputCls}
                />
              </Field>

              <fieldset className="border border-line bg-ivory p-5">
                <legend className="px-2 text-sm font-medium">Optional SMS updates</legend>
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed">
                  <input
                    id="sms-consent"
                    name="sms-consent"
                    type="checkbox"
                    value="yes"
                    className="mt-1 h-5 w-5 shrink-0 accent-[#a8400a]"
                  />
                  <span>{smsConsentDisclosure}</span>
                </label>
                <p className="mt-3 text-sm">
                  <Link className="underline underline-offset-4" to="/privacy-policy">
                    Privacy Policy
                  </Link>{' '}
                  ·{' '}
                  <Link className="underline underline-offset-4" to="/terms-and-conditions#sms">
                    Terms of Service
                  </Link>
                </p>
              </fieldset>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="t-caption max-w-md">
                  We use your details to respond to your inquiry and provide any SMS updates you
                  choose. See our{' '}
                  <Link to="/privacy-policy" className="underline underline-offset-4">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-copper px-8 py-4 font-medium text-ink transition-colors hover:bg-ink hover:text-white disabled:cursor-wait disabled:opacity-60"
                >
                  {status === 'sending'
                    ? 'Sending…'
                    : inquiry === 'demo'
                      ? 'Request a demo'
                      : 'Send project inquiry'}
                </button>
              </div>
            </form>
            <section
              id="sms-privacy"
              aria-labelledby="sms-privacy-title"
              className="mt-8 border-t border-line pt-6"
            >
              <h2 id="sms-privacy-title" className="t-h3">
                Mobile information and privacy
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">{mobilePrivacyNotice}</p>
              <p className="mt-3 text-sm">
                <Link
                  to="/privacy-policy#mobile-information"
                  className="underline underline-offset-4"
                >
                  Read our Privacy Policy
                </Link>
              </p>
            </section>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9 lg:row-start-1">
            <h2 className="t-label mb-6 text-copper-deep">Reach us directly</h2>
            <ul className="space-y-3">
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
          </aside>
        </div>
      </section>
    </>
  )
}
