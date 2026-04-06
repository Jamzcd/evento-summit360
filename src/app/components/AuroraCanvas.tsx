import { useEffect, useRef } from 'react';

interface Wave {
  amplitude: number;
  period: number;
  speed: number;
  phase: number;
  r: number;
  g: number;
  b: number;
  alpha: number;
  yOffset: number;
}

export function AuroraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const waves: Wave[] = [
      { amplitude: 180, period: 0.0018, speed: 0.004, phase: 0, r: 10, g: 26, b: 90, alpha: 0.35, yOffset: 0.3 },
      { amplitude: 140, period: 0.0022, speed: 0.003, phase: 2, r: 201, g: 168, b: 76, alpha: 0.08, yOffset: 0.5 },
      { amplitude: 200, period: 0.0015, speed: 0.0025, phase: 4, r: 5, g: 20, b: 80, alpha: 0.4, yOffset: 0.65 },
      { amplitude: 120, period: 0.0025, speed: 0.005, phase: 1.5, r: 15, g: 40, b: 120, alpha: 0.25, yOffset: 0.4 },
      { amplitude: 160, period: 0.002, speed: 0.0035, phase: 3.5, r: 201, g: 168, b: 76, alpha: 0.05, yOffset: 0.75 },
      { amplitude: 100, period: 0.003, speed: 0.006, phase: 5, r: 5, g: 15, b: 60, alpha: 0.3, yOffset: 0.2 },
    ];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function render() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      for (const wave of waves) {
        ctx.beginPath();
        const yBase = canvas.height * wave.yOffset;

        for (let x = 0; x <= canvas.width; x += 2) {
          const y = yBase + Math.sin(x * wave.period + wave.phase + t * wave.speed) * wave.amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, yBase - wave.amplitude, 0, yBase + wave.amplitude);
        grad.addColorStop(0, `rgba(${wave.r},${wave.g},${wave.b},${wave.alpha})`);
        grad.addColorStop(1, `rgba(${wave.r},${wave.g},${wave.b},0)`);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
      t++;
      animId = requestAnimationFrame(render);
    }

    resize();
    render();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.85,
      }}
    />
  );
}
