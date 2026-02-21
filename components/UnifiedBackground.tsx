'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function UnifiedBackground() {
  const { scrollY } = useScroll()

  // Subtle parallax for background layers
  const yLayer1 = useTransform(scrollY, [0, 3000], [0, -200])
  const yLayer2 = useTransform(scrollY, [0, 3000], [0, -120])
  const yLayer3 = useTransform(scrollY, [0, 3000], [0, -80])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient that spans the entire page */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100/80 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 transition-colors duration-300" />

      {/* Layer 1: Large ambient orbs with slow parallax */}
      <motion.div className="absolute inset-0" style={{ y: yLayer1 }}>
        <div className="absolute top-[5%] -left-[10%] w-[600px] h-[600px] bg-purple-300 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-20 dark:opacity-10 animate-blob" />
        <div className="absolute top-[35%] -right-[8%] w-[500px] h-[500px] bg-indigo-300 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-15 dark:opacity-[0.08] animate-blob animation-delay-4000" />
        <div className="absolute top-[65%] left-[10%] w-[550px] h-[550px] bg-purple-200 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-20 dark:opacity-10 animate-blob animation-delay-2000" />
      </motion.div>

      {/* Layer 2: Mid-depth accents */}
      <motion.div className="absolute inset-0" style={{ y: yLayer2 }}>
        <div className="absolute top-[15%] right-[20%] w-[400px] h-[400px] bg-violet-200 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-15 dark:opacity-[0.07] animate-blob animation-delay-3000" />
        <div className="absolute top-[50%] left-[30%] w-[450px] h-[450px] bg-indigo-200 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-15 dark:opacity-[0.07] animate-blob animation-delay-4000" />
        <div className="absolute top-[80%] right-[15%] w-[400px] h-[400px] bg-pink-200 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-15 dark:opacity-[0.06] animate-blob animation-delay-2000" />
      </motion.div>

      {/* Layer 3: Subtle foreground accents */}
      <motion.div className="absolute inset-0" style={{ y: yLayer3 }}>
        <div className="absolute top-[25%] left-[50%] w-[300px] h-[300px] bg-purple-300 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-10 dark:opacity-[0.05] animate-blob animation-delay-3000" />
        <div className="absolute top-[70%] right-[40%] w-[350px] h-[350px] bg-indigo-300 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-10 dark:opacity-[0.05] animate-blob animation-delay-4000" />
      </motion.div>

      {/* Very subtle noise texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '256px 256px' }} />

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 12s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  )
}
