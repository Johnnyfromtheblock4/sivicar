import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Servizi", href: "#servizi" },
  { label: "Card", href: "#card" },
  { label: "Contatti", href: "#contatti" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`top-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav-inner">
          <a href="#home" className="brand" onClick={closeMenu}>
            <img src="/sivicar-logo.png" alt="CarWash by Sivicar" />
            <div className="brand-text">
              <span className="brand-title">CarWash</span>
              <span className="brand-subtitle">by Sivicar</span>
            </div>
          </a>

          <nav className={`desktop-nav`}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Apri menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
