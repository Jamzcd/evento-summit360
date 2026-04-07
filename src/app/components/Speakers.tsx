import { useEffect, useRef } from 'react';

const speakers = [
  {
    name: 'LUIZ MAZANEK',
    location: 'Curitiba, PR',
    role: 'Liderança Empresarial',
    bio: 'Economista, pós-graduado em Marketing, fundador da Mazanek Palestras e Treinamentos. Mais de 16 anos formando líderes e equipes comerciais em todo o Brasil. No Summit, ele fala sobre o que separa o empresário que cresce do que apenas reage.',
    photo: '/luiz.jpg',
    delay: '0s',
  },
  {
    name: 'JACKSON SANTOS',
    location: 'Maceió, AL',
    role: 'Contabilidade e Reforma Tributária',
    bio: 'Fundador da Patrimone Contabilidade, referência em Alagoas. Cuida da contabilidade de dezenas de empresas e conhece de perto o que a reforma tributária muda na prática. No Summit, ele traduz a legislação em decisões concretas para o dono do negócio.',
    photo: '/jackson.jpg',
    delay: '0.12s',
  },
  {
    name: 'ALAN ORDAKOVSKI',
    location: 'Curitiba, PR',
    role: 'Direito Empresarial',
    bio: 'Advogado especialista em direito empresarial e trabalhista. Atua com NR1, contratos PJ e proteção jurídica de empresas. No Summit, ele mostra os riscos que a maioria dos empresários carrega sem saber e como corrigir antes que virem processo.',
    photo: '/alan.jpg',
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
      <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
        <span className="section-label">Quem vai falar</span>
        <h2 className="section-title">
          Três especialistas. Três respostas que o seu<br /><span className="serif">negócio precisa agora.</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginTop: 16 }}>
          Nenhum deles vai subir ao palco para motivar. Cada um vem para entregar informação que você vai usar na segunda-feira de manhã.
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
              <img
                src={s.photo}
                alt={s.name}
                className="speaker-photo"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
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
