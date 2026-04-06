import { useEffect, useRef } from 'react';

const speakers = [
  {
    name: 'LUIZ MAZANEK',
    location: 'Curitiba, PR',
    role: 'Liderança Empresarial',
    bio: 'Economista, pós-graduado em Marketing e fundador da Mazanek Palestras e Treinamentos. Mais de 16 anos formando líderes e equipes comerciais em todo o Brasil.',
    initial: 'L',
    delay: '0s',
  },
  {
    name: 'JACKSON SANTOS',
    location: 'Maceió, AL',
    role: 'Reforma Tributária',
    bio: 'Fundador da Patrimone Contabilidade. Referência em Alagoas, atende dezenas de empresas com foco em planejamento e proteção patrimonial.',
    initial: 'J',
    delay: '0.12s',
  },
  {
    name: 'ALAN ORDAKOVSKI',
    location: 'Curitiba, PR',
    role: 'Direito Empresarial',
    bio: 'Advogado especialista em direito empresarial e trabalhista. Atua com NR1, contratos PJ e impactos jurídicos da reforma tributária nas empresas.',
    initial: 'A',
    delay: '0.24s',
  },
];

export function Speakers() {
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
    <section ref={sectionRef} className="section" id="palestrantes">
      <div className="reveal" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
        <span className="section-label">Quem vai falar</span>
        <h2 className="section-title">
          OS <span className="serif">especialistas</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginTop: 16 }}>
          Três profissionais com atuação real no mercado, falando sobre o que muda agora no seu negócio.
        </p>
      </div>

      <div className="speakers-grid">
        {speakers.map((s) => (
          <div
            key={s.name}
            className="glass-card speaker-card reveal"
            style={{ transitionDelay: s.delay }}
          >
            <div className="speaker-photo-wrap">
              <div
                className="speaker-photo"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.25), rgba(201,168,76,0.08))',
                  fontFamily: 'var(--font-title)',
                  fontWeight: 700,
                  fontSize: 48,
                  color: 'var(--gold)',
                }}
              >
                {s.initial}
              </div>
              <div className="speaker-photo-ring" />
            </div>

            <div className="speaker-topic">{s.role}</div>
            <div className="speaker-name">{s.name}</div>
            <div className="speaker-role" style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 4 }}>{s.location}</div>
            <p className="speaker-bio">{s.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
