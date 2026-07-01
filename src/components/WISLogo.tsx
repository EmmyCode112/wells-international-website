import React from 'react';

interface WISLogoProps {
  className?: string;
  size?: number;
}

export const WISLogo: React.FC<WISLogoProps> = ({ className = '', size = 120 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circular background */}
      <circle cx="100" cy="100" r="96" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
      <circle cx="100" cy="100" r="92" fill="#FFFFFF" stroke="#B91C1C" strokeWidth="1" strokeDasharray="3 3" />
      
      {/* 1. Mortarboard / Graduation Cap on Top */}
      <g id="mortarboard" transform="translate(0, -6)">
        {/* Cap Diamond */}
        <path d="M100 18 L162 42 L100 66 L38 42 Z" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M100 22 L154 42 L100 62 L46 42 Z" fill="#991B1B" opacity="0.3" />
        {/* Cap Base */}
        <path d="M68 47.5 V56 C68 62 82 65 100 65 C118 65 132 62 132 56 V47.5" fill="none" stroke="#7F1D1D" strokeWidth="3" strokeLinecap="round" />
        <path d="M70 48 V54 C70 59 83 62 100 62 C117 62 130 59 130 54 V48" fill="#B91C1C" />
        {/* Tassel */}
        <path d="M100 42 C101 42 102 44 102 47 C102 50 101 56 101 56 L104 68 H101 V74 H99 V68 H96 L99 56 C99 56 98 50 98 47 C98 44 99 42 100 42 Z" fill="#F59E0B" />
        <circle cx="100" cy="42" r="2.5" fill="#F59E0B" />
      </g>

      {/* 2. Main Shield (WIS Shield) */}
      <g id="shield">
        {/* Shield Outer Gold Border */}
        <path 
          d="M50 64 C50 120 72 142 100 155 C128 142 150 120 150 64 C150 56 128 54 100 54 C72 54 50 56 50 64 Z" 
          fill="#1E1B4B" 
          stroke="#F59E0B" 
          strokeWidth="3.5" 
          strokeLinejoin="round" 
        />
        {/* Inner Shield border */}
        <path 
          d="M55 67 C55 116 75 137 100 149 C125 137 145 116 145 67 C145 61 126 59 100 59 C74 59 55 61 55 67 Z" 
          fill="#2E2A72" 
          stroke="#FFFFFF" 
          strokeWidth="1.5" 
        />

        {/* 3. Open Book inside Shield */}
        <g id="book" transform="translate(0, 4)">
          {/* Book Pages */}
          <path d="M100 86 C88 80 74 81 64 85 V109 C74 105 88 104 100 110" fill="#FFFFFF" stroke="#1E1B4B" strokeWidth="1" strokeLinejoin="round" />
          <path d="M100 86 C112 80 126 81 136 85 V109 C126 105 112 104 100 110" fill="#FFFFFF" stroke="#1E1B4B" strokeWidth="1" strokeLinejoin="round" />
          {/* Middle Spine */}
          <path d="M100 86 V110" stroke="#1E1B4B" strokeWidth="1.5" />
          {/* Dynamic Lines (Text Lines) on Book Pages */}
          <path d="M68 91 C76 89 86 89 94 92 M68 96 C76 94 86 94 94 97 M68 101 C76 99 86 99 94 102" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />
          <path d="M132 91 C124 89 114 89 106 92 M132 96 C124 94 114 94 106 97 M132 101 C124 99 114 99 106 102" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />

          {/* Book WIS Lettering */}
          <text x="76" y="102" fill="#1E1B4B" fontSize="11" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">W</text>
          <text x="96" y="102" fill="#1E1B4B" fontSize="11" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">I</text>
          <text x="114" y="102" fill="#1E1B4B" fontSize="11" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">S</text>
        </g>

        {/* 4. "WELLS" Text inside Shield */}
        <text 
          x="100" 
          y="128" 
          fill="#FFFFFF" 
          fontSize="14" 
          fontWeight="900" 
          fontFamily="sans-serif" 
          textAnchor="middle" 
          letterSpacing="1"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
        >
          WELLS
        </text>

        {/* 5. "INTERNATIONAL SCHOOLS" in Shield Footer */}
        <text 
          x="100" 
          y="139" 
          fill="#F59E0B" 
          fontSize="6.5" 
          fontWeight="800" 
          fontFamily="sans-serif" 
          textAnchor="middle" 
          letterSpacing="0.5"
        >
          INTERNATIONAL SCHOOLS
        </text>
      </g>

      {/* 6. Red Ribbon Banner at the Bottom */}
      <g id="ribbon">
        {/* Ribbon Left Fold */}
        <path d="M22 154 L44 142 L44 162 Z" fill="#7F1D1D" stroke="#450A0A" strokeWidth="1" />
        {/* Ribbon Right Fold */}
        <path d="M178 154 L156 142 L156 162 Z" fill="#7F1D1D" stroke="#450A0A" strokeWidth="1" />
        
        {/* Ribbon Main Body */}
        <path 
          d="M32 144 C68 138 132 138 168 144 L162 165 C128 158 72 158 38 165 Z" 
          fill="#B91C1C" 
          stroke="#7F1D1D" 
          strokeWidth="1.5" 
          strokeLinejoin="round" 
        />
        
        {/* Ribbon Text: "...WISDOM, INNOVATION & SKILL" */}
        <path id="ribbonTextPath" d="M34 153 C68 147 132 147 166 153" fill="none" stroke="none" />
        <text fontSize="7.5" fontWeight="800" fontFamily="sans-serif" fill="#FFFFFF" letterSpacing="0.4">
          <textPath href="#ribbonTextPath" startOffset="50%" textAnchor="middle">
            ...WISDOM, INNOVATION & SKILL
          </textPath>
        </text>
      </g>
    </svg>
  );
};
