import React from 'react';

export interface SVGItem {
  id: number;
  title: string;
  component: React.ReactNode;
}

export const SVG_DATA: SVGItem[] = [
  {
    id: 1,
    title: "Cyber Core",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
        <circle cx="50" cy="50" r="20" fill="currentColor" className="animate-pulse" />
        <path d="M50 10 L50 30 M50 70 L50 90 M10 50 L30 50 M70 50 L90 50" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Neural Node",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="30" cy="30" r="5" fill="currentColor" />
        <circle cx="70" cy="30" r="5" fill="currentColor" />
        <circle cx="50" cy="70" r="5" fill="currentColor" />
        <path d="M30 30 L70 30 L50 70 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="43" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Data Stream",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="10" y="20" width="80" height="2" fill="currentColor" opacity="0.2" />
        <rect x="10" y="40" width="80" height="2" fill="currentColor" opacity="0.5" />
        <rect x="10" y="60" width="80" height="2" fill="currentColor" opacity="0.8" />
        <rect x="10" y="80" width="80" height="2" fill="currentColor" />
        <circle cx="20" cy="21" r="3" fill="currentColor" />
        <circle cx="50" cy="41" r="3" fill="currentColor" />
        <circle cx="80" cy="61" r="3" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Shield Protocol",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 10 L85 25 V55 C85 75 50 90 50 90 C50 90 15 75 15 55 V25 L50 10Z" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M50 30 L65 45 L50 60 L35 45 Z" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Quantum Pulse",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M10 50 Q 30 10, 50 50 T 90 50" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10 50 Q 30 90, 50 50 T 90 50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Circuit Logic",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="20" y="20" width="60" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M40 20 V10 M60 20 V10 M40 80 V90 M60 80 V90 M20 40 H10 M20 60 H10 M80 40 H90 M80 60 H90" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M45 50 L50 55 L55 45" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 7,
    title: "Elite Sedan",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M15 60 H85 L80 45 H20 L15 60 Z" fill="currentColor" opacity="0.3" />
        <path d="M10 70 H90 V60 H10 V70 Z" fill="currentColor" />
        <circle cx="25" cy="75" r="8" fill="currentColor" />
        <circle cx="75" cy="75" r="8" fill="currentColor" />
        <rect x="30" y="48" width="40" height="12" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: 8,
    title: "Action Button",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="10" y="30" width="80" height="40" rx="20" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="30" cy="50" r="10" fill="currentColor" />
        <text x="65" y="55" fontSize="12" fontWeight="bold" textAnchor="middle" fill="currentColor">ON</text>
      </svg>
    )
  },
  {
    id: 9,
    title: "Portal Door",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="25" y="10" width="50" height="80" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="65" cy="50" r="3" fill="currentColor" />
        <path d="M25 10 L75 10 L75 90 L25 90 Z" fill="currentColor" opacity="0.1" />
      </svg>
    )
  },
  {
    id: 10,
    title: "Designer Chair",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M30 20 V60 H70 V20" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="30" y="60" width="40" height="5" fill="currentColor" />
        <path d="M35 65 V85 M65 65 V85" stroke="currentColor" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: 11,
    title: "Tech Watch",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="35" y="10" width="30" height="80" rx="5" fill="currentColor" opacity="0.2" />
        <rect x="30" y="30" width="40" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M50 50 L50 42 M50 50 L58 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 12,
    title: "Smart Camera",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="15" y="30" width="70" height="45" rx="5" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="50" cy="52.5" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="52.5" r="5" fill="currentColor" />
        <rect x="65" y="22" width="15" height="8" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 13,
    title: "Cloud Server",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="20" y="20" width="60" height="15" rx="2" fill="currentColor" opacity="0.8" />
        <rect x="20" y="42" width="60" height="15" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="20" y="64" width="60" height="15" rx="2" fill="currentColor" opacity="0.2" />
        <circle cx="70" cy="27.5" r="2" fill="white" />
        <circle cx="70" cy="49.5" r="2" fill="white" />
        <circle cx="70" cy="71.5" r="2" fill="white" />
      </svg>
    )
  },
  {
    id: 14,
    title: "Rocket Ship",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 10 C30 40 30 70 30 80 H70 C70 70 70 40 50 10" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="50" cy="45" r="6" fill="currentColor" />
        <path d="M30 80 L20 90 M70 80 L80 90" stroke="currentColor" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: 15,
    title: "Modern Lamp",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M40 85 H60 M50 85 V50" stroke="currentColor" strokeWidth="4" />
        <path d="M30 50 L70 50 L60 20 L40 20 Z" fill="currentColor" opacity="0.4" />
      </svg>
    )
  },
  {
    id: 16,
    title: "Digital Book",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="20" y="15" width="60" height="70" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M35 30 H65 M35 45 H65 M35 60 H50" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 17,
    title: "Coffee Mug",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M30 30 H70 V75 C70 85 30 85 30 75 V30" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M70 40 C85 40 85 65 70 65" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M40 20 Q50 10 60 20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  },
  {
    id: 18,
    title: "Compass",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M50 20 L58 50 L50 80 L42 50 Z" fill="currentColor" />
        <circle cx="50" cy="50" r="3" fill="white" />
      </svg>
    )
  },
  {
    id: 19,
    title: "Headphones",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M20 60 C20 20 80 20 80 60" fill="none" stroke="currentColor" strokeWidth="4" />
        <rect x="15" y="60" width="12" height="20" rx="4" fill="currentColor" />
        <rect x="73" y="60" width="12" height="20" rx="4" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 20,
    title: "Microscope",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M30 85 H70 M50 85 V70" stroke="currentColor" strokeWidth="3" />
        <path d="M60 20 L40 60" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <rect x="35" y="65" width="30" height="5" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 21,
    title: "Bicycle",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="30" cy="70" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="70" cy="70" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M30 70 L50 40 L70 70 M50 40 H75 M75 40 L70 70" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 22,
    title: "Mountain",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M10 80 L40 30 L60 50 L85 20 L95 80 Z" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M40 30 L45 38 L35 42 Z" fill="currentColor" />
        <path d="M85 20 L90 32 L80 35 Z" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 23,
    title: "Lightbulb",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 20 C35 20 30 40 30 50 C30 65 45 70 45 80 H55 C55 70 70 65 70 50 C70 40 65 20 50 20Z" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M45 85 H55 M45 90 H55" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 24,
    title: "Airplane",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M10 50 H90 L85 45 H25 L10 50 Z" fill="currentColor" />
        <path d="M40 50 L50 20 L65 50 Z" fill="currentColor" opacity="0.6" />
        <path d="M40 50 L50 80 L65 50 Z" fill="currentColor" opacity="0.6" />
      </svg>
    )
  },
  {
    id: 25,
    title: "Tree",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="47" y="70" width="6" height="20" fill="currentColor" />
        <path d="M50 10 L20 70 H80 Z" fill="currentColor" opacity="0.4" />
        <path d="M50 30 L30 70 H70 Z" fill="currentColor" opacity="0.6" />
      </svg>
    )
  },
  {
    id: 26,
    title: "House",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M20 50 V90 H80 V50 L50 20 L20 50 Z" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="45" y="65" width="10" height="25" fill="currentColor" />
        <rect x="30" y="55" width="10" height="10" fill="currentColor" opacity="0.3" />
        <rect x="60" y="55" width="10" height="10" fill="currentColor" opacity="0.3" />
      </svg>
    )
  },
  {
    id: 27,
    title: "Umbrella",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M10 50 C10 10 90 10 90 50 H10 Z" fill="currentColor" opacity="0.5" />
        <path d="M50 50 V85 C50 90 60 90 60 85" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: 28,
    title: "Anchor",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 10 V80 M30 60 C30 85 70 85 70 60" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M25 60 L30 55 L35 60 M65 60 L70 55 L75 60" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="50" cy="15" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 29,
    title: "Key",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="25" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M40 50 H85 V65 M70 50 V65" stroke="currentColor" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: 30,
    title: "Pizza",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 10 L15 85 H85 Z" fill="currentColor" opacity="0.2" />
        <circle cx="50" cy="40" r="4" fill="currentColor" />
        <circle cx="40" cy="65" r="4" fill="currentColor" />
        <circle cx="60" cy="65" r="4" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 31,
    title: "Gamepad",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="15" y="35" width="70" height="30" rx="15" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M25 50 H35 M30 45 V55" stroke="currentColor" strokeWidth="3" />
        <circle cx="65" cy="45" r="3" fill="currentColor" />
        <circle cx="75" cy="55" r="3" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 32,
    title: "Microphone",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="40" y="15" width="20" height="45" rx="10" fill="currentColor" />
        <path d="M30 40 C30 65 70 65 70 40" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M50 60 V85 M35 85 H65" stroke="currentColor" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: 33,
    title: "Briefcase",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="15" y="30" width="70" height="50" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M40 30 V20 H60 V30" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="45" y="50" width="10" height="10" fill="currentColor" opacity="0.5" />
      </svg>
    )
  },
  {
    id: 34,
    title: "Trophy",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M30 20 H70 V50 C70 70 30 70 30 50 V20" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M30 30 C15 30 15 50 30 50 M70 30 C85 30 85 50 70 50" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M50 70 V85 M35 85 H65" stroke="currentColor" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: 35,
    title: "Battery",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="15" y="35" width="60" height="30" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="75" y="42.5" width="10" height="15" fill="currentColor" />
        <rect x="20" y="40" width="15" height="20" fill="currentColor" />
        <rect x="40" y="40" width="15" height="20" fill="currentColor" opacity="0.5" />
      </svg>
    )
  },
  {
    id: 36,
    title: "Magnifying Glass",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M60 60 L85 85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 37,
    title: "Bell",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 15 C35 15 30 30 30 50 V75 H70 V50 C70 30 65 15 50 15Z" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="50" cy="85" r="5" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 38,
    title: "Gift",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="20" y="40" width="60" height="45" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="15" y="30" width="70" height="10" fill="currentColor" />
        <path d="M50 30 V85 M15 55 H85" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 39,
    title: "Sun",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M50 10 V25 M50 75 V90 M10 50 H25 M75 50 H90 M22 22 L32 32 M68 68 L78 78 M22 78 L32 68 M68 22 L78 32" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 40,
    title: "Moon",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M70 20 C40 20 20 40 20 70 C20 80 25 90 30 95 C25 80 30 50 70 30 C80 30 90 35 95 40 C90 25 80 20 70 20Z" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 41,
    title: "Cloud",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M25 75 C10 75 10 55 25 55 C25 35 50 35 55 45 C65 35 85 35 85 60 C85 75 75 75 70 75 Z" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: 42,
    title: "Heart",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 85 L15 50 C5 35 25 10 50 35 C75 10 95 35 85 50 Z" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: 43,
    title: "Star",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 10 L62 38 L92 38 L68 56 L78 85 L50 68 L22 85 L32 56 L8 38 L38 38 Z" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: 44,
    title: "Diamond",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 10 L85 40 L50 90 L15 40 Z" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M15 40 H85 M35 40 L50 10 L65 40" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: 45,
    title: "Bolt",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M60 10 L25 55 H50 L40 90 L75 45 H50 Z" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 46,
    title: "Flame",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 10 C30 40 20 60 20 75 C20 90 35 95 50 95 C65 95 80 90 80 75 C80 60 70 40 50 10Z" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M50 40 C40 60 35 70 35 80 C35 88 42 90 50 90 C58 90 65 88 65 80 C65 70 60 60 50 40Z" fill="currentColor" opacity="0.5" />
      </svg>
    )
  },
  {
    id: 47,
    title: "Water Drop",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 10 C30 45 20 65 20 80 C20 95 80 95 80 80 C80 65 70 45 50 10Z" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M40 70 C35 75 35 85 40 85" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  },
  {
    id: 48,
    title: "Wrench",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M30 30 L70 70 M70 70 L85 85" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <path d="M15 35 C15 15 45 15 45 35 L35 45 L15 35Z" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 49,
    title: "Hammer",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="45" y="40" width="10" height="50" fill="currentColor" opacity="0.5" />
        <rect x="25" y="15" width="50" height="25" rx="5" fill="currentColor" />
        <path d="M75 20 V35" stroke="currentColor" strokeWidth="4" />
      </svg>
    )
  },
  {
    id: 50,
    title: "Compass Needle",
    component: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M50 10 L60 50 L50 90 L40 50 Z" fill="currentColor" />
        <circle cx="50" cy="50" r="5" fill="white" />
      </svg>
    )
  }
];
