"use client";

type DividerVariant = 'wave' | 'drip' | 'curve' | 'liquid';
type DividerPosition = 'top' | 'bottom';

interface SectionDividerProps {
  variant?: DividerVariant;
  position?: DividerPosition;
  color?: string;
  flip?: boolean;
}

export function SectionDivider({ 
  variant = 'drip', 
  position = 'bottom',
  color = 'var(--background-charcoal)',
  flip = false
}: SectionDividerProps) {
  const getDividerPath = () => {
    switch (variant) {
      case 'liquid':
        // Viscous liquid dripping effect
        return 'M0,96L60,122.7C120,149,240,203,360,240C480,277,600,299,720,261.3C840,224,960,128,1080,128C1200,128,1320,224,1380,272L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z';
      case 'drip':
        // Heavy drips  
        return 'M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,149.3C672,139,768,181,864,186.7C960,192,1056,160,1152,133.3C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z';
      case 'wave':
        // Smooth wave pattern
        return 'M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,106.7C672,117,768,171,864,181.3C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z';
      case 'curve':
        // Single large curve
        return 'M0,192L1440,64L1440,0L0,0Z';
      default:
        return 'M0,160L1440,160L1440,0L0,0Z';
    }
  };

  const rotation = position === 'bottom' 
    ? (flip ? 'rotate(180deg) scaleX(-1)' : 'rotate(180deg)')
    : (flip ? 'scaleX(-1)' : 'none');

  return (
    <div 
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 'clamp(80px, 15vw, 150px)',
        lineHeight: 0,
        transform: rotation,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <svg 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          width: '100%', 
          height: '100%',
          display: 'block',
        }}
      >
        <path 
          d={getDividerPath()} 
          fill={color}
        />
      </svg>
    </div>
  );
}
