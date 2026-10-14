import { Link } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'
import { getService } from '../data/services'
import { CtaBand, PageHero, ServiceCard } from '../components/Blocks'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../components/usePageMeta'
import { NotFound } from './NotFound'

export function ServiceDetail({ slug }: { slug: string }) {
  const service = getService(slug)
  usePageMeta(service?.title ?? 'Service not found', service?.short ?? 'This service page could not be found.')
  if (!service) return <NotFound />
  const related = service.related.map(getService).filter((s) => s !== undefined)

  return (
    <>
      <div className="container crumb">
        <Link to="/services" className="text-link"><ChevronLeft size={16} aria-hidden="true" /> All services</Link>
      </div>
      <PageHero eyebrow="Service" title={service.title} text={service.short} photo={service.photo} alt={service.alt}>
        <div className="btn-row">
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container detail-grid">
          <Reveal>
            <h2>About this service</h2>
            {service.intro.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          <Reveal className="detail-panel">
            <h3>Design considerations</h3>
            <ul className="check-list">
              {service.considerations.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <h2 className="center-text">A suggested process</h2>
          <p className="center-text muted">A flexible outline of how an enquiry for this service might progress.</p>
          <ol className="mini-steps">
            {service.process.map((p, i) => (
              <li key={p}>
                <span className="step-num">0{i + 1}</span>
                <p>{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="center-text">Related services</h2>
          <div className="card-grid three">
            {related.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <CtaBand title={`Interested in ${service.title.toLowerCase()}?`} />
    </>
  )
}
