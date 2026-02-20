'use client'

function SkeletonBox({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-white/5 rounded-xl ${className}`} />
  )
}

export function GitHubStatsSkeleton() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 flex flex-col items-center gap-4"
            >
              <SkeletonBox className="w-14 h-14 rounded-2xl" />
              <SkeletonBox className="h-10 w-28" />
              <SkeletonBox className="h-4 w-36" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSkeleton() {
  return (
    <div className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex justify-center mb-20">
          <SkeletonBox className="h-14 w-48" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 overflow-hidden"
            >
              {/* Image placeholder */}
              <SkeletonBox className="h-48 w-full rounded-none" />
              <div className="p-8 space-y-4">
                <div className="flex justify-between">
                  <SkeletonBox className="h-7 w-36" />
                  <SkeletonBox className="h-6 w-20 rounded-full" />
                </div>
                <SkeletonBox className="h-4 w-24" />
                <SkeletonBox className="h-4 w-full" />
                <SkeletonBox className="h-4 w-5/6" />
                <div className="flex gap-2 pt-1">
                  <SkeletonBox className="h-6 w-16 rounded-full" />
                  <SkeletonBox className="h-6 w-20 rounded-full" />
                  <SkeletonBox className="h-6 w-14 rounded-full" />
                </div>
                <div className="flex gap-3 pt-2">
                  <SkeletonBox className="h-10 flex-1 rounded-xl" />
                  <SkeletonBox className="h-10 flex-1 rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function SkillsSkeleton() {
  return (
    <div className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-20">
          <SkeletonBox className="h-14 w-64" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <SkeletonBox className="w-12 h-12 rounded-xl" />
                <SkeletonBox className="h-6 w-24" />
              </div>
              <div className="space-y-3">
                {[...Array(3)].map((_, j) => (
                  <SkeletonBox key={j} className="h-10 w-full rounded-lg" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
