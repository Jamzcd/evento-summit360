import { useEffect, useRef } from 'react';

const pains = [
  {
    number: '01',
    title: 'Reforma tributária no radar, mas sem clareza',
    desc: 'Você sabe que algo mudou na legislação, mas não sabe ao certo o que isso muda no seu negócio, no seu imposto e no seu preço.',
  },
  {
    number: '02',
    title: 'Contador que cumpre obrigação, mas não protege',
    desc: 'Sua empresa tem contador, mas você não consegue lembrar da última vez que ele te ligou para avisar sobre algo importante.',
  },
  {
    number: '03',
    title: 'Contratos que podem ser um passivo esperando para acontecer',
    desc: 'Você usa prestadores PJ, assina contratos e nunca parou para revisar se eles realmente te protegem ou se estão te expondo.',
  },
  {
    number: '04',
    title: 'Time que depende de você para tudo',
    desc: 'Você lidera, mas percebe que sem a sua presença as coisas param. A equipe executa, mas não decide.',
  },
  {
    number: '05',
    title: 'Mercado mudando mais rápido do que você consegue acompanhar',
    desc: 'As regras do jogo estão diferentes e você sente que está sempre um passo atrás de quem entendeu antes.',
  },
  {
    number: '06',
    title: 'Informação demais, clareza de menos',
    desc: 'Você consome conteúdo, lê sobre reforma tributária e gestão, mas na hora de decidir ainda fica com dúvida sobre o que realmente fazer.',
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
    <section ref={sectionRef} style={{ background: 'rgba(2,8,24,0.5)', padding: '0' }} id="identifica">
      <div className="section">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <span className="section-label">Você se identifica?</span>
          <h2 className="section-title">
            Esses desafios estão<br /><span className="serif">te custando dinheiro?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginTop: 16 }}>
            Se você respondeu sim para pelo menos um desses pontos, o Summit Empresarial 360 foi feito para você.
          </p>
        </div>

        <div className="pain-grid">
          {pains.map((p, i) => (
            <div
              key={p.number}
              className="glass-card pain-card reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-title)',
                  fontWeight: 700,
                  fontSize: 32,
                  color: 'rgba(201,168,76,0.2)',
                  lineHeight: 1,
                  marginBottom: 12,
                  letterSpacing: '-0.02em',
                }}
              >
                {p.number}
              </div>
              <div className="pain-title">{p.title}</div>
              <p className="pain-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: 48, transitionDelay: '0.5s' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 20 }}>
            Se você se identificou com qualquer um desses pontos, o Summit tem uma resposta para você.
          </p>
          <a href="#ingressos" className="btn-primary">
            Garantir minha vaga
          </a>
        </div>
      </div>
    </section>
  );
}
