interface PremiumHeroProps {
  onBookingClick?: () => void
}

export default function PremiumHero({ onBookingClick }: PremiumHeroProps) {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-slide-up text-center lg:text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 rounded-full mx-auto lg:mx-0">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-primary-700 font-medium text-xs sm:text-sm">Advanced CO2 Laser Treatment</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
              Transform Your
              <span className="block gradient-text mt-1">Skin Today</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Experience the gold standard in laser skin rejuvenation with Linde DermaLab's expert CO2 treatments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <button 
                onClick={onBookingClick}
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-7 py-3.5 rounded-full font-medium text-base hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Book Now - £150
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <a 
                href="#assessment" 
                className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 px-7 py-3.5 rounded-full font-medium text-base hover:bg-primary-50 transition-all duration-300 w-full sm:w-auto"
              >
                Take Assessment
              </a>
            </div>

            {/* Social Proof - Mobile Optimized */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-2">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">10+</p>
                <p className="text-xs text-neutral-600">Years Expert</p>
              </div>
              <div className="text-neutral-300">|</div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">10+</p>
                <p className="text-xs text-neutral-600">Years Exp.</p>
              </div>
              <div className="text-neutral-300">|</div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">£150</p>
                <p className="text-xs text-neutral-600">Starting</p>
              </div>
            </div>
          </div>

          {/* Mobile Video Section - Simple and Clean */}
          <div className="relative mt-8 lg:hidden">
            <div className="relative mx-auto max-w-[320px]">
              <div className="relative rounded-2xl shadow-xl overflow-hidden ring-2 ring-primary-200" style={{paddingBottom: '56.25%'}}>
                <iframe 
                  src="https://www.youtube.com/embed/102qqybX5QI?autoplay=1&mute=1&loop=1&playlist=102qqybX5QI&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                  title="CO2 Laser Treatment Video"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-white rounded-lg shadow-lg p-2">
                <p className="text-lg font-bold gradient-text">Expert</p>
              </div>
            </div>
          </div>

          {/* Desktop Video Section */}
          <div className="relative mt-8 lg:mt-0 hidden lg:block">
            <div className="relative h-[600px] flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-3xl"></div>
              
              <div className="relative flex items-center justify-center h-full w-full">
                {/* Main Video */}
                <div className="relative w-full max-w-lg">
                  {/* Video Container with Glow Effect */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                    <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-black" style={{paddingBottom: '56.25%'}}>
                      <iframe 
                        src="https://www.youtube.com/embed/102qqybX5QI?autoplay=1&mute=1&loop=1&playlist=102qqybX5QI&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                        title="CO2 Laser Treatment Video"
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  {/* Video Caption */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-sm text-primary-600 font-medium">Watch Our Treatment Process</p>
                  </div>
                </div>
              </div>

              {/* Info Card - Desktop Only */}
              <div className="hidden lg:block absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-lg">
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">Expert CO2 Laser Specialist</h3>
                    <div className="flex justify-center items-center space-x-2 text-primary-600">
                      <span className="font-medium">10+ Years Experience</span>
                      <span className="text-primary-300">•</span>
                      <span className="font-medium">Advanced Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements - Hidden on Mobile */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-float opacity-20 blur-2xl"></div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-tr from-primary-300 to-primary-500 rounded-full animate-float opacity-20 blur-2xl" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Visible on all devices */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-xs text-neutral-500 mb-2">Scroll to explore</span>
          <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}