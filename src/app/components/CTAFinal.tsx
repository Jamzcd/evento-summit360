import { useEffect, useRef } from 'react';

export function CTAFinal() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="cta-final">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto' }}>
        <div className="reveal">
          <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>
            Não fica de fora
          </span>
          <h2 className="cta-final-title">
            O BRASIL MUDOU AS REGRAS.<br /><span className="serif">Você está pronto?</span>
          </h2>
        </div>

        <p className="cta-final-sub reveal" style={{ transitionDelay: '0.1s' }}>
          120 vagas. Uma tarde. Três especialistas. O que você aprender no dia 15 de maio fica no seu negócio para sempre.
        </p>

        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            flexWrap: 'wrap',
            transitionDelay: '0.2s',
          }}
        >
          <a href="#ingressos" className="btn-primary" style={{ fontSize: '14px', padding: '18px 44px' }}>
            Garantir Minha Vaga Agora
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div
          className="reveal"
          style={{
            marginTop: 24,
            fontSize: 12,
            color: 'var(--text-secondary)',
            textAlign: 'center',
            transitionDelay: '0.3s',
          }}
        >
          15 de maio de 2026 · Instituto Meraki · Maceió, AL
        </div>
      </div>
    </section>
  );
}
