import { useEffect, useRef } from 'react';

const pains = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Estagnação Estratégica',
    desc: 'Você sente que seu negócio parou de crescer e não sabe qual o próximo passo com clareza e segurança.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Falta de Tempo',
    desc: 'Você trabalha mais do que nunca, mas o resultado não acompanha o esforço. Seu tempo não está sendo bem investido.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Rede Limitada',
    desc: 'Suas conexões de negócios estão restritas ao mesmo círculo. Falta acesso a parceiros, investidores e referências.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Mercado em Mudança',
    desc: 'O mundo muda em velocidade acelerada. Ficar para trás não é uma opção — mas entender as tendências é difícil.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    title: 'Falta de Visibilidade',
    desc: 'Mesmo com um produto excelente, você não consegue se posicionar como referência e autoridade no seu nicho.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Resultados Insatisfatórios',
    desc: 'O crescimento financeiro não reflete o potencial da sua empresa. É hora de mudar a abordagem e a mentalidade.',
  },
];

export function PainSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 80);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: 'rgba(2,8,24,0.5)', padding: '0' }}>
      <div className="section">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 0' }}>
          <span className="section-label">Você se identifica?</span>
          <h2 className="section-title">
            ESSES DESAFIOS ESTÃO <span className="serif">te travando</span>?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginTop: 16 }}>
            Se você respondeu sim para pelo menos um desses pontos, o Summit Empresarial 360° foi
            criado exatamente para você.
          </p>
        </div>

        <div className="pain-grid">
          {pains.map((p, i) => (
            <div
              key={p.title}
              className={`glass-card pain-card reveal`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="pain-icon">{p.icon}</div>
              <div className="pain-title">{p.title}</div>
              <p className="pain-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
