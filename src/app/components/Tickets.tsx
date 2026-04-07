import { useEffect, useRef } from 'react';

const SYMPLA_URL = 'https://www.sympla.com.br/evento/summit-empresarial-360/3365840';

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const included = [
  'Acesso ao evento completo',
  'Coffee break',
  'Certificado de participação',
  'Material dos palestrantes',
];

export function Tickets() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
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
    <section
      ref={sectionRef}
      className="section"
      id="ingressos"
      style={{
        background:
          'linear-gradient(180deg, rgba(2,8,24,0) 0%, rgba(10,26,74,0.3) 50%, rgba(2,8,24,0) 100%)',
      }}
    >
      <div className="reveal" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
        <span className="section-label">Ingressos via Sympla</span>
        <h2 className="section-title">
          GARANTA SUA <span className="serif">vaga</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginTop: 16, maxWidth: 560, margin: '16px auto 0' }}>
          O evento é presencial e exclusivo. Quem não estiver lá no dia 15 não tem como acessar o conteúdo depois, porque não haverá transmissão, gravação ou um lote adicional — a única forma de participar é garantindo sua vaga agora.
        </p>
      </div>

      <div className="tickets-grid" style={{ maxWidth: 800, margin: '48px auto 0', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        {/* Lote 1 */}
        <div className="glass-card ticket-card featured reveal" style={{ transitionDelay: '0s' }}>
          <div className="ticket-featured-badge">Aberto agora</div>
          <div className="ticket-type">1º Lote</div>

          <div
            style={{
              margin: '16px 0',
              padding: '12px 16px',
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: 8,
              fontSize: 13,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.6,
            }}
          >
            Vagas limitadas neste valor. Quando fechar, sobe e não volta.
          </div>

          <div className="ticket-divider" />

          <ul className="ticket-features">
            {included.map((f) => (
              <li key={f}>
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>

          <a
            href={SYMPLA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Garantir Agora
          </a>
        </div>

        {/* Lote 2 */}
        <div className="glass-card ticket-card reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="ticket-type">2º Lote</div>

          <div
            style={{
              margin: '16px 0',
              padding: '12px 16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 8,
              fontSize: 13,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
            }}
          >
            Disponível após o encerramento do 1º lote. Sem terceiro lote.
          </div>

          <div className="ticket-divider" />

          <ul className="ticket-features">
            {included.map((f) => (
              <li key={f}>
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>

          <a
            href={SYMPLA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ width: '100%', justifyContent: 'center', opacity: 0.5, pointerEvents: 'none' as const }}
          >
            Em breve
          </a>
        </div>
      </div>

      {/* Urgency Bar */}
      <div className="urgency-bar reveal" style={{ marginTop: 40 }}>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', textAlign: 'center', width: '100%' }}>
          As vagas são limitadas e os lotes não reabrem. Garanta pelo menor valor disponível agora.
        </span>
      </div>
    </section>
  );
}
