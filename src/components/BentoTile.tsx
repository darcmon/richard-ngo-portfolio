import { useState, useEffect, useRef, ReactNode } from 'react';

export type GlowColor = 'cyan' | 'purple' | 'pink' | 'green' | 'orange';

interface BentoTileProps {
  id?: string;
  children: ReactNode;
  className?: string;
  glowColor?: GlowColor;
  delay?: number;
}

const glowColorMap: Record<GlowColor, string> = {
  cyan: 'rgba(0, 220, 255, 0.3)',
  purple: 'rgba(139, 92, 246, 0.3)',
  pink: 'rgba(236, 72, 153, 0.3)',
  green: 'rgba(34, 197, 94, 0.3)',
  orange: 'rgba(249, 115, 22, 0.3)',
};

const BentoTile: React.FC<BentoTileProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={tileRef}
      className={`
        relative overflow-hidden rounded-lg
        bg-gradient-to-br from-gray-900/90 to-gray-950/95
        border border-cyan-500/20
        backdrop-blur-md
        transition-all duration-700 ease-out
        hover:border-cyan-400/40 hover:scale-[1.02]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${className}
      `}
      style={{
        boxShadow: `
          0 0 30px -10px ${glowColorMap[glowColor]},
          inset 0 1px 0 rgba(255,255,255,0.05)
        `,
      }}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50" />

      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.1) 2px, rgba(0,255,255,0.1) 4px)',
        }}
      />

      <div className="relative z-10 p-6">{children}</div>
    </div>
  );
};

export default BentoTile;
