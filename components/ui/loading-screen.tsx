import React from "react"

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      {/* Circular Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mb-6">
      </div>
      
      {/* Loading Text */}
      <p className="text-white text-lg font-sans tracking-wide">
        Processing Candidate Data…
      </p>
      
      {/* CSS Animation */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  )
}
