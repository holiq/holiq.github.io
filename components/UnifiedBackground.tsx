export default function UnifiedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base gradient that spans the entire viewport */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100/80 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 transition-colors duration-300" />

      {/* Layer 1: Large ambient orbs */}
      <div className="absolute inset-0">
        <div className="unified-blob absolute top-[5%] -left-[10%] w-[600px] h-[600px] bg-purple-300 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[120px] opacity-20 dark:opacity-10" />
        <div className="unified-blob unified-delay-4 absolute top-[35%] -right-[8%] w-[500px] h-[500px] bg-indigo-300 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[120px] opacity-15 dark:opacity-[0.08]" />
        <div className="unified-blob unified-delay-2 absolute top-[65%] left-[10%] w-[550px] h-[550px] bg-purple-200 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[120px] opacity-20 dark:opacity-10" />
      </div>

      {/* Layer 2: Mid-depth accents */}
      <div className="absolute inset-0">
        <div className="unified-blob unified-delay-3 absolute top-[15%] right-[20%] w-[400px] h-[400px] bg-violet-200 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[100px] opacity-15 dark:opacity-[0.07]" />
        <div className="unified-blob unified-delay-4 absolute top-[50%] left-[30%] w-[450px] h-[450px] bg-indigo-200 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[100px] opacity-15 dark:opacity-[0.07]" />
        <div className="unified-blob unified-delay-2 absolute top-[80%] right-[15%] w-[400px] h-[400px] bg-pink-200 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[100px] opacity-15 dark:opacity-[0.06]" />
      </div>

      {/* Layer 3: Subtle foreground accents */}
      <div className="absolute inset-0">
        <div className="unified-blob unified-delay-3 absolute top-[25%] left-[50%] w-[300px] h-[300px] bg-purple-300 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[80px] opacity-10 dark:opacity-[0.05]" />
        <div className="unified-blob unified-delay-4 absolute top-[70%] right-[40%] w-[350px] h-[350px] bg-indigo-300 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[80px] opacity-10 dark:opacity-[0.05]" />
      </div>

      {/* Very subtle noise texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '256px 256px' }} />
    </div>
  )
}
