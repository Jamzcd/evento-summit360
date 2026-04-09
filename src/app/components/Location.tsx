import { useEffect, useRef } from 'react';

const infos = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Endereço',
    value: 'Instituto Meraki Treinamentos\nAv. Alm. Álvaro Calheiros, 1120\nMangabeiras · Maceió, AL · CEP 57035-558',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    label: 'Data',
    value: '15 de maio de 2026, quinta-feira',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    label: 'Horário',
    value: '14h às 18h30\nCredenciamento a partir das 14h',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4"/>
        <circle cx="7" cy="20" r="1"/><circle cx="18" cy="20" r="1"/>
      </svg>
    ),
    label: 'Ingresso',
    value: 'Apresentar confirmação de compra na entrada',
  },
];

export function Location() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" id="local">
      <div className="reveal">
        <span className="section-label">Onde acontece</span>
        <h2 className="section-title">
          Informações <span className="serif">do local</span>
        </h2>
      </div>

      <div className="location-grid">
        {/* Map — clicável, abre Google Maps */}
        <div className="reveal">
          <a
            href="https://share.google/WOf661PuuPlKzgTIL"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', position: 'relative', textDecoration: 'none' }}
            aria-label="Abrir localização no Google Maps"
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '16/9',
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid rgba(201,168,76,0.15)',
                position: 'relative',
              }}
            >
              <iframe
                title="Instituto Meraki"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', pointerEvents: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-35.7415%2C-9.6660%2C-35.7215%2C-9.6460&layer=mapnik&marker=-9.6560%2C-35.7315"
              />
              {/* Overlay transparente captura o clique e abre Google Maps */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  padding: 12,
                }}
              >
                <span
                  style={{
                    background: 'rgba(2,8,24,0.75)',
                    color: 'var(--gold)',
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    padding: '6px 12px',
                    borderRadius: 6,
                    border: '1px solid rgba(201,168,76,0.3)',
                  }}
                >
                  ABRIR NO GOOGLE MAPS ↗
                </span>
              </div>
            </div>
          </a>
          <div
            style={{
              marginTop: 16,
              padding: '12px 16px',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: 8,
              fontSize: 12,
              color: 'var(--text-secondary)',
              textAlign: 'center',
              letterSpacing: '0.05em',
            }}
          >
            📍 Instituto Meraki · Mangabeiras · Maceió, AL
          </div>
        </div>

        {/* Info */}
        <div>
          {infos.map((info, i) => (
            <div
              key={info.label}
              className="location-info-item reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="location-info-icon">{info.icon}</div>
              <div>
                <div className="location-info-label">{info.label}</div>
                <div className="location-info-value" style={{ whiteSpace: 'pre-line' }}>
                  {info.value}
                </div>
              </div>
            </div>
          ))}

          <div className="reveal" style={{ transitionDelay: '0.35s', marginTop: 32 }}>
            <a href="https://www.sympla.com.br/evento/summit-empresarial-360/3365840" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Garantir Minha Vaga
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
