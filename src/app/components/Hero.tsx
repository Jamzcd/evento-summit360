import { useEffect, useState } from 'react';

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 8v4l3 3"/>
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid-overlay" />
      <div className="hero-gradient" />

      {/* Hero speakers image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero-speakers.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          opacity: 0.45,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          15 de maio · Maceió, AL
        </div>

        <h1 className="hero-title">
          SUMMIT
          <span className="serif">Empresarial</span>
          360
        </h1>

        <p className="hero-subtitle">
          Quem entende antes, decide melhor. Um dia, três especialistas e tudo que o empresário alagoano precisa saber sobre a nova realidade tributária do Brasil.
        </p>

        <div className="hero-actions">
          <a href="#ingressos" className="btn-primary">
            Garantir Minha Vaga
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#sobre" className="btn-outline">
            Saiba mais
          </a>
        </div>

        {/* Speaker avatars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 40 }}>
          <div style={{ display: 'flex' }}>
            {[
              { initial: 'L', title: 'Luiz Mazanek' },
              { initial: 'J', title: 'Jackson Santos' },
              { initial: 'A', title: 'Alan Ordakovski' },
            ].map((s, i) => (
              <div
                key={s.initial}
                title={s.title}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.3), rgba(201,168,76,0.1))',
                  border: '2px solid var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-title)',
                  fontWeight: 700,
                  fontSize: 15,
                  color: 'var(--gold)',
                  marginLeft: i === 0 ? 0 : -10,
                  zIndex: 3 - i,
                  position: 'relative',
                }}
              >
                {s.initial}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            <strong style={{ color: 'rgba(255,255,255,0.85)', display: 'block' }}>3 especialistas confirmados</strong>
            Luiz Mazanek · Jackson Santos · Alan Ordakovski
          </div>
        </div>

        <div className="hero-meta" style={{ marginTop: 32 }}>
          <div className="hero-meta-item">
            <CalendarIcon />
            <span>15 Mai 2026</span>
          </div>
          <div className="hero-meta-item">
            <ClockIcon />
            <span>14h – 18h30</span>
          </div>
          <div className="hero-meta-item">
            <UsersIcon />
            <span>120 vagas</span>
          </div>
          <div className="hero-meta-item">
            <MapPinIcon />
            <span>Presencial</span>
          </div>
        </div>
      </div>
    </section>
  );
}
