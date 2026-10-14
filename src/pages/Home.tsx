import { Link } from '@tanstack/react-router'
import { ArrowRight, Compass, Layers, MessageCircle, Ruler } from 'lucide-react'
import { img, photos } from '../data/site'
import { services } from '../data/services'
import { CtaBand, SectionHead, ServiceCard } from '../components/Blocks'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../components/usePageMeta'

const gallery = [
  { id: photos.plantsLiving, alt: 'Sunlit modern living room with leather armchairs and indoor plants', cls: 'g-tall' },
  { id: photos.darkBedroom, alt: 'Elegant bedroom with a tufted headboard and a sculptural pendant light', cls: '' },
  { id: photos.whiteKitchen, alt: 'Bright white kitchen with marble worktop and fresh produce', cls: '' },
  { id: photos.glassBathroom, alt: 'Contemporary bathroom with glass shower and timber-framed mirror', cls: 'g-tall' },
  { id: photos.greenSofa, alt: 'Deep green velvet sofa against a pale wall', cls: 'g-wide' },
  { id: photos.hallConsole, alt: 'Styled console with a round mirror, rattan pendant and plant', cls: '' },
  { id: photos.roundedLiving, alt: 'Cream living room with curved furniture and woven wall decor', cls: '' },
]

const steps = [
  { icon: Ruler, title: 'Understand the Space', text: 'Look at the room as it is today: its proportions, light and how it is used.' },
  { icon: MessageCircle, title: 'Discuss Your Ideas', text: 'Talk through preferences, priorities and the feeling you would like the space to have.' },
  { icon: Compass, title: 'Explore Design Directions', text: 'Consider layouts, colour palettes and materials that could suit the space.' },
  { icon: Layers, title: 'Refine the Details', text: 'Bring the chosen direction together with furniture, finishes and finishing touches.' },
]

export function Home() {
  usePageMeta(
    'BE SERVICES LTD | Interior Design',
    'Discover BE SERVICES LTD, an interior design business based in Greenford, London. Contact us to discuss your interior design enquiry.',
  )
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy fade-up">
            <p className="eyebrow">Interior Design · Greenford, London</p>
            <h1>Thoughtfully Designed Interiors. Beautifully Lived Spaces.</h1>
            <p className="lead">
              BE SERVICES LTD focuses on interior design, bringing together considered spaces, thoughtful details and a refined approach to residential interiors.
            </p>
            <div className="btn-row">
              <Link to="/services" className="btn btn-primary">Explore Our Services <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
          <div className="img-frame hero-img fade-up delay">
            <img src={img(photos.heroLiving, 1600)} alt="Warm, light-filled living room with a soft grey sofa, wooden coffee table and large windows" width={1600} height={1200} fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="img-frame ratio-4-5">
            <img src={img(photos.creamLiving, 1000)} alt="Calm cream living room with a sectional sofa, round coffee table and wall art" loading="lazy" width={1000} height={1250} />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Introduction</p>
            <h2>Interiors Designed Around the Way You Live</h2>
            <p>
              BE SERVICES LTD is an interior design business based in Greenford, London. We believe a well-designed home starts with understanding how each space is used, then shaping it with care.
            </p>
            <p>
              Our focus is on thoughtful planning, balanced aesthetics and comfortable, functional rooms: the kind of spaces that feel calm, look considered and work well for everyday life.
            </p>
            <Link to="/about" className="text-link">More about us <ArrowRight size={16} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <SectionHead eyebrow="Services" title="Our Interior Design Services" text="A range of interior design services for individual rooms and whole homes." center />
          <div className="card-grid">
            {services.map((s) => (
              <Reveal key={s.slug}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Ideas" title="Design Inspiration" text="A selection of contemporary interiors that reflect the warm, considered style we admire. Images are illustrative inspiration." center />
          <div className="gallery">
            {gallery.map((g) => (
              <figure key={g.id} className={`gallery-item img-frame ${g.cls}`}>
                <img src={img(g.id, 900)} alt={g.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <SectionHead eyebrow="Our Approach" title="A Considered Approach to Interior Design" text="A suggested way of working through an interior design enquiry, step by step." center />
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal className="step-card">
                  <span className="step-icon"><s.icon size={22} aria-hidden="true" /></span>
                  <span className="step-num">0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <div className="btn-row center">
            <Link to="/our-approach" className="btn btn-outline">Read about our approach</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
