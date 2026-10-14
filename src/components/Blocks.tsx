import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { business, img } from '../data/site'
import type { Service } from '../data/services'
import { Reveal } from './Reveal'

export function PageHero({ eyebrow, title, text, photo, alt, children }: { eyebrow: string; title: string; text: string; photo: string; alt: string; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div className="fade-up">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{text}</p>
          {children}
        </div>
        <div className="img-frame page-hero-img fade-up delay">
          <img src={img(photo, 1400)} alt={alt} width={1400} height={1050} />
        </div>
      </div>
    </section>
  )
}

export function CtaBand({ title = 'Planning an Interior Refresh?', text = 'Get in touch with BE SERVICES LTD to discuss your interior design enquiry.' }: { title?: string; text?: string }) {
  return (
    <section className="section">
      <Reveal className="container">
        <div className="cta-band">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="btn-row center">
            <a href={business.tel} className="btn btn-primary"><Phone size={18} aria-hidden="true" /> Call Us</a>
            <a href={business.mailto} className="btn btn-outline"><Mail size={18} aria-hidden="true" /> Send an Email</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link to="/services/$slug" params={{ slug: service.slug }} className="service-card">
      <div className="img-frame ratio-4-3">
        <img src={img(service.photo, 800)} alt={service.alt} loading="lazy" width={800} height={600} />
      </div>
      <div className="service-card-body">
        <h3>{service.title}</h3>
        <p>{service.short}</p>
        <span className="text-link">View service <ArrowRight size={16} aria-hidden="true" /></span>
      </div>
    </Link>
  )
}

export function SectionHead({ eyebrow, title, text, center }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={`section-head ${center ? 'center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="lead">{text}</p>}
    </div>
  )
}
