// import React, { useState } from 'react';
// import { Copy, Check, Code2 } from 'lucide-react';

// export const FloatingCodeCard: React.FC = () => {
//   const [copied, setCopied] = useState(false);

//   const codeString = `const developer = {
//   name: "Alex",
//   role: "Full Stack Engineer",
//   frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
//   backend: ["Node.js", "Express", "PostgreSQL"],
//   passion: "Building things for the web"
// };`;

//   const handleCopy = () => {
//     navigator.clipboard.writeText(codeString);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="relative group select-none">
//       {/* Glowing ambient ring */}
//       <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
      
//       <div className="relative rounded-2xl bg-slate-900/95 dark:bg-[#0c101c]/95 light:bg-slate-900/95 border border-slate-700/60 dark:border-slate-800 p-4 shadow-2xl backdrop-blur-md w-full max-w-[340px] text-xs font-mono text-slate-300">
//         {/* Card Header */}
//         <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800/80">
//           <div className="flex items-center gap-1.5 text-slate-400">
//             <Code2 className="w-3.5 h-3.5 text-indigo-400" />
//             <span className="text-[11px] font-medium tracking-wide">Developer.ts</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <span className="flex h-2 w-2 relative">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//             </span>

//             <button
//               onClick={handleCopy}
//               className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
//               title="Copy code"
//             >
//               {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
//             </button>
//           </div>
//         </div>

//         {/* Code Content with Frontend & Backend */}
//         <pre className="overflow-x-auto leading-relaxed text-[11px] font-mono">
//           <code>
//             <span className="text-pink-400">const</span>{' '}
//             <span className="text-blue-300">developer</span> = &#123;{'\n'}
//             {'  '}<span className="text-slate-300">name</span>:{' '}
//             <span className="text-amber-300">"Alex"</span>,{'\n'}
//             {'  '}<span className="text-slate-300">role</span>:{' '}
//             <span className="text-amber-300">"Full Stack Engineer"</span>,{'\n'}
//             {'  '}<span className="text-slate-300">frontend</span>: [
//             <span className="text-amber-300">"React"</span>,{' '}
//             <span className="text-amber-300">"Next.js"</span>,{' '}
//             <span className="text-amber-300">"TS"</span>],{'\n'}
//             {'  '}<span className="text-slate-300">backend</span>: [
//             <span className="text-amber-300">"Node.js"</span>,{' '}
//             <span className="text-amber-300">"PostgreSQL"</span>],{'\n'}
//             {'  '}<span className="text-slate-300">passion</span>:{' '}
//             <span className="text-amber-300">"Building things for the web"</span>{'\n'}
//             &#125;;
//           </code>
//         </pre>
//       </div>
//     </div>
//   );
// };
