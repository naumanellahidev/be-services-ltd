import { Link } from '@tanstack/react-router'

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="BE SERVICES LTD home">
      <span className="logo-mark" aria-hidden="true">BE</span>
      <span className="logo-text">
        BE SERVICES <span>LTD</span>
      </span>
    </Link>
  )
}
