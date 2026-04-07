# Summit Empresarial 360

**Deploy:** https://summit-empresarial-360.netlify.app/

Landing page do **Summit Empresarial 360** — evento presencial realizado em Maceió, AL no dia 15 de maio de 2026.

## Sobre o evento

Um dia, três especialistas e tudo que o empresário alagoano precisa saber sobre a nova realidade tributária do Brasil.

- **Data:** 15 de maio de 2026, quinta-feira
- **Horário:** 14h às 18h30
- **Local:** Instituto Meraki — Av. Alm. Álvaro Calheiros, 1120 · Mangabeiras · Maceió, AL
- **Vagas:** 120 (sem transmissão online)

### Palestrantes

| Nome | Tema | Origem |
|------|------|--------|
| Luiz Mazanek | Liderança Empresarial | Curitiba, PR |
| Jackson Santos | Reforma Tributária | Maceió, AL |
| Alan Ordakovski | Direito Empresarial | Curitiba, PR |

## Stack

- **React 18** + **TypeScript**
- **Vite 6**
- **Tailwind CSS 4**
- **Radix UI** (componentes acessíveis)
- **Framer Motion / Motion**

## Estrutura

```
src/
├── app/
│   ├── App.tsx
│   └── components/
│       ├── Hero.tsx          # Seção principal com imagem dos palestrantes
│       ├── About.tsx         # Sobre o evento + stats
│       ├── PainSection.tsx   # Seção de dores do empresário
│       ├── Speakers.tsx      # Cards dos palestrantes
│       ├── Schedule.tsx      # Programação do dia
│       ├── Tickets.tsx       # Lotes de ingresso (via Sympla)
│       ├── Location.tsx      # Local + mapa
│       ├── CTAFinal.tsx      # Call-to-action final
│       ├── Nav.tsx           # Navegação
│       ├── Footer.tsx        # Rodapé
│       └── AuroraCanvas.tsx  # Efeito aurora animado no fundo
└── styles/
    ├── summit.css            # Estilos principais do evento
    ├── theme.css             # Variáveis de cor e tipografia
    └── fonts.css             # Fontes customizadas
public/
└── hero-speakers.jpg         # Imagem dos 3 palestrantes (adicionar manualmente)
```

## Como rodar

```bash
# Instalar dependências
pnpm install

# Servidor de desenvolvimento (porta 5173)
pnpm vite

# Build de produção
pnpm build
```

## Ingressos

Vendas via **Sympla** em dois lotes:

- **1º Lote** — R$ 299 *(aberto agora)*
- **2º Lote** — R$ 399 *(após esgotamento do 1º lote)*

Inclusos em ambos: acesso ao evento completo, coffee break, certificado de participação e material dos palestrantes.
