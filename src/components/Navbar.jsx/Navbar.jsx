import { useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Productos", href: "#catalogo" },
  { label: "Industrias", href: "#industrias" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Soporte", href: "#contacto" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="navbar-shell">
        <a href="/" className="brand" aria-label="KEX Tools, inicio">
          <img src="/logo.svg" alt="KEX Tools" />
        </a>

        <nav className="desktop-nav" aria-label="Navegacion principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="quote-button">Cotizar</a>

        <button
          onClick={() => setOpen(!open)}
          className="menu-button"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="quote-button">Cotizar</a>
        </div>
      )}
    </header>
  );
}