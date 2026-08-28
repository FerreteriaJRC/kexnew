import './WhyKex.css'

const BENEFITS = [
  {
    icon: 'shield',
    title: 'Precisión certificada',
    description: 'Cada herramienta pasa por control dimensional con tolerancias ISO verificadas en laboratorio propio.',
  },
  {
    icon: 'bolt',
    title: 'Entrega técnica',
    description: 'Soporte de ingeniería pre-venta. Selección asistida de parámetros de corte y geometría óptima.',
  },
  {
    icon: 'award',
    title: 'Garantía industrial',
    description: 'Garantía extendida de 24 meses sobre defectos de fabricación en toda la línea de maquinaria.',
  },
  {
    icon: 'team',
    title: 'Equipo especializado',
    description: 'Ingenieros y técnicos con más de 15 años de experiencia en mecanizado, disponibles en campo.',
  },
]

function BenefitIcon({ type }) {
  if (type === 'shield') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 6v5c0 5.2-3.4 8.6-8 10-4.6-1.4-8-4.8-8-10V6l8-3Z" /></svg>
  }

  if (type === 'bolt') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 2-9 11h7l-1 9 9-12h-7l1-8Z" /></svg>
  }

  if (type === 'award') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4.5" /><path d="m8.5 12-1 9 4.5-3 4.5 3-1-9" /></svg>
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3.5 20c.3-3.2 2-5 5.5-5s5.2 1.8 5.5 5M15 15c3.4-.3 5.2 1.4 5.5 4.5" /></svg>
}

export default function WhyKex() {
  return (
    <section className="why-kex" id="nosotros" aria-labelledby="why-kex-title">
      <span className="why-kex-watermark" aria-hidden="true">KEX</span>
      <div className="why-kex-layout">
        <div className="why-kex-copy">
          <p className="section-kicker"><span /> ¿Por qué KEX?</p>
          <h2 id="why-kex-title">
            25 años<br />de ingeniería<br /><em>aplicada.</em>
          </h2>
          <p className="why-kex-description">
            Desde 1992, KEX ha equipado a los talleres y plantas industriales más exigentes de Latinoamérica con herramientas que cumplen especificaciones críticas de proceso. No vendemos productos. Resolvemos problemas de fabricación.
          </p>
          <div className="why-kex-standards" aria-label="Certificaciones y estándares">
            <span />
            <strong>ISO 9001 · DIN · ANSI</strong>
            <span />
          </div>
        </div>

        <div className="benefits-grid">
          {BENEFITS.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <BenefitIcon type={benefit.icon} />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
