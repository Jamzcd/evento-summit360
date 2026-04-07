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
          <img
            src="/logo-evento.png"
            alt="Summit Empresarial 360"
            style={{ height: 36, width: 'auto', display: 'block', marginBottom: 12, opacity: 0.9 }}
          />
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
