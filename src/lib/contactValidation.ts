export type Errors = Partial<Record<'name' | 'email' | 'company' | 'message' | 'phone', string>>

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validate(d: FormData): Errors {
  const e: Errors = {}
  const name = String(d.get('name') ?? '').trim()
  const email = String(d.get('email') ?? '').trim()
  const company = String(d.get('company') ?? '').trim()
  const message = String(d.get('message') ?? '').trim()
  if (name.length < 2) e.name = 'Enter your full name.'
  if (!emailRe.test(email)) e.email = 'Enter a valid work email address.'
  if (company.length < 2) e.company = 'Enter your company name.'
  if (d.get('inquiry') === 'custom' && message.length < 20)
    e.message = 'Please describe your needs in at least a sentence or two (20+ characters).'
  if (message.length > 3000) e.message = 'Please keep the description under 3,000 characters.'
  const phone = String(d.get('phone') ?? '').trim()
  const digits = phone.replace(/\D/g, '')
  if (phone && (!/^[+0-9() .-]+$/.test(phone) || digits.length < 7 || digits.length > 15))
    e.phone = 'Enter a valid phone number with country code.'
  if (d.get('sms-consent') === 'yes' && !phone)
    e.phone = 'Enter a mobile number to receive SMS messages, or uncheck SMS consent.'
  return e
}

/** A phone number alone never creates SMS consent. Records reflect the explicit choice. */
export function recordSmsConsent(data: FormData, timestamp: string) {
  data.set('sms-consent', data.get('sms-consent') === 'yes' ? 'yes' : 'no')
  data.set('sms-consent-at', data.get('sms-consent') === 'yes' ? timestamp : '')
  return data
}
