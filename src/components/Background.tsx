import { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const lightweightMode = window.matchMedia('(max-width: 767px), (pointer: coarse), (prefers-reduced-motion: reduce)').matches;

    const particleCount = lightweightMode ? 14 : Math.min(60, Math.floor((width * height) / 25000));
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      }
    };

    if (!lightweightMode) window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      if (!lightweightMode) {
        // Connections are intentionally desktop-only because this loop is quadratic.
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              ctx.strokeStyle = `rgba(34, 211, 238, ${0.15 * (1 - dist / 120)})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        if (!lightweightMode) {
          const mdx = p.x - mouseX;
          const mdy = p.y - mouseY;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist > 0 && mdist < 150) {
            const force = (150 - mdist) / 150;
            p.x += (mdx / mdist) * force * 0.5;
            p.y += (mdy / mdist) * force * 0.5;
          }
        }

        ctx.fillStyle = `rgba(34, 211, 238, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!lightweightMode) animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      if (!lightweightMode) window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-dark-950" />

      {/* Aurora blobs — layered for depth */}
      <div className="absolute top-[-15%] left-[-10%] w-[70vw] h-[70vw] md:w-[55vw] md:h-[55vw] rounded-full bg-cyber-600/15 md:bg-cyber-600/20 blur-[70px] md:blur-[140px] md:animate-aurora" />
      <div className="absolute top-[15%] right-[-20%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] rounded-full bg-blue-600/10 md:bg-blue-600/15 blur-[70px] md:blur-[140px] md:animate-aurora" style={{ animationDelay: '5s' }} />
      <div className="hidden md:block absolute bottom-[-15%] left-[15%] w-[45vw] h-[45vw] rounded-full bg-neon-purple/10 blur-[140px] animate-aurora" style={{ animationDelay: '10s' }} />
      <div className="hidden md:block absolute top-[40%] left-[40%] w-[35vw] h-[35vw] rounded-full bg-neon-green/8 blur-[120px] animate-aurora" style={{ animationDelay: '7s' }} />

      {/* Subtle conic gradient sheen */}
      <div
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full opacity-[0.015]"
        style={{
          background: 'conic-gradient(from 0deg, transparent, #22d3ee, transparent, #3b82f6, transparent, #8b5cf6, transparent)',
          animation: 'spin 30s linear infinite',
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'var(--grid-animation, grid-move 20s linear infinite)',
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(2, 6, 23, 0.5) 70%, rgba(2, 6, 23, 0.9) 100%)',
        }}
      />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Mouse spotlight */}
      <div
        ref={cursorRef}
        className="hidden md:block absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)',
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
}
