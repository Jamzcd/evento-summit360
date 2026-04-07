import { useEffect, useRef } from 'react';

const schedule = [
  {
    time: '14h00',
    speaker: '',
    tag: 'Abertura',
    title: 'Credenciamento',
    desc: 'Recepção e credenciamento dos participantes. Retirada do kit do evento e coffee de boas-vindas.',
  },
  {
    time: '14h30',
    speaker: 'LUIZ MAZANEK',
    tag: 'Palestra',
    title: 'Liderança na Nova Economia',
    desc: 'O mercado mudou e o empresário que não lidera, reage. Luiz Mazanek fala sobre o que o mercado exige do líder hoje, como construir times de alta performance que funcionam sem depender de você e como tomar decisões melhores em cenário de constante transformação.',
  },
  {
    time: '15h30',
    speaker: 'JACKSON SANTOS',
    tag: 'Palestra',
    title: 'Reforma Tributária na Prática',
    desc: 'A maior mudança fiscal dos últimos 30 anos já está em vigor. Jackson Santos traduz a legislação em decisões concretas: o que muda no seu enquadramento, nos seus créditos tributários e no preço que você cobra a partir de agora.',
  },
  {
    time: '16h30',
    speaker: '',
    tag: 'Intervalo',
    title: 'Coffee Break e Networking',
    desc: 'Espaço para conexões entre empresários, contadores, advogados e gestores. Troque experiências e construa relações que vão além do evento.',
  },
  {
    time: '17h00',
    speaker: 'ALAN ORDAKOVSKI',
    tag: 'Palestra',
    title: 'Proteção Jurídica para o Seu Negócio',
    desc: 'Contratos PJ, NR1 e os impactos jurídicos da reforma tributária nas relações de trabalho. Alan Ordakovski mostra os riscos que a maioria dos empresários carrega sem saber — e o que fazer antes que se tornem passivo.',
  },
  {
    time: '18h00',
    speaker: 'PAULO MINUZZI',
    tag: 'Palestra',
    title: 'Como se Adaptar à Reforma Tributária Sem Parar sua Operação',
    desc: 'A última palestra do Summit une estratégia e execução. Paulo Minuzzi apresenta um roteiro prático para implementar as mudanças exigidas pela reforma sem travar o dia a dia da empresa — adaptando processos, precificação e estrutura sem perder competitividade nem margem.',
  },
  {
    time: '18h50',
    speaker: '',
    tag: 'Encerramento',
    title: 'Encerramento e Certificados',
    desc: 'Entrega de certificados de participação e encerramento oficial do Summit Empresarial 360.',
  },
];

export function Schedule() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    const listObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.timeline-item').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (listRef.current) listObserver.observe(listRef.current);

    return () => {
      observer.disconnect();
      listObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      id="programacao"
      style={{ maxWidth: 720, margin: '0 auto' }}
    >
      <div className="reveal" style={{ marginBottom: 60 }}>
        <span className="section-label">Programação</span>
        <h2 className="section-title">
          O que vai <span className="serif">acontecer</span>
        </h2>
      </div>

      <div className="schedule-timeline" ref={listRef}>
        <div className="timeline-line" />
        {schedule.map((item, i) => (
          <div key={`${item.time}-${i}`} className="timeline-item">
            <div className="timeline-time">{item.time}</div>
            <div className="timeline-dot-wrap">
              <div className="timeline-dot" />
            </div>
            <div className="glass-card timeline-content">
              <div className="timeline-content-tag">{item.tag}</div>
              <div className="timeline-content-title">{item.title}</div>
              {item.speaker && (
                <div className="timeline-content-speaker">
                  <svg
                    style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle', color: 'var(--gold)' }}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  {item.speaker}
                </div>
              )}
              {item.desc && (
                <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 8, lineHeight: 1.7 }}>
                  {item.desc}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
