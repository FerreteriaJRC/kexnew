import { useState } from 'react'
import './ContactSection.css'

const CONTACT_DETAILS = [
  { icon: 'phone', label: 'Línea técnica', value: '+57 317 4232645' },
  { icon: 'mail', label: 'Correo comercial', value: 'ventas@kex.com.co', href: 'mailto:ventas@kex.com.co' },
  { icon: 'pin', label: 'Oficina central', value: '' },
]

function ContactIcon({ type }) {
  if (type === 'phone') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h4l2 5-2.5 1.8a14 14 0 0 0 5.7 5.7L16 13l5 2v4c0 1.1-.9 2-2 2C10.7 21 3 13.3 3 5c0-1.1.9-2 2-2Z" /></svg>
  }
  if (type === 'mail') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></svg>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></svg>
}

export default function ContactSection() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      })

      if (!response.ok) throw new Error('No fue posible enviar la consulta')

      event.currentTarget.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="section-kicker"><span /> Contacto</p>
          <h2 id="contact-title">
            Hablemos de<br />su <em>proyecto.</em>
          </h2>
          <p className="contact-description">
            Complete el formulario o contáctenos directamente. Respondemos consultas técnicas, cotizaciones y requerimientos de proyecto con profundidad real.
          </p>

          <div className="contact-details">
            {CONTACT_DETAILS.map((detail) => (
              <div className="contact-detail" key={detail.label}>
                <span className="contact-icon"><ContactIcon type={detail.icon} /></span>
                <div>
                  <span className="contact-label">{detail.label}</span>
                  {detail.href ? (
                    <a className="contact-value" href={detail.href}>{detail.value}</a>
                  ) : (
                    <span className="contact-value">{detail.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Nombre completo
              <input type="text" name="name" placeholder="Juan Martínez" required />
            </label>
            <label>
              Empresa
              <input type="text" name="company" placeholder="Metales S.A. de C.V." required />
            </label>
          </div>
          <label>
            Correo electrónico
            <input type="email" name="email" placeholder="jmartinez@empresa.com" required />
          </label>
          <label>
            Requerimiento / consulta
            <textarea name="message" placeholder="Describa su necesidad técnica o el producto que busca..." required />
          </label>
          <button type="submit" className="contact-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando...' : status === 'sent' ? 'Consulta enviada' : 'Enviar consulta'} <span aria-hidden="true">-&gt;</span>
          </button>
          {status === 'error' && <p role="alert" className="contact-form-message error">No pudimos enviar la consulta. Inténtalo de nuevo.</p>}
          {status === 'sent' && <p role="status" className="contact-form-message success">Recibimos tu consulta. Te responderemos pronto.</p>}
        </form>
      </div>
    </section>
  )
}
