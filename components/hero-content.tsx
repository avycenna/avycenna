"use client"

export default function HeroContent() {
  return (
    <main className="absolute inset-0 flex items-center justify-center z-20 px-4">
      <div className="flex flex-col items-center text-center max-w-lg mx-auto">
        <div
          className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 font-light relative z-10">Coming Soon</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-tight tracking-tight font-light text-white mb-4">
          <span className="font-light tracking-tight text-white">The</span>&nbsp;
          <span className="font-medium italic">Avycenna</span>
          <br />
          <span className="font-light tracking-tight text-white">Experience</span>
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base font-light text-white/70 mb-4 leading-relaxed max-w-prose">
          Build your next project with purpose.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90"
            onClick={() => window.location.href = 'mailto:contact@avycenna.com'}
          >
            Get Started
          </button>
        </div>
      </div>
    </main>
  )
}
