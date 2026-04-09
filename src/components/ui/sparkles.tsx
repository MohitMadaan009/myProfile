import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize = 0.6,
    maxSize = 1.4,
    speed = 1,
    particleColor = "#ffffff",
    particleDensity = 100,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext("2d");
      if (renderCtx) {
        setContext(renderCtx);
      }
    }
  }, []);

  useEffect(() => {
    if (!context || !canvasRef.current) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const canvas = canvasRef.current;

    // Resize canvas to fill parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      opacitySpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speedX = (Math.random() - 0.5) * speed;
        this.speedY = (Math.random() - 0.5) * speed;
        this.opacity = Math.random();
        this.opacitySpeed = (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1);
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity += this.opacitySpeed;

        if (this.opacity <= 0 || this.opacity >= 1) {
          this.opacitySpeed = -this.opacitySpeed;
        }

        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
      }

      draw() {
        if (!context) return;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        let color = particleColor;
        // Basic hex to rgba conversion
        if (color.startsWith("#")) {
          const r = parseInt(color.slice(1, 3), 16) || 255;
          const g = parseInt(color.slice(3, 5), 16) || 255;
          const b = parseInt(color.slice(5, 7), 16) || 255;
          color = `rgba(${r}, ${g}, ${b}, ${Math.max(0, Math.min(1, this.opacity))})`;
        } else if (color === "transparent") {
          color = "transparent"
        }

        context.fillStyle = color;
        context.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const area = canvas.width * canvas.height;
      // Calculate quantity based on density constraint (e.g. density is approx particles per 400x400 area)
      const quantity = Math.floor((area / (400 * 400)) * particleDensity);

      for (let i = 0; i < quantity; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      if (background && background !== "transparent") {
        context.fillStyle = background;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [context, background, minSize, maxSize, speed, particleColor, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("w-full h-full block absolute inset-0 mix-blend-screen pointer-events-none", className)}
      style={{
        backgroundColor: background || "transparent",
      }}
    />
  );
};
