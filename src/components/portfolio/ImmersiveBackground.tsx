import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
}

const ImmersiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initPoints();
    };

    // Create a flowing mesh grid of points
    const initPoints = () => {
      pointsRef.current = [];
      const spacing = 60;
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          pointsRef.current.push({
            x,
            y,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      timeRef.current += 0.008;
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#0a0a0b');
      gradient.addColorStop(0.5, '#141415');
      gradient.addColorStop(1, '#1c1d1d');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw points with flowing motion
      pointsRef.current.forEach((point, i) => {
        // Organic wave motion
        const waveX = Math.sin(timeRef.current + point.originY * 0.008) * 20;
        const waveY = Math.cos(timeRef.current * 0.7 + point.originX * 0.006) * 15;

        // Mouse interaction - repel points
        const dx = mouseRef.current.x - point.x;
        const dy = mouseRef.current.y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        let mouseForceX = 0;
        let mouseForceY = 0;

        if (dist < maxDist && dist > 0.1) {
          const force = (1 - dist / maxDist) * 50;
          mouseForceX = -(dx / dist) * force;
          mouseForceY = -(dy / dist) * force;
        }

        // Smooth movement towards target
        const targetX = point.originX + waveX + mouseForceX;
        const targetY = point.originY + waveY + mouseForceY;

        point.vx += (targetX - point.x) * 0.03;
        point.vy += (targetY - point.y) * 0.03;
        point.vx *= 0.92;
        point.vy *= 0.92;
        point.x += point.vx;
        point.y += point.vy;
      });

      // Draw connecting lines with depth
      ctx.lineCap = 'round';
      
      pointsRef.current.forEach((point, i) => {
        pointsRef.current.slice(i + 1).forEach((other) => {
          const dx = point.x - other.x;
          const dy = point.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const opacity = (1 - dist / 100) * 0.4;
            
            // Create gradient line
            const lineGradient = ctx.createLinearGradient(point.x, point.y, other.x, other.y);
            lineGradient.addColorStop(0, `rgba(255, 0, 51, ${opacity})`);
            lineGradient.addColorStop(0.5, `rgba(255, 50, 80, ${opacity * 0.7})`);
            lineGradient.addColorStop(1, `rgba(255, 0, 51, ${opacity})`);

            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = opacity * 2;
            ctx.stroke();
          }
        });
      });

      // Draw glowing nodes at intersections
      pointsRef.current.forEach((point, i) => {
        // Only draw some nodes for performance
        if (i % 3 !== 0) return;

        const pulse = Math.sin(timeRef.current * 2 + i * 0.1) * 0.3 + 0.7;
        const size = 2 * pulse;

        // Outer glow
        const glowGradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size * 4);
        glowGradient.addColorStop(0, `rgba(255, 0, 51, ${0.3 * pulse})`);
        glowGradient.addColorStop(1, 'rgba(255, 0, 51, 0)');

        ctx.beginPath();
        ctx.arc(point.x, point.y, size * 4, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 100, 120, ${0.8 * pulse})`;
        ctx.fill();
      });

      // Add floating particles
      for (let i = 0; i < 30; i++) {
        const t = timeRef.current * 0.5 + i * 100;
        const px = (Math.sin(t * 0.3) * 0.5 + 0.5) * width;
        const py = (Math.cos(t * 0.2) * 0.5 + 0.5) * height;
        const particleSize = Math.sin(t) * 1.5 + 2;
        const particleOpacity = Math.sin(t * 0.5) * 0.3 + 0.3;

        ctx.beginPath();
        ctx.arc(px, py, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 51, ${particleOpacity})`;
        ctx.fill();
      }

      // Subtle vignette effect
      const vignetteGradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) * 0.8
      );
      vignetteGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignetteGradient.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
      ctx.fillStyle = vignetteGradient;
      ctx.fillRect(0, 0, width, height);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default ImmersiveBackground;
