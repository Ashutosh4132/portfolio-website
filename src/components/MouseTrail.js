import React, { useEffect, useRef } from "react";

const MouseTrail = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const shootingStars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    const mouse = { x: 0, y: 0 };

    const spaceColors = [
      "#ffffff", "#00ffff", "#ffccff", "#b8d9ff", "#ffffcc"
    ];

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      for (let i = 0; i < 4; i++) {
        particles.current.push({
          x: mouse.x,
          y: mouse.y,
          alpha: 1,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.6,
          speedY: Math.random() * -0.6 - 0.2,
          color: spaceColors[Math.floor(Math.random() * spaceColors.length)],
          shape: Math.random() > 0.85 ? 'star' : 'circle',
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    const drawStar = (ctx, x, y, r, alpha, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.moveTo(0, 0 - r);
      for (let i = 0; i < 5; i++) {
        ctx.rotate(Math.PI / 5);
        ctx.lineTo(0, 0 - r * 0.5);
        ctx.rotate(Math.PI / 5);
        ctx.lineTo(0, 0 - r);
      }
      ctx.closePath();
      ctx.fillStyle = hexToRgba(color, alpha * 0.5); // half opacity
      ctx.shadowBlur = 10;
      ctx.shadowColor = color;
      ctx.fill();
      ctx.restore();
    };

    const hexToRgba = (hex, alpha) => {
      const h = hex.replace("#", "");
      const bigint = parseInt(h, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const maybeCreateShootingStar = () => {
      if (Math.random() < 0.006) {
        shootingStars.current.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.5,
          size: 1 + Math.random() * 1.5,
          length: 50 + Math.random() * 40,
          speed: 2 + Math.random() * 1.5,
          alpha: 0.4,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      maybeCreateShootingStar();

      // Shooting stars
      shootingStars.current = shootingStars.current.filter(s => s.alpha > 0);
      shootingStars.current.forEach(s => {
        s.x += s.speed;
        s.y += s.speed * 0.3;
        s.alpha -= 0.003;

        ctx.beginPath();
        const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.length, s.y - s.length * 0.3);
        grad.addColorStop(0, `rgba(255,255,255,${s.alpha})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.size;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.length, s.y - s.length * 0.3);
        ctx.stroke();
      });

      // Trail particles
      particles.current = particles.current.filter(p => p.alpha > 0.01);
      particles.current.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= 0.008;

        if (p.shape === "star") {
          drawStar(ctx, p.x, p.y, p.size * 1.5, p.alpha, p.color);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = hexToRgba(p.color, p.alpha * 0.5); // half opacity
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        zIndex: 999,
      }}
    />
  );
};

export default MouseTrail;
