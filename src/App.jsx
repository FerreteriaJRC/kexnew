import Navbar from './components/Navbar.jsx/Navbar.jsx'
import ProductLines from './components/ProductLines/ProductLines.jsx'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts.jsx'
import WhyKex from './components/WhyKex/WhyKex.jsx'
import Industries from './components/Industries/Industries.jsx'
import ContactSection from './components/ContactSection/ContactSection.jsx'
import SiteFooter from './components/SiteFooter/SiteFooter.jsx'
import TechnicalCta from './components/TechnicalCta/TechnicalCta.jsx'
import CategoryPage, { getCategoryFromPath } from './components/CategoryPage/CategoryPage.jsx'
import './App.css'

function App() {
  const categoryKey = getCategoryFromPath(window.location.pathname)

  return (
    <>
      <Navbar />
      {categoryKey ? (
        <CategoryPage categoryKey={categoryKey} />
      ) : (
        <>
      <main className="hero-section">
        <div className="hero-layout">
          <section className="hero-copy" aria-labelledby="hero-title">
            <h1 id="hero-title" className="hero-title">
              PRECISIÓN
              <span>SIN</span>
              CONCESIONES.
            </h1>
            <p className="hero-description">
              Herramientas, maquinaria e instrumentos para empresas y técnicos
              que no toleran el error. Catálogo completo para mecanizado,
              medición y transformación de metales.
            </p>
            <div className="hero-actions">
              <a className="hero-primary-action" href="#catalogo">
                Ver catálogo <span aria-hidden="true">-&gt;</span>
              </a>
              <a className="hero-secondary-action" href="#contacto">
                Hablar con un técnico
              </a>
            </div>
          </section>
          <div className="hero-divider" aria-hidden="true" />
        </div>

        <div className="hero-stats" aria-label="Datos de KEX Tools">
          <div className="hero-stat">
            <strong>32+</strong>
            <span>Años en el mercado</span>
          </div>
          <div className="hero-stat">
            <strong>1,200+</strong>
            <span>Productos en catálogo</span>
          </div>
          <div className="hero-stat">
            <strong>18</strong>
            <span>Países de distribución</span>
          </div>
          <div className="hero-stat">
            <strong>99.4%</strong>
            <span>Tasa de satisfacción</span>
          </div>
        </div>
      </main>
      <ProductLines />
      <FeaturedProducts />
      <WhyKex />
      <Industries />
      <TechnicalCta />
      <ContactSection />
        </>
      )}
      <SiteFooter />
    </>
  )
}

export default App
