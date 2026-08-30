import React, { useState } from 'react';
import type { SkillItem, SkillCategory } from '../../types/portfolio';
import {
  Html5Icon, Css3Icon, JavaScriptIcon, TypeScriptIcon, ReactIcon,
  TailwindIcon, ReduxIcon, RtkQueryIcon, NodejsIcon, ExpressIcon,
  MongodbIcon, PostgresIcon, PrismaIcon, RestApiIcon, WebSocketsIcon,
  GitIcon, GithubIcon, SwaggerIcon, ApidogIcon,
} from '../ui/BrandIcons';
import { Database } from 'lucide-react';

// ── Icon resolver ──────────────────────────────────────────────
const SkillIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className = 'w-7 h-7' }) => {
  switch (icon) {
    case 'html': return <Html5Icon className={className} />;
    case 'css': return <Css3Icon className={className} />;
    case 'javascript': return <JavaScriptIcon className={className} />;
    case 'typescript': return <TypeScriptIcon className={className} />;
    case 'react': return <ReactIcon className={className} />;
    case 'tailwind': return <TailwindIcon className={className} />;
    case 'redux': return <ReduxIcon className={className} />;
    case 'rtk': return <RtkQueryIcon className={className} />;
    case 'nodejs': return <NodejsIcon className={className} />;
    case 'express': return <ExpressIcon className={className} />;
    case 'mongodb': return <MongodbIcon className={className} />;
    case 'database':
    case 'postgres': return <PostgresIcon className={className} />;
    case 'prisma': return <PrismaIcon className={className} />;
    case 'api':
    case 'rest': return <RestApiIcon className={className} />;
    case 'websocket':
    case 'websockets': return <WebSocketsIcon className={className} />;
    case 'swagger': return <SwaggerIcon className={className} />;
    case 'apidog': return <ApidogIcon className={className} />;
    case 'git': return <GitIcon className={className} />;
    case 'github': return <GithubIcon className={className} />;
    default: return <Database className={`${className} text-indigo-400`} />;
  }
};

// ── Cluster layout config ───────────────────────────────────────
interface ClusterConfig {
  label: string;
  category: SkillCategory;
  cx: number; // SVG pixel X
  cy: number; // SVG pixel Y
  radius: number;
  accentColor: string;
  glowColor: string;
  startAngle?: number; // degrees
}

const CLUSTERS: ClusterConfig[] = [
  { label: 'Frontend', category: 'frontend', cx: 240, cy: 300, radius: 150, accentColor: '#6366f1', glowColor: 'rgba(99,102,241,0.5)', startAngle: -90 },
  { label: 'Backend', category: 'backend', cx: 730, cy: 180, radius: 125, accentColor: '#10b981', glowColor: 'rgba(16,185,129,0.5)', startAngle: 0 },
  { label: 'Database', category: 'database', cx: 800, cy: 535, radius: 100, accentColor: '#f59e0b', glowColor: 'rgba(245,158,11,0.5)', startAngle: 0 },
  { label: 'Tools', category: 'tools', cx: 470, cy: 550, radius: 65, accentColor: '#ef4444', glowColor: 'rgba(239,68,68,0.5)', startAngle: 0 },
];

// Arrange nodes in a circle around cluster center
function clusterNodePositions(
  skills: SkillItem[],
  cx: number,
  cy: number,
  radius: number,
  startAngleDeg: number = -90
): Array<{ skill: SkillItem; x: number; y: number }> {
  const count = skills.length;
  if (count === 0) return [];
  const effectiveRadius = count > 1 ? Math.max(radius, (75 * count) / (2 * Math.PI)) : 0;
  const startRad = (startAngleDeg * Math.PI) / 180;
  return skills.map((skill, i) => {
    const angle = startRad + (2 * Math.PI * i) / count;
    return {
      skill,
      x: cx + Math.cos(angle) * effectiveRadius,
      y: cy + Math.sin(angle) * effectiveRadius,
    };
  });
}

// ── Main Component ─────────────────────────────────────────────
interface SkillConstellationProps {
  skills: SkillItem[];
  activeCategory: SkillCategory;
}

