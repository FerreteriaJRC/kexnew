import './SiteFooter.css'

const FOOTER_COLUMNS = [
  {
    title: 'Productos',
    links: [
      { label: 'Corte', href: '/categorias/corte' },
      { label: 'Medición', href: '/categorias/medicion' },
      { label: 'Maquinaria', href: '/categorias/maquinaria' },
      { label: 'Abrasivos', href: '/categorias/abrasivos' },
      { label: 'Accesorios', href: '/categorias/accesorios' },
      { label: 'Materiales', href: '/categorias/materiales' },
      { label: 'Fluidos', href: '/categorias/fluidos' },
    ],
  },
  {
    title: 'Empresa',
    links: [
        { label: 'Quiénes Somos', href: '#nosotros' },
        { label: 'Noticias', href: 'https://ferreteriajrc.com/blog/kex/' },
    ],
  },
  {
    title: 'Soporte',
    links: [
      { label: 'Catálogo PDF', href: '/soporte/catalogo-pdf' },
      { label: 'Contacto', href: '#contacto' }
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <img src="/images/logo.svg" alt="KEX Tools" />
          <p>Herramientas y maquinaria de precisión<br />para la industria profesional desde 1992.</p>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <nav className="footer-column" key={column.title} aria-label={column.title}>
            <h2>{column.title}</h2>
            {column.links.map((link) => (
              <a href={link.href || '#contacto'} key={link.label || link}>{link.label || link}</a>
            ))}
          </nav>
        ))}
      </div>

      <div className="footer-bottom">
        <p>© 2024 KEX Industrial. Todos los derechos reservados.</p>
        <nav aria-label="Enlaces legales">
          <a href="#privacidad">Privacidad</a>
          <a href="#terminos">Términos</a>
          <a href="#cookies">Cookies</a>
        </nav>
      </div>
    </footer>
  )
}
