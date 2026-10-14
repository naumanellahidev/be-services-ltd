import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { img, photos } from '../data/site'
import { services } from '../data/services'
import { CtaBand, PageHero, SectionHead, ServiceCard } from '../components/Blocks'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../components/usePageMeta'

export function Services() {
  usePageMeta('Interior Design Services', 'Explore the interior design services offered by BE SERVICES LTD, from living rooms, bedrooms, kitchens and bathrooms to whole-home interior design.')
  const featured = services.slice(0, 2)
  const rest = services.slice(2)
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Interior Design Services"
        text="From a single room to a whole home, our services focus on considered layouts, calm palettes and well-chosen details."
        photo={photos.openStairs}
        alt="Open living area with a blue sofa, wooden coffee table and floating staircase"
      >
        <div className="btn-row">
          <Link to="/contact" className="btn btn-primary">Discuss Your Enquiry</Link>
        </div>
      </PageHero>

      {featured.map((s, i) => (
        <section key={s.slug} className={`section ${i % 2 ? 'tint' : ''}`}>
          <div className={`container split ${i % 2 ? 'reverse' : ''}`}>
            <Reveal className="img-frame ratio-4-3">
              <img src={img(s.photo, 1100)} alt={s.alt} loading="lazy" width={1100} height={825} />
            </Reveal>
            <Reveal>
              <p className="eyebrow">Featured Service</p>
              <h2>{s.title}</h2>
              <p>{s.intro[0]}</p>
              <ul className="check-list">
                {s.considerations.slice(0, 3).map((c) => <li key={c}>{c}</li>)}
              </ul>
              <Link to="/services/$slug" params={{ slug: s.slug }} className="btn btn-outline">
                Learn more <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="All Services" title="More ways we can help" center />
          <div className="card-grid three">
            {rest.map((s) => (
              <Reveal key={s.slug}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
