import { useEffect, useState } from 'react';

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Palestrantes', href: '#palestrantes' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Ingressos', href: '#ingressos' },
  { label: 'Local', href: '#local' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        SUMMIT <span>360</span>
      </a>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <a href="#ingressos" className="btn-primary" style={{ padding: '10px 24px', fontSize: '11px' }}>
        Garantir Vaga
      </a>
    </nav>
  );
}
