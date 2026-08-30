import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

// HTML5 Official Shield SVG
export const Html5Icon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 512 512" className={className} {...props}>
    <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512" />
    <path fill="#EF652A" d="M256,472 L407,430 441,43 256,43" />
    <path fill="#ECECEC" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,107 129,265 256,265" />
    <path fill="#ECECEC" d="M256,355 L255,355 192,338 188,293 132,293 139,382 255,414 256,414" />
    <path fill="#FFFFFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,221 387,208" />
    <path fill="#FFFFFF" d="M255,94 L255,150 392,150 397,94" />
  </svg>
);

// CSS3 Official Shield SVG
export const Css3Icon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 512 512" className={className} {...props}>
    <path fill="#1572B6" d="M71,460 L30,0 481,0 440,460 255,512" />
    <path fill="#33A9DC" d="M256,472 L407,430 441,43 256,43" />
    <path fill="#ECECEC" d="M256,208 L181,208 176,150 256,150 256,94 114,94 129,265 256,265" />
    <path fill="#ECECEC" d="M256,355 L192,338 188,293 132,293 139,382 255,414" />
    <path fill="#FFFFFF" d="M255,208 L381,208 376,265 255,265" />
    <path fill="#FFFFFF" d="M255,94 L397,94 392,150 255,150" />
    <path fill="#FFFFFF" d="M255,355 L318,338 322,293 378,293 371,382 255,414" />
  </svg>
);

// JavaScript Official Yellow Badge SVG
export const JavaScriptIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 630 630" className={className} {...props}>
    <rect width="630" height="630" fill="#F7DF1E" rx="80" />
    <path d="M380 435c13 22 30 38 60 38 26 0 42-13 42-31 0-22-17-30-47-43l-16-7c-46-20-77-45-77-98 0-49 37-86 95-86 42 0 71 16 90 51l-44 28c-10-18-23-26-46-26-21 0-35 12-35 28 0 19 14 27 40 38l16 7c54 23 85 48 85 103 0 59-45 92-106 92-59 0-97-30-112-68l45-26zM224 440c8 14 16 26 33 26 18 0 29-7 29-35V213h55v219c0 58-34 84-81 84-44 0-70-23-83-52l47-24z" fill="#000000" />
  </svg>
);

// TypeScript Official Blue Badge SVG
export const TypeScriptIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 512 512" className={className} {...props}>
    <rect width="512" height="512" fill="#3178C6" rx="64" />
    <path d="M305.8 359.4c11.6 18.2 27.6 30.6 53.6 30.6 23.2 0 37.6-11.4 37.6-27.4 0-19.4-15.6-26.6-41.8-37.8l-14.2-6.2c-40.8-17.4-68-39.6-68-86.4 0-43.2 33-76.4 84.4-76.4 36.8 0 63.4 14.6 80.2 45.4l-38.6 24.8c-9.2-16.2-20.6-23.2-41.6-23.2-18.8 0-31.2 10.6-31.2 24.8 0 16.8 12.8 23.8 35.8 33.6l14.2 6.2c47.8 20.4 75.8 42.4 75.8 91.2 0 51.6-40.2 81-94.6 81-52.6 0-86.6-26.6-99.8-60.6l46.2-24.6zM140 200h130v44h-42v194h-46V244h-42v-44z" fill="#FFFFFF" />
  </svg>
);

// React Official Atom SVG
export const ReactIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} {...props}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

// Next.js Official Logo SVG
export const NextjsIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 180 180" className={className} {...props}>
    <mask height="180" id="mask0_next" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
      <circle cx="90" cy="90" fill="black" r="90" />
    </mask>
    <g mask="url(#mask0_next)">
      <circle cx="90" cy="90" data-circle="true" fill="black" r="90" />
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_next)" />
      <rect fill="url(#paint1_linear_next)" height="72" width="12" x="115" y="54" />
    </g>
    <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_next" x1="109" x2="144.5" y1="116.5" y2="160.5">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_next" x1="121" x2="120.799" y1="54" y2="106.875">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// Node.js Official Hexagon Logo SVG
