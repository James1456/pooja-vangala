import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const leftLinks = [
  { label: "Home", to: "/" },
  { label: "Collections", to: "/collections" },
  { label: "Categories", to: "/categories" },
];

const rightLinks = [
  { label: "Making", to: "/making" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function SiteHeader() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, [location.pathname]);

  const headerClassName = `site-header${isHome && !isScrolled ? " is-transparent" : " is-solid"}`;

  return (
    <header className={headerClassName}>
      <nav className="header-links header-links-left" aria-label="Primary navigation left">
        {leftLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) => `header-link${isActive ? " is-active" : ""}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <NavLink to="/" className="brand-lockup" aria-label="Pooja Vangala home">
        <p className="brand-name">Pooja Vangala</p>
      </NavLink>

      <nav className="header-links header-links-right" aria-label="Primary navigation right">
        {rightLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) => `header-link${isActive ? " is-active" : ""}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
