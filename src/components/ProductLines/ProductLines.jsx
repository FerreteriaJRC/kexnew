import './ProductLines.css'

const PRODUCT_LINES = [
  {
    key: 'corte',
    name: 'Herramientas de corte',
    description: 'Fresas, brocas, insertos, tornos',
    badge: '240+ SKU',
    image: '/CORTE.webp',
  },
  {
    key: 'medicion',
    name: 'Instrumentos de medición',
    description: 'Micrómetros, calibres, comparadores',
    badge: '180+ SKU',
    image: '/MEDICION.webp',
  },
  {
    key: 'maquinaria',
    name: 'Maquinaria industrial',
    description: 'Tornos, fresadoras, rectificadoras',
    badge: '95+ modelos',
    image: '/MAQUINARIA.webp',
  },
  {
    key: 'accesorios',
    name: 'Sistemas de sujeción',
    description: 'Mandrinos, mordazas, porta-herramientas',
    badge: '310+ SKU',
    image: '/ACCESORIOS.webp',
  },
  {
    key: 'abrasivos',
    name: 'Abrasivos y acabado',
    description: 'Muelas, lijas, pulimento de precisión',
    badge: '150+ SKU',
    image: '/ABRASIVOS.webp',
  },
  {
    key: 'fluidos',
    name: 'Fluidos de corte',
    description: 'Refrigerantes, lubricantes, taladrinas',
    badge: '60+ referencias',
    image: '/FLUIDOS.webp',
  },
]

export default function ProductLines() {
  return (
    <section className="product-lines" id="catalogo" aria-labelledby="product-lines-title">
      <div className="product-lines-inner">
        <div className="product-lines-heading">
          <div>
            <p className="section-kicker"><span /> Catálogo</p>
            <h2 id="product-lines-title">Líneas de<br />producto</h2>
          </div>
          <a className="catalog-link" href="/file/CATALOGOKEX.PAGINAWEB.pdf" download>
            Ver catálogo completo <span aria-hidden="true">-&gt;</span>
          </a>
        </div>

        <div className="product-grid">
          {PRODUCT_LINES.map((line) => (
            <a className="product-card" href={`/categorias/${line.key}`} key={line.name}>
              <div className="product-image-wrap">
                <img src={line.image} alt="" loading="lazy" />
                <span className="product-badge">{line.badge}</span>
              </div>
              <div className="product-card-copy">
                <h3>{line.name}</h3>
                <p>{line.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