export const NodejsIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 256 289" className={className} {...props}>
    <path fill="#539E43" d="M128 0L6 70.4v148.2L128 289l122-70.4V70.4L128 0z" />
    <path fill="#333333" d="M128 17.6L18 80.8v127.4l110 63.2 110-63.2V80.8L128 17.6z" />
    <path fill="#83CD29" d="M128 17.6l110 63.2v127.4l-110 63.2V17.6z" opacity="0.15" />
    <path fill="#FFFFFF" d="M165.7 151.7c0-23.7-13.8-31.5-38.3-33.8-16.4-1.6-21.5-4.8-21.5-12 0-7.3 5.4-11.8 17.2-11.8 14.5 0 24.5 4.3 32.5 10.9l11.4-14.7c-11.4-9.3-26.6-13.7-44.5-13.7-24 0-38.3 12.7-38.3 31.4 0 23.3 14.4 30.7 39.4 33.3 16 1.7 20.4 5.3 20.4 12.3 0 7.8-6.4 12.5-18.7 12.5-16.8 0-28.7-5.5-38.4-14.5L76 182.8c12.7 12.8 30.7 18.7 51.5 18.7 25 0 38.2-13.3 38.2-31.8" />
  </svg>
);

// Git Official Logo SVG
export const GitIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 256 256" className={className} {...props}>
    <path d="M251.173 118.666L137.334 4.827a13.25 13.25 0 0 0-18.74 0L94.02 29.399l30.563 30.563a15.753 15.753 0 0 1 19.865 19.865l29.438 29.437a15.754 15.754 0 1 1-11.178 11.178l-27.464-27.464v64.084a15.753 15.753 0 1 1-15.754-1.542V91.438a15.754 15.754 0 0 1-8.5-20.729L80.448 40.165 4.827 115.786a13.25 13.25 0 0 0 0 18.74l113.839 113.84a13.25 13.25 0 0 0 18.74 0l113.767-113.768a13.25 13.25 0 0 0 0-18.74z" fill="#F05032" />
  </svg>
);

// GitHub Octocat Logo SVG
export const GithubIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Tailwind CSS Official Waves SVG
export const TailwindIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 256 154" className={className} {...props}>
    <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.736 2.434 16.697 9.499 24.401 17.318C145.754 62.035 160.776 77.27 192 77.27c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.736-2.434-16.697-9.499-24.401-17.318C174.246 15.235 159.224 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.736 2.434 16.697 9.499 24.401 17.318C81.754 138.835 96.776 154.07 128 154.07c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.736-2.434-16.697-9.499-24.401-17.318C110.246 92.035 95.224 76.8 64 76.8z" fill="#38BDF8" />
  </svg>
);

// Redux Official Logo SVG
export const ReduxIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 256 244" className={className} {...props}>
    <path fill="#764ABC" d="M189.5 73.8c-7.7-12.7-20.7-21.7-35.8-24.8-4.4-.9-8.9-1.2-13.3-1-16.1.7-31 7.7-41.6 19.3-1.6 1.8-3.1 3.7-4.4 5.7-9.5-6.5-21-9.9-33.1-9.4-15.6.7-30 8-39.7 20.2-10 12.5-13.9 28.7-10.7 44.4 3.1 15.6 13.2 28.7 27.6 35.8 4.2 2.1 8.8 3.5 13.4 4.1 1.7 8.8 6.1 16.9 12.8 23.2 10.8 10.1 25.4 15.1 40.2 13.8 13.5-1.2 25.8-7.9 34.3-18.4 2.2-2.7 3.9-5.7 5.3-8.8 10.7 4.2 22.4 4.8 33.6 1.7 14.6-4.1 26.6-14.1 33.3-27.7 6.9-14 7.2-30.2.8-44.4-6.4-14.1-18.4-24.3-33.2-28.8zM80.4 144.5c-7.9-3.9-13.4-11.1-15.1-19.6-1.7-8.6.4-17.5 5.9-24.3 5.3-6.7 13.2-10.7 21.7-11.1 5.9-.3 11.7 1.1 16.8 4.1l-18.6 30.6c-3.6 5.8-7.4 13.7-10.7 20.3zm47.2 46.2c-8.1.7-16.1-2-22-7.5-3.7-3.4-6.1-7.8-7-12.6l35.8-2.6c6.8-.5 15.6-1 23.3-1.9-5.1 15-16.3 23.6-30.1 24.6zm54.7-42.3c-3.7 7.4-10.3 12.9-18.3 15.1-6.1 1.7-12.6 1.4-18.4-.9l16.1-32c3.1-6.1 6.8-14 9.9-20.7 7.9 2.5 14.5 8.1 18 15.8 3.5 7.7 3.3 16.5-.4 23.9z" />
  </svg>
);

