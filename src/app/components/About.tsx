import { useEffect, useRef } from 'react';

const stats = [
  { number: '3', label: 'Especialistas' },
  { number: '4h', label: 'de conteúdo' },
  { number: '100%', label: 'Presencial' },
  { number: 'MCZ', label: 'Maceió, AL' },
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
            <span className="section-label">Por que esse evento existe</span>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Um dia para entender o que muda —<br />
              <span className="serif">antes de pagar o preço de não saber.</span>
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <p>
              O Brasil acabou de aprovar a maior reforma tributária dos últimos 30 anos. Ela já está em vigor e vai afetar o preço que você cobra, o imposto que você paga e o contrato que você assina.
            </p>
            <p>
              A maioria dos empresários vai descobrir isso na hora errada. O Summit Empresarial 360 existe para que você não seja um deles.
            </p>
            <p>
              Em uma tarde, três especialistas falam sem rodeios sobre liderança, tributação e direito empresarial, com exemplos reais, linguagem direta e zero enrolação.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s', marginTop: 28 }}>
            <a href="https://www.sympla.com.br/evento/summit-empresarial-360/3365840" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Garantir Minha Vaga
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
