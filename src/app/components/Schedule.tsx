import { useEffect, useRef } from 'react';

const schedule = [
  { time: '14h00', tag: 'Abertura', title: 'Abertura e credenciamento', speaker: '', desc: 'Recepção dos participantes e entrega dos materiais' },
  { time: '14h30', tag: 'Palestra', title: 'Liderança na Nova Economia', speaker: 'Luiz Mazanek', desc: 'O que o mercado cobra do líder empresarial hoje' },
  { time: '15h45', tag: 'Palestra', title: 'Reforma Tributária na Prática', speaker: 'Jackson Santos', desc: 'O que muda no seu negócio e o que fazer antes que chegue a conta' },
  { time: '16h45', tag: 'Intervalo', title: 'Coffee Break + Networking', speaker: '', desc: 'Intervalo com coffee e espaço para conexões' },
  { time: '17h15', tag: 'Palestra', title: 'Proteção Jurídica para o Seu Negócio', speaker: 'Alan Ordakovski', desc: 'Contratos PJ, NR1 e os riscos que você ainda não viu' },
  { time: '18h30', tag: 'Encerramento', title: 'Encerramento', speaker: '', desc: 'Certificados e encerramento oficial' },
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
        <span className="section-label">15 de maio de 2026</span>
        <h2 className="section-title">
          A <span className="serif">programação</span>
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
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 6 }}>
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
