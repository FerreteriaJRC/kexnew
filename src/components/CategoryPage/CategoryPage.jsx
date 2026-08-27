import './CategoryPage.css'

const CATEGORY_DATA = {
  abrasivos: {
    title: 'Abrasivos',
    english: 'Abrasives',
    description: 'Soluciones de desbaste, corte y acabado para obtener superficies precisas y resultados consistentes en cada proceso.',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85',
    ],
  },
  accesorios: {
    title: 'Accesorios',
    english: 'Accessories',
    description: 'Accesorios profesionales para complementar equipos, optimizar operaciones y mantener cada estación de trabajo lista.',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85',
    ],
  },
  corte: {
    title: 'Herramientas de corte',
    english: 'Cutting tools',
    description: 'Herramientas de corte de alto desempeño para mecanizado, perforación y torneado con máxima precisión.',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581093458791-9d42e3c6e3f5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1565439395047-4f4f8a6b4a9e?auto=format&fit=crop&w=1200&q=85',
    ],
  },
  maquinaria: {
    title: 'Maquinaria',
    english: 'Industrial machinery',
    description: 'Maquinaria industrial para transformar metales con estabilidad, potencia y el control que exige cada proyecto.',
    images: [
      'https://images.unsplash.com/photo-1565439395047-4f4f8a6b4a9e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581093458791-9d42e3c6e3f5?auto=format&fit=crop&w=1200&q=85',
    ],
  },
  materiales: {
    title: 'Materiales',
    english: 'Materials',
    description: 'Encuentra el mejor complemento para la industria metalmecánica. Plásticos de ingeniería para piezas competentes, resistentes y precisas.',
    images: [
      'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85',
    ],
  },
  medicion: {
    title: 'Instrumentos de medición',
    english: 'Measuring instruments',
    description: 'Instrumentos confiables para verificar dimensiones, tolerancias y calidad en cada etapa de fabricación.',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581093458791-9d42e3c6e3f5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1565439395047-4f4f8a6b4a9e?auto=format&fit=crop&w=1200&q=85',
    ],
  },
  fluidos: {
    title: 'Fluidos de corte',
    english: 'Cutting fluids',
    description: 'Refrigerantes y lubricantes para proteger herramientas, controlar temperatura y extender la vida útil del proceso.',
    images: [
      'https://images.unsplash.com/photo-1581093458791-9d42e3c6e3f5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1565439395047-4f4f8a6b4a9e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85',
    ],
  },
}

export function getCategoryFromPath(pathname) {
  const category = pathname.toLowerCase().split('/').filter(Boolean).pop()
  return CATEGORY_DATA[category] ? category : null
}

export default function CategoryPage({ categoryKey }) {
  const category = CATEGORY_DATA[categoryKey] || CATEGORY_DATA.materiales

  return (
    <main className="category-page">
      <section className="category-banner" aria-labelledby="category-title">
        <div className="category-banner-inner">
          <h1 id="category-title">{category.title}</h1>
          <p>{category.english}</p>
        </div>
      </section>

      <section className="category-intro">
        <p>{category.description}</p>
      </section>

      <section className="category-gallery" aria-label={`Productos de ${category.title}`}>
        <div className="category-gallery-column">
          <img src={category.images[0]} alt={`${category.title}, selección de productos`} />
          <img src={category.images[1]} alt={`${category.title}, aplicación industrial`} />
        </div>
        <div className="category-gallery-column category-gallery-featured">
          <img src={category.images[2]} alt={`${category.title}, soluciones KEX`} />
        </div>
      </section>

      <nav className="category-navigation" aria-label="Otras categorías">
        {Object.keys(CATEGORY_DATA).map((key) => (
          <a className={key === categoryKey ? 'is-active' : ''} href={`/categorias/${key}`} key={key}>
            {CATEGORY_DATA[key].title}
          </a>
        ))}
      </nav>
    </main>
  )
}
