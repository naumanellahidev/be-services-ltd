import { Link } from '@tanstack/react-router'
import { Lightbulb, MessageCircle, Ruler, SlidersHorizontal } from 'lucide-react'
import { photos } from '../data/site'
import { CtaBand, PageHero } from '../components/Blocks'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../components/usePageMeta'

const steps = [
  {
    icon: MessageCircle,
    title: 'Initial Discussion',
    text: 'A relaxed first conversation about your space, what you would like to change and the overall feeling you are hoping for. This is a chance to ask questions and share any ideas or images you like.',
  },
  {
    icon: Ruler,
    title: 'Understanding the Space',
    text: 'Taking a closer look at the room or rooms involved: proportions, natural light, existing features and how the space is used day to day.',
  },
  {
    icon: Lightbulb,
    title: 'Exploring Design Ideas',
    text: 'Considering possible layouts, colour palettes, materials and furniture that could suit the space and your preferences.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Refining the Direction',
    text: 'Bringing the preferred ideas together and refining the details so the direction feels cohesive and right for you.',
  },
]

export function Approach() {
  usePageMeta('Our Approach', 'A simple, considered approach to interior design from BE SERVICES LTD: initial discussion, understanding the space, exploring ideas and refining the direction.')
  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        title="A Straightforward Way of Working"
        text="Our suggested design process is simple and flexible, moving from conversation to considered details at a pace that suits you."
        photo={photos.shelfStyling}
        alt="Minimal living space with floating wooden shelves, framed artwork and a small plant"
      />

      <section className="section">
        <div className="container narrow">
          <ol className="timeline">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal className="timeline-item">
                  <span className="step-icon"><s.icon size={22} aria-hidden="true" /></span>
                  <div>
                    <span className="step-num">Step 0{i + 1}</span>
                    <h2>{s.title}</h2>
                    <p>{s.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="note">
            This is a suggested outline rather than a fixed set of services or deliverables. The exact steps for any enquiry would be discussed and agreed directly.
          </p>
          <div className="btn-row center">
            <Link to="/services" className="btn btn-outline">Explore services</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
