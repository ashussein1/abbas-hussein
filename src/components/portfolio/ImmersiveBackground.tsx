import { useEffect, useRef } from 'react';

const ImmersiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
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
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    // Stars for space effect
    const stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    // Floating geometric shapes
    const shapes: { x: number; y: number; size: number; rotation: number; rotationSpeed: number; type: 'triangle' | 'square' | 'hexagon'; depth: number }[] = [];
    for (let i = 0; i < 15; i++) {
      shapes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 60 + 30,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        type: ['triangle', 'square', 'hexagon'][Math.floor(Math.random() * 3)] as 'triangle' | 'square' | 'hexagon',
        depth: Math.random() * 0.5 + 0.3,
      });
    }

    // Energy beams
    const beams: { startX: number; progress: number; speed: number; width: number }[] = [];
    for (let i = 0; i < 5; i++) {
      beams.push({
        startX: Math.random() * width,
        progress: Math.random(),
        speed: Math.random() * 0.002 + 0.001,
        width: Math.random() * 2 + 1,
      });
    }

    const drawShape = (x: number, y: number, size: number, rotation: number, type: string, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();

      if (type === 'triangle') {
        ctx.moveTo(0, -size);
        ctx.lineTo(size * 0.866, size * 0.5);
        ctx.lineTo(-size * 0.866, size * 0.5);
        ctx.closePath();
      } else if (type === 'square') {
        ctx.rect(-size / 2, -size / 2, size, size);
      } else if (type === 'hexagon') {
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const px = Math.cos(angle) * size;
          const py = Math.sin(angle) * size;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
      }

      ctx.strokeStyle = `rgba(255, 0, 51, ${opacity * 0.4})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Inner glow
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
      gradient.addColorStop(0, `rgba(255, 0, 51, ${opacity * 0.1})`);
      gradient.addColorStop(1, 'rgba(255, 0, 51, 0)');
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      timeRef.current += 0.01;

      // Create deep space gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#0a0a0b');
      gradient.addColorStop(0.3, '#0d0d0e');
      gradient.addColorStop(0.7, '#111112');
      gradient.addColorStop(1, '#141415');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw and update stars with parallax
      stars.forEach((star) => {
        const parallaxX = (mouseRef.current.x - width / 2) * star.speed * 0.05;
        const parallaxY = (mouseRef.current.y - height / 2) * star.speed * 0.05;

        const drawX = star.x + parallaxX;
        const drawY = star.y + parallaxY;

        // Twinkle effect
        const twinkle = Math.sin(timeRef.current * 3 + star.x) * 0.3 + 0.7;
        
        ctx.beginPath();
        ctx.arc(drawX, drawY, star.size * twinkle, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.fill();

        // Some stars have red tint
        if (star.opacity > 0.7) {
          ctx.beginPath();
          ctx.arc(drawX, drawY, star.size * 3, 0, Math.PI * 2);
          const starGlow = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, star.size * 3);
          starGlow.addColorStop(0, `rgba(255, 50, 80, ${star.opacity * 0.2})`);
          starGlow.addColorStop(1, 'rgba(255, 0, 51, 0)');
          ctx.fillStyle = starGlow;
          ctx.fill();
        }
      });

      // Draw energy beams
      beams.forEach((beam) => {
        beam.progress += beam.speed;
        if (beam.progress > 1.5) {
          beam.progress = -0.5;
          beam.startX = Math.random() * width;
        }

        const y = beam.progress * height * 1.5 - height * 0.25;
        const beamGradient = ctx.createLinearGradient(0, y - 100, 0, y + 100);
        beamGradient.addColorStop(0, 'rgba(255, 0, 51, 0)');
        beamGradient.addColorStop(0.5, `rgba(255, 0, 51, 0.1)`);
        beamGradient.addColorStop(1, 'rgba(255, 0, 51, 0)');

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.strokeStyle = beamGradient;
        ctx.lineWidth = beam.width;
        ctx.stroke();
      });

      // Draw floating shapes with parallax
      shapes.forEach((shape) => {
        const parallaxX = (mouseRef.current.x - width / 2) * shape.depth * 0.1;
        const parallaxY = (mouseRef.current.y - height / 2) * shape.depth * 0.1;

        shape.rotation += shape.rotationSpeed;
        
        // Floating motion
        const floatY = Math.sin(timeRef.current + shape.x * 0.01) * 20;
        const floatX = Math.cos(timeRef.current * 0.7 + shape.y * 0.01) * 15;

        drawShape(
          shape.x + parallaxX + floatX,
          shape.y + parallaxY + floatY,
          shape.size * shape.depth,
          shape.rotation,
          shape.type,
          shape.depth
        );
      });

      // Ambient glow spots
      const spots = [
        { x: width * 0.2, y: height * 0.3 },
        { x: width * 0.8, y: height * 0.6 },
        { x: width * 0.5, y: height * 0.8 },
      ];

      spots.forEach((spot, i) => {
        const pulse = Math.sin(timeRef.current + i) * 0.2 + 0.8;
        const glowGradient = ctx.createRadialGradient(spot.x, spot.y, 0, spot.x, spot.y, 300 * pulse);
        glowGradient.addColorStop(0, `rgba(255, 0, 51, 0.05)`);
        glowGradient.addColorStop(0.5, `rgba(255, 0, 51, 0.02)`);
        glowGradient.addColorStop(1, 'rgba(255, 0, 51, 0)');
        ctx.fillStyle = glowGradient;
        ctx.fillRect(0, 0, width, height);
      });

      // Mouse follow glow
      const mouseGlow = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 200
      );
      mouseGlow.addColorStop(0, 'rgba(255, 0, 51, 0.08)');
      mouseGlow.addColorStop(0.5, 'rgba(255, 0, 51, 0.02)');
      mouseGlow.addColorStop(1, 'rgba(255, 0, 51, 0)');
      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, width, height);

      // Vignette
      const vignetteGradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) * 0.7
      );
      vignetteGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignetteGradient.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
      ctx.fillStyle = vignetteGradient;
      ctx.fillRect(0, 0, width, height);

      // Scanlines effect (subtle)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      for (let i = 0; i < height; i += 3) {
        ctx.fillRect(0, i, width, 1);
      }

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
