import { Link } from '@tanstack/react-router'
import { Heart, LayoutGrid, Sparkles } from 'lucide-react'
import { img, photos } from '../data/site'
import { CtaBand, PageHero, SectionHead } from '../components/Blocks'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../components/usePageMeta'

const values = [
  { icon: Heart, title: 'Thoughtful spaces', text: 'Rooms that feel welcoming and personal, shaped around the people who use them.' },
  { icon: LayoutGrid, title: 'Functionality', text: 'Layouts, storage and lighting that make everyday life easier and more comfortable.' },
  { icon: Sparkles, title: 'Visual harmony', text: 'Balanced colours, textures and proportions that sit together calmly.' },
]

export function About() {
  usePageMeta('About', 'Learn about BE SERVICES LTD, an interior design business in Greenford, London, focused on thoughtful, functional and harmonious interiors.')
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Welcome to BE SERVICES LTD"
        text="We are an interior design business based in Greenford, London, with a simple focus: creating residential interiors that feel considered, comfortable and beautifully balanced."
        photo={photos.roundedLiving}
        alt="Soft cream living room with curved seating, a round coffee table and woven wall decorations"
      />

      <section className="section">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Our Focus</p>
            <h2>Interior design, done with care</h2>
            <p>
              Interior design is at the centre of what we do. We are interested in how a room feels as much as how it looks: the way light falls across it, how easily you move through it and whether it supports the way you want to live.
            </p>
            <p>
              Every home is different, so we prefer to start by listening. From there, we look for a direction that suits the space and the people in it, rather than following a fixed formula.
            </p>
          </Reveal>
          <Reveal className="img-frame ratio-4-5">
            <img src={img(photos.warmLiving, 1000)} alt="Warm living room with a patterned rug, wooden furniture and decorative wall baskets" loading="lazy" width={1000} height={1250} />
          </Reveal>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <SectionHead eyebrow="What Matters" title="Why thoughtful interiors matter" center />
          <div className="value-grid">
            {values.map((v) => (
              <Reveal key={v.title} className="value-card">
                <span className="step-icon"><v.icon size={22} aria-hidden="true" /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal className="container narrow center-text">
          <p className="eyebrow">Our Approach</p>
          <h2>A simple, considered process</h2>
          <p>
            Our suggested approach moves from an initial conversation, to understanding the space, to exploring design ideas and refining a direction. It is a flexible way of working that keeps the focus on what matters to you.
          </p>
          <div className="btn-row center">
            <Link to="/our-approach" className="btn btn-outline">See our approach</Link>
            <Link to="/services" className="btn btn-ghost">View services</Link>
          </div>
        </Reveal>
      </section>

      <CtaBand title="Let’s talk about your space" />
    </>
  )
}
