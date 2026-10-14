import { Link } from '@tanstack/react-router'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from './Logo'
import { business, navItems } from '../data/site'
import { services } from '../data/services'
import { legalPages } from '../data/legal'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>An interior design business based in Greenford, London, focused on thoughtful, comfortable and well-considered residential spaces.</p>
          <ul className="footer-contact">
            <li><Phone size={16} aria-hidden="true" /><a href={business.tel}>{business.phoneDisplay}</a></li>
            <li><Mail size={16} aria-hidden="true" /><a href={business.mailto}>{business.email}</a></li>
            <li><MapPin size={16} aria-hidden="true" /><address>{business.addressOneLine}</address></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Explore</h2>
          <ul className="footer-links">
            {navItems.map((n) => (
              <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Services</h2>
          <ul className="footer-links">
            {services.map((s) => (
              <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Legal</h2>
          <ul className="footer-links">
            {legalPages.map((p) => (
              <li key={p.slug}><Link to="/legal/$slug" params={{ slug: p.slug }}>{p.title}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 BE SERVICES LTD. All rights reserved.</p>
        <a className="dev-pill" href={business.developerUrl} target="_blank" rel="noopener noreferrer">
          Designed &amp; Developed by <strong>Nauman Ellahi</strong>
        </a>
      </div>
    </footer>
  )
}
