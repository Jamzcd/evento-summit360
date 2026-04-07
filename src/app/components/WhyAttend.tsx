import { useEffect, useRef } from 'react';

const reasons = [
  {
    number: '01',
    text: 'Conteúdo direto de quem atua no mercado, sem teoria que não funciona na prática.',
  },
  {
    number: '02',
    text: 'Networking com empresários, contadores, advogados e gestores de Maceió e região.',
  },
  {
    number: '03',
    text: 'Você sai do evento sabendo o que fazer no seu enquadramento tributário, nos seus contratos e na sua liderança.',
  },
  {
    number: '04',
    text: 'Certificado de participação incluso para todos os presentes.',
  },
];

export function WhyAttend() {
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
    <section ref={sectionRef} className="section" id="por-que">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
        {/* Left */}
        <div>
          <div className="reveal">
            <span className="section-label">Por que participar</span>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              O empresário que entende as novas regras<br />
              <span className="serif">sai na frente.</span>
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
              A reforma tributária é a maior mudança fiscal dos últimos 30 anos e ela já está em vigor. Quem entende o que muda antes, paga menos, erra menos e toma decisões melhores do que o concorrente.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8 }}>
              O Summit Empresarial 360 reúne três especialistas em liderança, contabilidade e direito para entregar exatamente isso: clareza sobre o que mudou e o que você precisa fazer agora.
            </p>
          </div>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {reasons.map((r, i) => (
            <div
              key={r.number}
              className="glass-card reveal"
              style={{
                transitionDelay: `${i * 0.1}s`,
                padding: '20px 24px',
                display: 'flex',
                gap: 20,
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-title)',
                  fontWeight: 700,
                  fontSize: 28,
                  color: 'rgba(201,168,76,0.25)',
                  lineHeight: 1,
                  flexShrink: 0,
                  minWidth: 36,
                }}
              >
                {r.number}
              </span>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #por-que > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
