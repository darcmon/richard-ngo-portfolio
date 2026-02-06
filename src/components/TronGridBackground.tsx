import { useEffect, useRef } from 'react';

interface LightTrailConfig {
  isHorizontal: boolean;
  speed: number;
  length: number;
  opacity: number;
  x: number;
  y: number;
  targetX?: number;
  targetY?: number;
}

class LightTrail implements LightTrailConfig {
  isHorizontal: boolean = true;
  speed: number = 0;
  length: number = 0;
  opacity: number = 0;
  x: number = 0;
  y: number = 0;
  targetX: number = 0;
  targetY: number = 0;

  private canvasWidth: number;
  private canvasHeight: number;
  private gridSize: number;

  constructor(canvasWidth: number, canvasHeight: number, gridSize: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.gridSize = gridSize;
    this.reset();
  }

  reset(): void {
    const isHorizontal = Math.random() > 0.5;
    this.isHorizontal = isHorizontal;
    this.speed = 2 + Math.random() * 4;
    this.length = 80 + Math.random() * 120;
    this.opacity = 0.6 + Math.random() * 0.4;

    if (isHorizontal) {
      this.y = Math.floor(Math.random() * (this.canvasHeight / this.gridSize)) * this.gridSize;
      this.x = -this.length;
      this.targetX = this.canvasWidth + this.length;
    } else {
      this.x = Math.floor(Math.random() * (this.canvasWidth / this.gridSize)) * this.gridSize;
      this.y = -this.length;
      this.targetY = this.canvasHeight + this.length;
    }
  }

  update(): void {
    if (this.isHorizontal) {
      this.x += this.speed;
      if (this.x > this.targetX) this.reset();
    } else {
      this.y += this.speed;
      if (this.y > this.targetY) this.reset();
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const gradient = this.isHorizontal
      ? ctx.createLinearGradient(this.x - this.length, 0, this.x, 0)
      : ctx.createLinearGradient(0, this.y - this.length, 0, this.y);

    gradient.addColorStop(0, 'rgba(0, 255, 255, 0)');
    gradient.addColorStop(0.5, `rgba(0, 255, 255, ${this.opacity * 0.5})`);
    gradient.addColorStop(1, `rgba(0, 255, 255, ${this.opacity})`);

    ctx.beginPath();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.shadowColor = 'rgba(0, 255, 255, 1)';
    ctx.shadowBlur = 15;

    if (this.isHorizontal) {
      ctx.moveTo(this.x - this.length, this.y);
      ctx.lineTo(this.x, this.y);
    } else {
      ctx.moveTo(this.x, this.y - this.length);
      ctx.lineTo(this.x, this.y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  updateDimensions(canvasWidth: number, canvasHeight: number): void {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }
}

interface TronGridBackgroundProps {
  gridSize?: number;
  trailCount?: number;
  primaryColor?: string;
  backgroundColor?: string;
}

const TronGridBackground: React.FC<TronGridBackgroundProps> = ({
  gridSize = 60,
  trailCount = 8,
  primaryColor = 'rgba(0, 220, 255, 0.15)',
  backgroundColor = '#0a0a0f',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let lightTrails: LightTrail[] = [];

    const resize = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Update trail dimensions
      lightTrails.forEach(trail => {
        trail.updateDimensions(canvas.width, canvas.height);
      });
    };

    resize();
    window.addEventListener('resize', resize);

    // Initialize light trails
    for (let i = 0; i < trailCount; i++) {
      const trail = new LightTrail(canvas.width, canvas.height, gridSize);
      trail.x = Math.random() * canvas.width;
      trail.y = Math.random() * canvas.height;
      lightTrails.push(trail);
    }

    const drawGrid = (): void => {
      // Clear canvas with dark background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle radial gradient for depth
      const radialGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.7
      );
      radialGradient.addColorStop(0, 'rgba(0, 30, 40, 0.3)');
      radialGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw intersection points with glow
      ctx.fillStyle = 'rgba(0, 220, 255, 0.3)';
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Update and draw light trails
      lightTrails.forEach(trail => {
        trail.update();
        trail.draw(ctx);
      });
    };

    const animate = (): void => {
      drawGrid();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [gridSize, trailCount, primaryColor, backgroundColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default TronGridBackground;
