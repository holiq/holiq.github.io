'use client'

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-96">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="w-12 h-12 rounded-full border-4 border-slate-700 border-t-purple-500 animate-spin" />
        
        {/* Inner pulse */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  )
}
