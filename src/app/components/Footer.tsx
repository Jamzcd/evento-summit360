export function Footer() {
  return (
    <footer
      style={{
        background: '#020818',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="footer">
        <div>
          <div
            style={{
              fontFamily: 'var(--font-title)',
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            SUMMIT <span style={{ color: 'var(--gold)' }}>Empresarial 360</span>
          </div>
          <div className="footer-copy" style={{ lineHeight: 1.8 }}>
            15 de maio de 2026 · 14h às 18h30<br />
            Instituto Meraki · Mangabeiras · Maceió, AL<br />
            Ingressos via Sympla
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 11,
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.06em',
            }}
          >
            Realização: Patrimone Contabilidade · Produção: Hubstack
          </div>
        </div>

        <div className="footer-links">
          <a href="#sobre">Sobre</a>
          <a href="#palestrantes">Palestrantes</a>
          <a href="#programacao">Programação</a>
          <a href="#ingressos">Ingressos</a>
          <a href="#local">Local</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>

      {/* Gold line at very bottom */}
      <div
        style={{
          height: 2,
          background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
          opacity: 0.4,
        }}
      />
    </footer>
  );
}