export const SkillConstellation: React.FC<SkillConstellationProps> = ({ skills, activeCategory }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const w = 1000;
  const h = 670;

  // Build per-cluster nodes
  const clusterNodes = CLUSTERS.map((cluster) => {
    const clusterSkills = skills.filter((s) => s.category === cluster.category);
    const nodes = clusterNodePositions(
      clusterSkills, cluster.cx, cluster.cy, cluster.radius,
      cluster.startAngle ?? -90
    );
    return { cluster, nodes };
  });

  const allNodes = clusterNodes.flatMap((c) => c.nodes.map((n) => ({ ...n, cluster: c.cluster })));

  // Determine visibility
  const isVisible = (category: SkillCategory) =>
    activeCategory === 'all' || activeCategory === category;

  // Animated star particles (fixed viewBox positions)
  const stars = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    x: (Math.sin(i * 137.5) * 0.5 + 0.5) * w,
    y: (Math.cos(i * 97.3) * 0.5 + 0.5) * h,
    r: 0.8 + (i % 3) * 0.6,
    delay: (i * 0.3) % 4,
  }));

  return (
    <div className="relative w-full overflow-hidden select-none">
      {/* SVG Canvas */}
      <svg
        className="w-full h-auto max-h-[670px] block"
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Glow filters per cluster */}
          {CLUSTERS.map((c) => (
            <filter key={c.category} id={`glow-${c.category}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          ))}
          <filter id="node-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {/* Animated line gradient */}
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ── Background stars ── */}
        {stars.map((s) => (
          <circle
            key={s.id}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="white"
            opacity={0.2}
            className="animate-pulse"
            style={{ animationDelay: `${s.delay}s`, animationDuration: '3s' }}
          />
        ))}

        {/* ── Inter-cluster connector lines ── */}
        {CLUSTERS.map((ca, ai) =>
          CLUSTERS.slice(ai + 1).map((cb) => {
            const vis = isVisible(ca.category) && isVisible(cb.category);
            return (
              <line
                key={`${ca.category}-${cb.category}`}
                x1={ca.cx} y1={ca.cy}
                x2={cb.cx} y2={cb.cy}
                stroke="url(#line-grad)"
                strokeWidth={1}
                opacity={vis ? 0.35 : 0.08}
                strokeDasharray="6 8"
                className="transition-opacity duration-500"
              />
            );
          })
        )}

        {/* ── Intra-cluster connection lines (spoke from center) ── */}
        {clusterNodes.map(({ cluster, nodes }) => {
          const vis = isVisible(cluster.category);
          const cx = cluster.cx;
          const cy = cluster.cy;
          return nodes.map(({ skill, x, y }) => (
            <line
              key={`spoke-${skill.id}`}
              x1={cx} y1={cy} x2={x} y2={y}
              stroke={cluster.accentColor}
              strokeWidth={hoveredId === skill.id ? 2 : 1}
              opacity={vis ? (hoveredId === skill.id ? 0.85 : 0.25) : 0.05}
              className="transition-all duration-400"
            />
          ));
        })}

        {/* ── Node-to-node lines within cluster ── */}
        {clusterNodes.map(({ cluster, nodes }) => {
          const vis = isVisible(cluster.category);
          return nodes.map(({ skill: sa, x: x1, y: y1 }, i) =>
            nodes.slice(i + 1).map(({ skill: sb, x: x2, y: y2 }) => (
              <line
                key={`edge-${sa.id}-${sb.id}`}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={cluster.accentColor}
                strokeWidth={0.8}
                opacity={vis ? 0.14 : 0.02}
                className="transition-opacity duration-500"
              />
            ))
          );
        })}

        {/* ── Cluster center labels ── */}
        {clusterNodes.map(({ cluster }) => {
          const vis = isVisible(cluster.category);
          const cx = cluster.cx;
          const cy = cluster.cy;
          return (
            <g key={`center-${cluster.category}`} opacity={vis ? 1 : 0.15} className="transition-opacity duration-500">
              {/* Outer glow ring */}
              <circle cx={cx} cy={cy} r={26} fill={cluster.accentColor} opacity={0.08} />
              <circle cx={cx} cy={cy} r={18} fill={cluster.accentColor} opacity={0.18}
                filter={`url(#glow-${cluster.category})`} />
              {/* Inner dot */}
              <circle cx={cx} cy={cy} r={7} fill={cluster.accentColor} opacity={0.95} />
              {/* Label */}
              <text
                x={cx} y={cy - 32}
                textAnchor="middle"
                fill={cluster.accentColor}
                fontSize={13}
                fontWeight={800}
                letterSpacing={2.5}
                fontFamily="monospace"
                opacity={0.9}
              >
                {cluster.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* ── Skill Nodes ── */}
        {allNodes.map(({ skill, x, y, cluster }) => {
          const vis = isVisible(cluster.category);
          const isHov = hoveredId === skill.id;
          const nodeR = isHov ? 34 : 29;

          return (
            <g
              key={skill.id}
              transform={`translate(${x},${y})`}
              opacity={vis ? 1 : 0.1}
              className="transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredId(skill.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Outer glow ring (on hover) */}
              {isHov && (
                <circle r={nodeR + 12} fill={skill.color} opacity={0.16} filter="url(#node-glow)" />
              )}
              {/* Pulsing ring */}
              <circle
                r={nodeR + 7}
                fill="none"
                stroke={skill.color}
                strokeWidth={isHov ? 2 : 1}
                opacity={isHov ? 0.7 : 0.25}
                className="transition-all duration-300"
              />
              {/* Main circle bg */}
              <circle
                r={nodeR}
                fill="#0b0f19"
                stroke={skill.color}
                strokeWidth={isHov ? 2.5 : 1.5}
                opacity={1}
                className="transition-all duration-300"
              />
              {/* Color fill overlay on hover */}
              <circle r={nodeR} fill={skill.color} opacity={isHov ? 0.18 : 0.06} className="transition-all duration-300" />

              {/* Skill name label below */}
              <text
                y={nodeR + 18}
                textAnchor="middle"
                fill={isHov ? skill.color : '#e2e8f0'}
                fontSize={isHov ? 13 : 11.5}
                fontWeight={isHov ? 700 : 600}
                fontFamily="system-ui, sans-serif"
                className="transition-all duration-300 select-none"
              >
                {skill.name}
              </text>

              {/* Percentage badge on hover */}
              {isHov && (
                <g transform={`translate(${nodeR - 1}, ${-nodeR - 1})`}>
                  <circle r={12} fill={skill.color} opacity={0.95} />
                  <text
                    textAnchor="middle"
                    y={4}
                    fill="white"
                    fontSize={9}
                    fontWeight={700}
                    fontFamily="monospace"
                  >
                    {skill.percentage}%
                  </text>
                </g>
              )}

              {/* Foreignobject icon */}
              <foreignObject x={-16} y={-16} width={32} height={32} style={{ overflow: 'visible' }}>
                <div
                  style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <SkillIcon icon={skill.icon} className="w-7.5 h-7.5" />
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>

      {/* ── Legend ── */}
      <div className="flex flex-wrap justify-center gap-4 mt-2">
        {CLUSTERS.map((c) => (
          <div key={c.category} className="flex items-center gap-1.5 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full" style={{ background: c.accentColor }} />
            {c.label}
          </div>
        ))}
      </div>
    </div>
  );
};
