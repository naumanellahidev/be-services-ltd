import { Link } from '@tanstack/react-router'
import { Info } from 'lucide-react'
import { getLegalPage, legalPages } from '../data/legal'
import { usePageMeta } from '../components/usePageMeta'
import { NotFound } from './NotFound'

export function Legal({ slug }: { slug: string }) {
  const page = getLegalPage(slug)
  usePageMeta(page?.title ?? 'Page not found', page?.summary ?? 'This page could not be found.')
  if (!page) return <NotFound />

  return (
    <section className="section legal">
      <div className="container legal-grid">
        <aside className="legal-nav" aria-label="Legal pages">
          <h2 className="footer-title">Legal</h2>
          <ul>
            {legalPages.map((p) => (
              <li key={p.slug}>
                <Link to="/legal/$slug" params={{ slug: p.slug }} className="nav-pill" activeProps={{ className: 'is-active' }}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
        <article className="legal-body">
          <p className="eyebrow">Legal</p>
          <h1>{page.title}</h1>
          <p className="lead">{page.summary}</p>
          <p className="muted small">Last updated: October 2026</p>
          <div className="owner-note" role="note">
            <Info size={18} aria-hidden="true" />
            <p>
              <strong>Note for the business owner:</strong> this wording is a general template for a UK business website. It should be checked against BE SERVICES LTD’s actual practices before publication, particularly any item marked “Owner to confirm”. It is not a substitute for legal advice.
            </p>
          </div>
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
              {s.list && (
                <ul>
                  {s.list.map((l) => <li key={l}>{l}</li>)}
                </ul>
              )}
            </section>
          ))}
        </article>
      </div>
    </section>
  )
}
