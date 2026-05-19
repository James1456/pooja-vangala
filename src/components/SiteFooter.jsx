import { NavLink } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="site-footer-brand">
        <img className="site-footer-logo" src="/logo.png" alt="" aria-hidden="true" />
        <p className="site-footer-name">Pooja Vangala</p>
        <p className="site-footer-tagline">Crafted for modern heirlooms</p>
      </div>

      <nav className="site-footer-primary" aria-label="Footer navigation">
        <NavLink to="/">Home</NavLink>
        <span aria-hidden="true">•</span>
        <NavLink to="/collections">Collections</NavLink>
        <span aria-hidden="true">•</span>
        <NavLink to="/categories">Categories</NavLink>
        <span aria-hidden="true">•</span>
        <NavLink to="/making">Making</NavLink>
        <span aria-hidden="true">•</span>
        <NavLink to="/about">About</NavLink>
        <span aria-hidden="true">•</span>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="site-footer-divider" aria-hidden="true" />

      <nav className="site-footer-secondary" aria-label="Footer secondary navigation">
        <a href="mailto:atelier@poojavangala.com">Atelier</a>
        <a href="mailto:press@poojavangala.com">Press</a>
        <a href="mailto:hello@poojavangala.com">Client Care</a>
        <a href="#">Privacy Policy</a>
      </nav>

      <div className="site-footer-meta">
        <p>© 2026 Pooja Vangala. All rights reserved.</p>
        <p>Designed for an elevated couture experience.</p>
      </div>
    </footer>
  );
}
