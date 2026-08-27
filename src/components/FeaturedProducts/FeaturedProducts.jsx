import './FeaturedProducts.css'

const FEATURED_PRODUCTS = [
  {
    name: 'Fresa tórica KEX-FT12',
    specs: 'Ø12mm · 4 filos · TiAlN',
    material: 'Carburo sólido',
    badge: 'Más vendido',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Micrómetro digital KEX-MD25',
    specs: '0–25mm · 0.001mm · IP65',
    material: 'Acero inoxidable',
    badge: 'Nuevo',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Inserto CNMG 120408',
    specs: 'Grado P25 · Rompevirutas M',
    material: 'Carburo con recubrimiento CVD',
    badge: 'Oferta',
    image: 'https://images.unsplash.com/photo-1565439395047-4f4f8a6b4a9e?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Calibre vernier KEX-CV150',
    specs: '150mm · 0.02mm · Carbono',
    material: 'Acero templado',
    badge: '',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=700&q=80',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="featured-products" id="destacados" aria-labelledby="featured-products-title">
      <div className="featured-products-inner">
        <div className="featured-heading">
          <div>
            <p className="section-kicker"><span /> Destacados</p>
            <h2 id="featured-products-title">
              Productos<br /><em>más solicitados</em>
            </h2>
          </div>
        </div>

        <div className="featured-grid">
          {FEATURED_PRODUCTS.map((product) => (
            <article className="featured-card" key={product.name}>
              <div className="featured-image-wrap">
                <img src={product.image} alt="" loading="lazy" />
                {product.badge && (
                  <span className={`featured-badge ${product.badge === 'Nuevo' ? 'featured-badge-dark' : ''}`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="featured-card-copy">
                <h3>{product.name}</h3>
                <p className="product-specs">{product.specs}</p>
                <p className="product-material">{product.material}</p>
                <a className="product-quote" href="#contacto">Cotizar</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
