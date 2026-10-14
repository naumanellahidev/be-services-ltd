import { useEffect } from 'react'
import { Outlet, createRootRoute, createRoute, createRouter, useRouterState } from '@tanstack/react-router'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { ServiceDetail } from './pages/ServiceDetail'
import { Approach } from './pages/Approach'
import { Contact } from './pages/Contact'
import { Legal } from './pages/Legal'
import { NotFound } from './pages/NotFound'

function RootLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

const rootRoute = createRootRoute({ component: RootLayout, notFoundComponent: NotFound })

const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home })
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: About })
const servicesRoute = createRoute({ getParentRoute: () => rootRoute, path: '/services', component: Services })
const serviceDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/$slug',
  component: function ServiceDetailRoute() {
    const { slug } = serviceDetailRoute.useParams()
    return <ServiceDetail key={slug} slug={slug} />
  },
})
const approachRoute = createRoute({ getParentRoute: () => rootRoute, path: '/our-approach', component: Approach })
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: Contact })
const legalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/legal/$slug',
  component: function LegalRoute() {
    const { slug } = legalRoute.useParams()
    return <Legal key={slug} slug={slug} />
  },
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  servicesRoute,
  serviceDetailRoute,
  approachRoute,
  contactRoute,
  legalRoute,
])

export const router = createRouter({ routeTree, defaultPreload: 'intent' })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
