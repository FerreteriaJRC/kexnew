import './TechnicalCta.css'

export default function TechnicalCta() {
  return (
    <section className="technical-cta" aria-labelledby="technical-cta-title">
      <div className="technical-cta-inner">
        <div>
          <h2 id="technical-cta-title">
            ¿Necesita asesoría<br />técnica especializada?
          </h2>
          <p>Nuestro equipo de ingenieros responde en menos de 4 horas hábiles.</p>
        </div>
        <a className="technical-cta-button" href="#contacto">Contactar ahora</a>
      </div>
    </section>
  )
}
