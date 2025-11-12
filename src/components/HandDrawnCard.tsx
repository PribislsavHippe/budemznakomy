import { ReactNode } from "react";

interface HandDrawnCardProps {
  children: ReactNode;
  className?: string;
}

export function HandDrawnCard({ children, className = "" }: HandDrawnCardProps) {
  // Generate slightly different random paths for each card
  const wobble = Math.random() * 2 - 1;
  
  return (
    <div className={`relative ${className}`}>
      {/* SVG hand-drawn border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: 'visible' }}
      >
        <path
          d={`
            M ${8 + wobble} ${4 + wobble * 0.5}
            L ${12 + wobble} ${2 + wobble}
            Q ${20 + wobble * 1.5} ${1 + wobble} ${40 + wobble} ${2 + wobble * 0.8}
            L ${60 + wobble * 0.7} ${3 + wobble}
            Q ${80 + wobble} ${2.5 + wobble * 0.5} 98% ${4 + wobble}
            L 99% ${8 + wobble * 0.6}
            Q 99.5% ${15 + wobble} 99% ${30 + wobble * 0.8}
            L 99.2% ${60 + wobble}
            Q 99.5% ${80 + wobble * 0.7} 98.5% 96%
            L ${95 + wobble} 97.5%
            Q ${80 + wobble * 0.8} 99% ${60 + wobble} 98.5%
            L ${40 + wobble * 0.6} 98%
            Q ${20 + wobble} 98.5% ${8 + wobble * 1.2} 97%
            L ${3 + wobble} ${94 + wobble}
            Q ${1 + wobble * 0.5} ${80 + wobble} ${2 + wobble} ${60 + wobble * 0.7}
            L ${2.5 + wobble} ${40 + wobble}
            Q ${1.5 + wobble * 0.8} ${20 + wobble} ${3 + wobble} ${10 + wobble * 0.9}
            Z
          `}
          fill="white"
          stroke="#1E1E1E"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
}
