import { useEffect, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X, Phone } from 'lucide-react'
import { Logo } from './Logo'
import { business, navItems } from '../data/site'

function NavList() {
  return (
    <ul className="nav-pills">
      {navItems.map((item) => (
        <li key={item.to}>
          <Link to={item.to} className="nav-pill" activeProps={{ className: 'is-active' }} activeOptions={{ exact: item.to === '/' }}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav aria-label="Main" className="nav-desktop">
          <NavList />
        </nav>
        <Link to="/contact" className="btn btn-primary btn-sm header-cta">
          Contact Us
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile" className="container">
          <NavList />
          <div className="mobile-actions">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <a href={business.tel} className="btn btn-outline"><Phone size={16} aria-hidden="true" /> Call Us</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
