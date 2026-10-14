import { Link } from '@tanstack/react-router'
import { usePageMeta } from '../components/usePageMeta'

export function NotFound() {
  usePageMeta('Page Not Found', 'The page you are looking for could not be found.')
  return (
    <section className="section">
      <div className="container narrow center-text">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="lead">Sorry, we could not find the page you were looking for.</p>
        <div className="btn-row center">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
