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
              marginBottom: 6,
            }}
          >
            SUMMIT <span style={{ color: 'var(--gold)' }}>Empresarial 360°</span>
          </div>
          <div className="footer-copy">
            © 2025 Summit Empresarial 360. Todos os direitos reservados.
          </div>
        </div>

        <div className="footer-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Contato</a>
          <a href="#">FAQ</a>
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