// RTK Query / Redux Toolkit Icon SVG
export const RtkQueryIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 256 256" className={className} {...props}>
    <rect width="256" height="256" rx="56" fill="#764ABC" />
    <path d="M70 180V76h38c18 0 28 8 28 22 0 11-7 19-17 21l20 61h-24l-18-56h-9v56H70zm18-72h18c8 0 12-4 12-9s-4-9-12-9H88v18zM155 180V94h-24V76h70v18h-24v86h-22z" fill="#FFFFFF" />
    <circle cx="212" cy="74" r="18" fill="#38BDF8" />
  </svg>
);

// Express.js Official Brand Logo SVG
export const ExpressIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 256 256" className={className} {...props}>
    <rect width="256" height="256" rx="56" fill="#0f172a" />
    <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="105" letterSpacing="-4">
      ex
    </text>
  </svg>
);

// MongoDB Official Leaf Logo SVG
export const MongodbIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 256 558" className={className} {...props}>
    <path fill="#47A248" d="M125.1 0C120.3 7 81.3 64.9 81.3 148.6c0 102.1 48.7 167.5 48.7 167.5s-6.9-20.9-10.4-38.3c-23.7-118.5 5.5-277.8 5.5-277.8z" />
    <path fill="#499D4A" d="M130.9 0c4.8 7 43.8 64.9 43.8 148.6 0 102.1-48.7 167.5-48.7 167.5s6.9-20.9 10.4-38.3c23.7-118.5-5.5-277.8-5.5-277.8z" />
    <path fill="#3FA037" d="M128 316.1c0 0-46.7 54.4-46.7 141.2C81.3 506.7 122.9 554 128 558c5.1-4 46.7-51.3 46.7-100.7 0-86.8-46.7-141.2-46.7-141.2z" />
    <path fill="#47A248" d="M128 316.1V558c-5.1-4-46.7-51.3-46.7-100.7 0-86.8 46.7-141.2 46.7-141.2z" />
  </svg>
);

// PostgreSQL Elephant/Logo SVG
export const PostgresIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 256 264" className={className} {...props}>
    <path d="M125.042 0C76.223 0 54.34 26.545 54.34 57.063c0 14.86 5.86 28.563 15.772 38.647-1.129 3.862-2.12 7.828-2.905 11.879-11.455-4.103-24.167-2.316-34.12 4.908-14.73 10.686-18.064 30.77-7.447 45.394 6.782 9.34 17.973 14.28 29.35 13.064-.09 1.954-.14 3.931-.14 5.932 0 45.452 35.836 82.518 80.373 84.774v2.339h1.611v-2.333c44.536-2.256 80.373-39.322 80.373-84.774 0-2.001-.05-3.978-.14-5.932 11.378 1.216 22.569-3.724 29.35-13.064 10.618-14.624 7.283-34.708-7.447-45.394-9.953-7.224-22.665-9.011-34.12-4.908-.785-4.051-1.776-8.017-2.905-11.879 9.912-10.084 15.772-23.787 15.772-38.647C217.306 26.545 195.423 0 146.604 0h-21.562z" fill="#336791" />
  </svg>
);

// Prisma Official Triangle Prism Logo SVG
export const PrismaIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 256 313" className={className} {...props}>
    <path fill="#2D3748" d="M122.9 0a10.4 10.4 0 0 0-8.9 5.1L1.6 198.8a10.4 10.4 0 0 0 .1 10.6l59 98.4a10.4 10.4 0 0 0 8.9 5.1h117.8a10.4 10.4 0 0 0 8.9-5.1l59-98.4a10.4 10.4 0 0 0 .1-10.6L143.1 5.1A10.4 10.4 0 0 0 134.2 0h-11.3z" opacity="0.15" />
    <path fill="#5A67D8" d="M137.9 3.2a10.4 10.4 0 0 0-14.7 1.8L1.6 198.7a10.4 10.4 0 0 0 1.7 14.1l111.4 96.5c4.1 3.5 10.2 3.1 13.8-1l125.8-144.5a10.4 10.4 0 0 0-1.8-14.7L137.9 3.2z" />
    <path fill="#2B6CB0" d="M123.2 5a10.4 10.4 0 0 0-5.4 13.4l51.5 133.5c2.1 5.5 8.3 8.3 13.8 6.2l69.2-26.7a10.4 10.4 0 0 0 6.2-13.8L207 4.1a10.4 10.4 0 0 0-13.8-6.2L123.2 5z" />
    <path fill="#FFFFFF" d="M129.4 14.7L19.4 204.6l102.2 88.5L237 160.8 129.4 14.7z" opacity="0.2" />
  </svg>
);

