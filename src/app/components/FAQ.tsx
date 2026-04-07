import { useEffect, useRef, useState } from 'react';

const faqs = [
  {
    q: 'O evento terá transmissão online ou gravação?',
    a: 'Não. O Summit Empresarial 360 é presencial e exclusivo. Não haverá transmissão ao vivo, gravação ou acesso posterior ao conteúdo. Quem não estiver lá no dia 15 não terá como acessar o que foi apresentado.',
  },
  {
    q: 'O que está incluso no ingresso?',
    a: 'Acesso completo ao evento, coffee break, certificado de participação e material dos palestrantes.',
  },
  {
    q: 'Haverá mais de dois lotes?',
    a: 'Não. São apenas dois lotes. Quando o segundo encerrar, as vendas encerram junto.',
  },
  {
    q: 'O evento é indicado para quem está começando um negócio?',
    a: 'Sim. O conteúdo é relevante para quem já tem um negócio em operação e para quem está estruturando um, especialmente pelo contexto da reforma tributária e das obrigações jurídicas que impactam qualquer CNPJ.',
  },
  {
    q: 'Terei direito ao certificado de participação?',
    a: 'Sim. Todo participante presente recebe certificado ao final do evento.',
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="glass-card reveal"
      style={{
        transitionDelay: `${index * 0.08}s`,
        borderRadius: 12,
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={() => setOpen((v) => !v)}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 24px',
          gap: 16,
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.5, color: 'rgba(255,255,255,0.9)' }}>
          {q}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            flexShrink: 0,
            color: 'var(--gold)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {open && (
        <div
          style={{
            padding: '0 24px 20px',
            fontSize: 14,
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 16,
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

export function FAQ() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" id="faq" style={{ maxWidth: 720, margin: '0 auto' }}>
      <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
        <h2 className="section-title">
          Perguntas <span className="serif">Frequentes</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginTop: 16 }}>
          Alguma dúvida antes de garantir sua vaga?
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {faqs.map((faq, i) => (
          <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
        ))}
      </div>

      <div className="reveal" style={{ textAlign: 'center', marginTop: 40, transitionDelay: '0.45s' }}>
        <a
          href="https://wa.me/558298765432"
          className="btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 6 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
          Falar com o suporte
        </a>
      </div>
    </section>
  );
}
