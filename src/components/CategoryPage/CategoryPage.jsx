import './CategoryPage.css'

const CATEGORY_DATA = {
  abrasivos: {
    title: 'Abrasivos',
    english: 'Abrasives',
    description: 'Soluciones de desbaste, corte y acabado para obtener superficies precisas y resultados consistentes en cada proceso.',
    images: [
      '/abrasivos/1.GRATA.COPA.acerolatonado.webp',
      '/abrasivos/4.GRATA.CIRCULAR.webp',
      '/abrasivos/9.LIMAS.webp',
    ],
  },
  accesorios: {
    title: 'Accesorios',
    english: 'Accessories',
    description: 'Accesorios profesionales para complementar equipos, optimizar operaciones y mantener cada estación de trabajo lista.',
    images: [
      '/accesorios/1.CONOS.REDUCC..webp',
      '/accesorios/4.PTO,GIRATORIO.PRECISION.TORNO.webp',
      '/accesorios/8.PRENSA.COORDENADAS.webp',
    ],
  },
  corte: {
    title: 'Herramientas de corte',
    english: 'Cutting tools',
    description: 'Herramientas de corte de alto desempeño para mecanizado, perforación y torneado con máxima precisión.',
    images: [
      '/corte/1.BORCA CIL.TUNGS.TISIN.webp',
      '/corte/5.BROCA.HELICOIDAL.HSS.webp',
      '/corte/10.FRESAS.ROTATIVAS.webp',
    ],
  },
  maquinaria: {
    title: 'Maquinaria',
    english: 'Industrial machinery',
    description: 'Maquinaria industrial para transformar metales con estabilidad, potencia y el control que exige cada proyecto.',
    images: [
      '/maquinaria/1.WE-310.webp',
      '/maquinaria/4.UE-916.webp',
      '/maquinaria/8.TORNO.PARALELO.webp',
    ],
  },
  materiales: {
    title: 'Materiales',
    english: 'Materials',
    description: 'Encuentra el mejor complemento para la industria metalmecánica. Plásticos de ingeniería para piezas competentes, resistentes y precisas.',
    images: [
      '/materiales/EMPACK.webp',
      '/materiales/NYLON.webp',
      '/materiales/TEFLON.webp',
    ],
  },
  medicion: {
    title: 'Instrumentos de medición',
    english: 'Measuring instruments',
    description: 'Instrumentos confiables para verificar dimensiones, tolerancias y calidad en cada etapa de fabricación.',
    images: [
      '/medicion/1.CALIBRE DIGITAL.pie de rey.webp',
      '/medicion/5.MICROMETRO DIGITAL. ext.webp',
      '/medicion/9.RELOJ COMPARADOR.webp',
    ],
  },
  fluidos: {
    title: 'Fluidos de corte',
    english: 'Cutting fluids',
    description: 'Refrigerantes y lubricantes para proteger herramientas, controlar temperatura y extender la vida útil del proceso.',
    images: [
      '/fluidos/45HRC.webp',
      '/fluidos/ALUMINIO.webp',
      '/fluidos/H2Ox.webp',
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