// REST API Modern Vector Icon
export const RestApiIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 256 256" className={className} {...props}>
    <rect width="256" height="256" rx="56" fill="#0284C7" />
    <path d="M48 128h38m84 0h38M128 48v38m0 84v38" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round" />
    <circle cx="128" cy="128" r="32" fill="#FFFFFF" />
    <circle cx="128" cy="128" r="16" fill="#0284C7" />
    <circle cx="48" cy="128" r="12" fill="#38BDF8" />
    <circle cx="208" cy="128" r="12" fill="#38BDF8" />
    <circle cx="128" cy="48" r="12" fill="#38BDF8" />
    <circle cx="128" cy="208" r="12" fill="#38BDF8" />
  </svg>
);

// WebSockets Official Socket/Network Logo SVG
export const WebSocketsIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 256 256" className={className} {...props}>
    <rect width="256" height="256" rx="60" fill="#EA580C" />
    {/* Socket plug 1 (top-right arrow) */}
    <path d="M72 108h72c12 0 20-8 20-20V68" fill="none" stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" />
    <path d="M144 52l20 16-20 16" fill="none" stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
    {/* Socket plug 2 (bottom-left arrow) */}
    <path d="M184 148h-72c-12 0-20 8-20 20v20" fill="none" stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" />
    <path d="M112 204l-20-16 20-16" fill="none" stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Docker Whale Logo SVG
export const DockerIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 256 218" className={className} {...props}>
    <path d="M255.8 111.4c-2.4-17.6-17.6-31.2-34.8-31.2-3.8 0-7.4.7-10.8 2-6.5-15.6-21.8-26.6-39.6-26.6-4.6 0-9 .7-13.2 2.1-4.8-19.8-22.8-34.5-44.2-34.5-1.9 0-3.8.1-5.7.4V0h-30.8v31.4c-5.7 3.3-10.4 7.9-13.8 13.4H0v120.7c0 28.9 23.5 52.4 52.4 52.4h113.3c49.7 0 90.1-40.4 90.1-90.1 0-5.7-.5-11.3-1.6-16.4zM24.7 75.6h24.7v24.7H24.7V75.6zm30.8 0h24.7v24.7H55.5V75.6zm0-30.8h24.7v24.7H55.5V44.8zm30.9 30.8h24.7v24.7H86.4V75.6zm0-30.8h24.7v24.7H86.4V44.8zm30.8 30.8h24.7v24.7h-24.7V75.6zm0-30.8h24.7v24.7h-24.7V44.8zm0-30.9h24.7v24.7h-24.7V13.9zm30.9 61.7h24.7v24.7h-24.7V75.6z" fill="#2496ED" />
  </svg>
);

// Swagger Official Logo SVG
export const SwaggerIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 256 256" className={className} {...props}>
    <circle cx="128" cy="128" r="120" fill="#85EA2D" />
    {/* Left curly brace { */}
    <path d="M98 84c-10 0-16 6-16 16v16c0 10-6 12-14 12 8 0 14 2 14 12v16c0 10 6 16 16 16" fill="none" stroke="#173647" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
    {/* Right curly brace } */}
    <path d="M158 84c10 0 16 6 16 16v16c0 10 6 12 14 12-8 0-14 2-14 12v16c0 10-6 16-16 16" fill="none" stroke="#173647" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
    {/* Three dots ... */}
    <circle cx="114" cy="128" r="7" fill="#173647" />
    <circle cx="128" cy="128" r="7" fill="#173647" />
    <circle cx="142" cy="128" r="7" fill="#173647" />
  </svg>
);

// Apidog Official Logo SVG
export const ApidogIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 256 256" className={className} {...props}>
    <rect width="256" height="256" rx="60" fill="#4F46E5" />
    {/* Dog ears and face emblem */}
    <path d="M64 88c-12 0-20 12-16 28l12 48c4 16 16 24 28 24h80c12 0 24-8 28-24l12-48c4-16-4-28-16-28h-20l-16-24c-6-9-16-12-24-12h-8c-8 0-18 3-24 12L84 88H64z" fill="#FFFFFF" />
    {/* Dog nose & eyes */}
    <circle cx="104" cy="124" r="10" fill="#1E1B4B" />
    <circle cx="152" cy="124" r="10" fill="#1E1B4B" />
    <ellipse cx="128" cy="148" rx="14" ry="10" fill="#1E1B4B" />
    {/* Cute orange tongue / API dot */}
    <path d="M122 154c0 6 3 10 6 10s6-4 6-10z" fill="#F97316" />
  </svg>
);

