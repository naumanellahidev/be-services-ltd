import { useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, MapPin, Navigation, Phone } from 'lucide-react'
import { business, img, photos } from '../data/site'
import { services } from '../data/services'
import { usePageMeta } from '../components/usePageMeta'

type Fields = { name: string; email: string; phone: string; service: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const empty: Fields = { name: '', email: '', phone: '', service: '', message: '' }
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (!f.name.trim()) e.name = 'Please enter your full name.'
  if (!f.email.trim()) e.email = 'Please enter your email address.'
  else if (!emailRe.test(f.email.trim())) e.email = 'Please enter a valid email address, for example name@example.com.'
  if (f.phone.trim() && !/^[+\d\s()-]{7,}$/.test(f.phone.trim())) e.phone = 'Please enter a valid phone number, or leave this blank.'
  if (!f.service) e.service = 'Please choose a service of interest.'
  if (f.message.trim().length < 10) e.message = 'Please enter a message of at least 10 characters.'
  return e
}

export function Contact() {
  usePageMeta('Contact Us', 'Contact BE SERVICES LTD in Greenford, London. Call +447932055272 or email info@beserviceslimited.co.uk to discuss your interior design enquiry.')
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const update = (key: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errs = validate(fields)
    setErrors(errs)
    const first = Object.keys(errs)[0]
    if (first) {
      document.getElementById(`f-${first}`)?.focus()
      return
    }
    setSent(true)
  }

  const fieldProps = (key: keyof Fields) => ({
    id: `f-${key}`,
    name: key,
    value: fields[key],
    onChange: update(key),
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `e-${key}` : undefined,
  })
  const err = (key: keyof Fields) => errors[key] && <p className="field-error" id={`e-${key}`} role="alert">{errors[key]}</p>

  return (
    <>
      <section className="page-hero compact">
        <div className="container fade-up">
          <p className="eyebrow">Contact</p>
          <h1>Get in Touch</h1>
          <p className="lead">We would be pleased to hear about your interior design enquiry. Call, email or use the form below to organise your details.</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <h2>BE SERVICES LTD</h2>
              <ul className="info-list">
                <li>
                  <MapPin size={20} aria-hidden="true" />
                  <div><strong>Address</strong><address>{business.addressLines.map((l) => <span key={l}>{l}<br /></span>)}</address></div>
                </li>
                <li>
                  <Phone size={20} aria-hidden="true" />
                  <div><strong>Phone</strong><a href={business.tel}>{business.phone}</a></div>
                </li>
                <li>
                  <Mail size={20} aria-hidden="true" />
                  <div><strong>Email</strong><a href={business.mailto}>{business.email}</a></div>
                </li>
              </ul>
              <div className="btn-stack">
                <a href={business.tel} className="btn btn-primary"><Phone size={18} aria-hidden="true" /> Call Us</a>
                <a href={business.mailto} className="btn btn-outline"><Mail size={18} aria-hidden="true" /> Email Us</a>
                <a href={business.maps} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Navigation size={18} aria-hidden="true" /> Get Directions</a>
              </div>
            </div>
            <div className="img-frame ratio-4-3 contact-img">
              <img src={img(photos.sunnyLiving, 900)} alt="Sunny living room with a grey sofa, bookshelves and hanging plants" loading="lazy" />
            </div>
          </div>

          <div className="form-card">
            {sent ? (
              <div className="success" role="status">
                <CheckCircle2 size={40} aria-hidden="true" />
                <h2>Thank you, {fields.name.trim().split(' ')[0]}</h2>
                <p>Your details have been checked and are complete.</p>
                <p className="note">
                  Please note: this website is currently frontend-only, so your message has <strong>not</strong> been sent. Actual message delivery requires a connected form service or backend. To reach us now, please call or email directly.
                </p>
                <div className="btn-row center">
                  <a href={business.tel} className="btn btn-primary">Call Us</a>
                  <a
                    className="btn btn-outline"
                    href={`${business.mailto}?subject=${encodeURIComponent(`Interior design enquiry: ${fields.service}`)}&body=${encodeURIComponent(`${fields.message}\n\n${fields.name}\n${fields.phone}`)}`}
                  >
                    Email This Message
                  </a>
                </div>
                <button type="button" className="btn btn-ghost" onClick={() => { setFields(empty); setSent(false) }}>Start a new enquiry</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h2>Enquiry Form</h2>
                <p className="muted small">Fields marked * are required.</p>
                <div className="field">
                  <label htmlFor="f-name">Full Name *</label>
                  <input type="text" autoComplete="name" {...fieldProps('name')} />
                  {err('name')}
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="f-email">Email Address *</label>
                    <input type="email" autoComplete="email" {...fieldProps('email')} />
                    {err('email')}
                  </div>
                  <div className="field">
                    <label htmlFor="f-phone">Phone Number (optional)</label>
                    <input type="tel" autoComplete="tel" {...fieldProps('phone')} />
                    {err('phone')}
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="f-service">Service of Interest *</label>
                  <select {...fieldProps('service')}>
                    <option value="">Please select…</option>
                    {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                    <option value="Other / Not sure">Other / Not sure</option>
                  </select>
                  {err('service')}
                </div>
                <div className="field">
                  <label htmlFor="f-message">Message *</label>
                  <textarea rows={5} {...fieldProps('message')} />
                  {err('message')}
                </div>
                <button type="submit" className="btn btn-primary btn-block">Check &amp; Submit Enquiry</button>
                <p className="note small">
                  This form is not yet connected to an email service, so messages are not delivered or stored. Please call or email us to make an enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
