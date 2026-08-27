import './Industries.css'

const INDUSTRIES = [
  {
    icon: 'factory',
    title: 'Automotriz',
    description: 'Mecanizado de componentes de motor, transmisión y chasis',
  },
  {
    icon: 'plane',
    title: 'Aeroespacial',
    description: 'Herramientas certificadas AS9100 para titanio y aluminio',
  },
  {
    icon: 'energy',
    title: 'Energía',
    description: 'Equipos para fabricación de turbinas y estructuras de plantas',
  },
  {
    icon: 'gear',
    title: 'Metalurgia',
    description: 'Soluciones integrales para talleres de mecanizado y fundición',
  },
  {
    icon: 'wrench',
    title: 'Construcción',
    description: 'Herramientas de potencia y medición para obra pesada',
  },
  {
    icon: 'train',
    title: 'Ferroviario',
    description: 'Mantenimiento y fabricación de rodamiento y estructura',
  },
]

function IndustryIcon({ type }) {
  const common = { viewBox: '0 0 32 32', 'aria-hidden': true }

  if (type === 'factory') {
    return <svg {...common}><path d="M4 27V13l7 4V9l8 5V7h9v20H4Z" /><path d="M8 22h2m4 0h2m4 0h2m4 0h2M8 27v-4m6 4v-4m6 4v-4m6 4v-4" /></svg>
  }
  if (type === 'plane') {
    return <svg {...common}><path d="m4 18 24-9-9 11-3 8-3-7-9-3Z" /><path d="m16 20-5-8m1 14 7-7" /></svg>
  }
  if (type === 'energy') {
    return <svg {...common}><path d="m18 3-12 15h8l-2 11 12-16h-8l2-10Z" /></svg>
  }
  if (type === 'gear') {
    return <svg {...common}><path d="m19 4 2 2 3-1 3 5-2 2v4l2 2-3 5-3-1-3 2-1 3H11l-1-3-3-2-3 1-3-5 2-2v-4l-2-2 3-5 3 1 3-2 1-3h6l2 3Z" /><circle cx="14" cy="14" r="4" /></svg>
  }
  if (type === 'wrench') {
    return <svg {...common}><path d="m20 5-3 3 7 7-4 4-7-7-8 8a3 3 0 1 1-4-4l8-8-1-3 3-3 3 1 3-3 3 3Z" /></svg>
  }
  return <svg {...common}><path d="M4 13h24v10H4zM8 13V9h7v4m3 0V6h6v7" /><path d="M8 23v3m16-3v3M4 17h24" /></svg>
}

export default function Industries() {
  return (
    <section className="industries" id="industrias" aria-labelledby="industries-title">
      <div className="industries-inner">
        <div className="industries-heading">
          <p className="section-kicker"><span /> Sectores</p>
          <h2 id="industries-title">Industrias<br />que atendemos</h2>
        </div>

        <div className="industries-grid">
          {INDUSTRIES.map((industry) => (
            <article className="industry-card" key={industry.title}>
              <IndustryIcon type={industry.icon} />
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
