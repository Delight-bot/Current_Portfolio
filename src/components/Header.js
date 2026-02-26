import React, { useState, useEffect } from 'react';
import './Header.css';

const navLinks = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'      },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery',    href: '#gallery'    },
  { label: 'Contact',    href: '#contact'    },
];

const Header = () => {
  const [active, setActive]     = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Shrink header on scroll + track active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => document.getElementById(l.href.slice(1)));
      const current = sections.find(s => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 80 && rect.bottom > 80;
      });
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        {/* Logo / name */}
        <button className="header-logo" onClick={() => handleNav('#home')}>
          DN
        </button>

        {/* Desktop nav */}
        <nav className="header-nav">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              className={`nav-link ${active === href.slice(1) ? 'active' : ''}`}
              onClick={() => handleNav(href)}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(({ label, href }) => (
          <button
            key={href}
            className={`mobile-nav-link ${active === href.slice(1) ? 'active' : ''}`}
            onClick={() => handleNav(href)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
