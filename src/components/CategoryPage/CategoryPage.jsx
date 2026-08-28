import './CategoryPage.css'

const CATEGORY_DATA = {
  abrasivos: {
    title: 'Abrasivos',
    english: 'Abrasives',
    description: 'Soluciones de desbaste, corte y acabado para obtener superficies precisas y resultados consistentes en cada proceso.',
    images: [
      '/abrasivos/1.GRATA.COPA.acerolatonado.webp',
      '/abrasivos/2.GRATA.COPA.espigo.webp',
      '/abrasivos/3.GRATA.CIRCULAR.espigo.webp',
      '/abrasivos/4.GRATA.CIRCULAR.webp',
      '/abrasivos/5.GRATA.CIRCULAR.orificio.webp',
      '/abrasivos/6.GRATA.MATARAYAS.FLAP.espigo.webp',
      '/abrasivos/7.PIEDRAS.ESMERIL.copaRecta.Conica.webp',
      '/abrasivos/9.LIMAS.webp',
      '/abrasivos/8.PIEDRAS.ESMERIL.webp',
    ],
  },
  accesorios: {
    title: 'Accesorios',
    english: 'Accessories',
    description: 'Accesorios profesionales para complementar equipos, optimizar operaciones y mantener cada estación de trabajo lista.',
    images: [
      '/accesorios/1.CONOS.REDUCC..webp',
      '/accesorios/2.CONOS.MORSE.webp',
      '/accesorios/3.CILINDRICOS.webp',
      '/accesorios/4.PTO,GIRATORIO.PRECISION.TORNO.webp',
      '/accesorios/6.PRENSA.GIRATORIA.webp',
      '/accesorios/7.PRENSA.PLANA.BANCO.webp',
      '/accesorios/8.PRENSA.COORDENADAS.webp',
      '/accesorios/5.COPAS.TORNO.webp',
    ],
  },
  corte: {
    title: 'Herramientas de corte',
    english: 'Cutting tools',
    description: 'Herramientas de corte de alto desempeño para mecanizado, perforación y torneado con máxima precisión.',
    images: [
      '/corte/1.BORCA CIL.TUNGS.TISIN.PRUEBA.webp',
      '/corte/1.BORCA CIL.TUNGS.TISIN.webp',
      '/corte/2.FRESAS ESCARIAD. TUNGS.TISIN.webp',
      '/corte/3.BORCA.CIL.M35.HSS.CO.webp',
      '/corte/4.JG.BROCAS.CIL.M35.webp',
      '/corte/5.BROCA.HELICOIDAL.HSS.webp',
      '/corte/6.CENTRO.PUNTO.HSS.webp',
      '/corte/7.BROCA.REDUCCION a MEDIA.webp',
      '/corte/8.RECTIFICADOR.pta.diamante.webp',
      '/corte/12.TERRAJA.HSS.RD-LH. ext13.16pulg.webp',
      '/corte/13.TERRAJA.HSS.RD.LH. ext1pulg.webp',
      '/corte/14.TERRAJA.HSS.RD.LH. ext.1.1-2pulg.webp',
      '/corte/15.TERRAJA.HSS. de 2 a 2.1-2 pulg.webp',
      '/corte/16.TERRAJA.HSS NPT.NPS.webp',
      '/corte/17.BURIL.PTA.RECTA.TUNGS.webp',
      '/corte/18.BURIL.PTA.IZQ.TUNGS.webp',
      '/corte/19.BURIL.PTA DER.TUNGS.webp',
      '/corte/20.BURIL.ISO7.TUNGS.webp',
      '/corte/21.BURIL.ISO9.TUNGS.webp',
      '/corte/22.BURIL.CUADRADO.HSS.webp',
      '/corte/23.BURIL.REDONDO.webp',
      '/corte/24.BURIL.TIPO.CUCHILLA.webp',
      '/corte/24.VOLVEDOR.MACHOS.TERRAJAS.webp',
      '/corte/25.VOLVEDOR.MACHOS.RATCHET.webp',
      '/corte/26.VOLVEDOR.MACHOS.TERRAJAS.webp',
      '/corte/27.VOLVEDOR.MACHOS.RATCHET.webp',
      '/corte/9.BROCAS.MURO.SDS.webp',
      '/corte/25.SIERRASCOPA.webp',
      '/corte/11.3.ROSCADO.MACHOS.webp',
      '/corte/10.FRESAS.ROTATIVAS.webp',
      '/corte/11.1.ROSCADO.MACHOS.webp',
      '/corte/11.2.ROSCADO.MACHOS.webp',
    ],
  },
  maquinaria: {
    title: 'Maquinaria',
    english: 'Industrial machinery',
    description: 'Maquinaria industrial para transformar metales con estabilidad, potencia y el control que exige cada proyecto.',
    images: [
      '/maquinaria/1.WE-310.webp',
      '/maquinaria/2.WG-210.webp',
      '/maquinaria/3.UE-275.webp',
      '/maquinaria/4.UE-916.webp',
      '/maquinaria/5.UE-712.webp',
      '/maquinaria/6.UE-125DV1.webp',
      '/maquinaria/7.BS-115.webp',
      '/maquinaria/8.TORNO.PARALELO.webp',
      '/maquinaria/9.AFILADORA.UNIVERSAL.webp',
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
      '/medicion/2.CALIBRE ANALOGO.pie de rey.webp',
      '/medicion/3.CALIBRE ANALOGO. Pie de Rey, Grande.webp',
      '/medicion/4.TRAZADOR DE ALTURAS.digital.webp',
      '/medicion/5.MICROMETRO DIGITAL. ext.webp',
      '/medicion/6.MICROMETRO.ext.webp',
      '/medicion/7.MICROMETRO INTERIOES.tipo calibre.webp',
      '/medicion/8.MICROMETRO INTERNO.analogo.2ptos.webp',
      '/medicion/9.RELOJ COMPARADOR.webp',
      '/medicion/10.RELOJ PALPADOR.horizontal.webp',
      '/medicion/11.COMPARADOR.alexometro.webp',
      '/medicion/12.CALIBRADOR.neumaticos.webp',
      '/medicion/13.SOPORTEMAGNETICO.column.recta.webp',
      '/medicion/14.SOPORTEMAGNETICO.traba.mecanica.webp',
      '/medicion/15.ESCUADRA.UNIVERSAL.webp',
      '/medicion/16.TRASNPORTADORANGULOS.goniometro.webp',
      '/medicion/17.TRANSPORTADOR.acero.reglafija.webp',
      '/medicion/18.COMPASES.ajustefino.webp',
      '/medicion/19.REGLACERO.mm.pulg.webp',
      '/medicion/20.ESCUADRA.biselada.webp',
      '/medicion/21.GALGAS.valvulas.bujias.webp',
      '/medicion/22.CALIBRADORES.telescopicos.6piezas.webp',
      '/medicion/23.CALIBRADORES.roscas.radios.webp',
      '/medicion/24.CALIBRADORES.radios.jg26piezas.webp',
      '/medicion/25.ESCALA.digital.webp',
      '/medicion/26.MICROMETRO.INTERIORES.3puntos.holtest JG.webp',
      '/medicion/27.MICROMETRO.EXTERNO.barras.patrones.JG.webp',
      '/medicion/28.RAYADOR.metales.webp',
    ],
  },
  fluidos: {
    title: 'Fluidos de corte',
    english: 'Cutting fluids',
    description: 'Refrigerantes y lubricantes para proteger herramientas, controlar temperatura y extender la vida útil del proceso.',
    images: [
      '/fluidos/45HRC.webp',
      '/fluidos/ALUMINIO.webp',
      '/fluidos/BIO.webp',
      '/fluidos/DPEXTRA.webp',
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
        {category.images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${category.title}, producto ${index + 1}`}
          />
        ))}
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