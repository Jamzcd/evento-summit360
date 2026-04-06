import { useEffect, useRef } from 'react';

const stats = [
  { number: '3', label: 'Especialistas' },
  { number: '120', label: 'Vagas únicas' },
  { number: '4h', label: 'de conteúdo' },
  { number: '0', label: 'Transmissões' },
];

export function About() {
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
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" id="sobre">
      <div className="about-grid">
        {/* Left Column */}
        <div className="about-text">
          <div className="reveal">
            <span className="section-label">O evento</span>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Um dia. Três especialistas.<br /><span className="serif">Zero desculpa.</span>
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <p>
              O Brasil acaba de aprovar a maior reforma tributária dos últimos 30 anos e a maioria dos empresários ainda não sabe o que isso muda no preço que cobra, no contrato que assina e no imposto que paga.
            </p>
            <p>
              O Summit Empresarial 360 reúne três especialistas em liderança, contabilidade e direito em um único dia, aqui em Maceió, para falar sem rodeios sobre o que muda e o que você precisa fazer antes que as mudanças cheguem.
            </p>
            <p>
              Sem transmissão online. Sem gravação. Quem não estiver lá, não acessa depois.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s', marginTop: 28 }}>
            <a href="#ingressos" className="btn-primary">
              Participar do Evento
            </a>
          </div>
        </div>

        {/* Right Column — Stats */}
        <div className="stat-cards">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`glass-card stat-card reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
