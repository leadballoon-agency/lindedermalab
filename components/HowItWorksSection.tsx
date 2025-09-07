interface HowItWorksSectionProps {
  onBookingClick?: () => void
}

export default function HowItWorksSection({ onBookingClick }: HowItWorksSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">The Science</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            How Fractional CO₂ Laser
            <span className="block gradient-text">Actually Works</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-2xl mx-auto px-4">
            Understanding the science behind your transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Precision Targeting</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our Lumenis UltraPulse® fractional CO₂ laser creates tiny, precise treatment zones while 
                leaving surrounding tissue intact. This means faster healing and reduced downtime while still 
                achieving dramatic results.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Deep Collagen Stimulation</h3>
              <p className="text-neutral-600 leading-relaxed">
                The laser heats the deeper dermis layer, triggering your body's natural collagen production. 
                Collagen is the protein that keeps skin smooth and firm—and its natural decline is why we 
                develop wrinkles, sagging, and enlarged pores.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Accelerated Skin Renewal</h3>
              <p className="text-neutral-600 leading-relaxed">
                Fresh skin cell turnover is dramatically increased, revealing healthier, smoother skin. 
                This process effectively treats acne scars, sun damage, and pigmentation issues while 
                being safe for various skin tones.
              </p>
            </div>
          </div>
        </div>

        {/* The Result */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">The Result?</h3>
          <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Your skin doesn't just look better on the surface—it's actually renewed from within. 
            That's why clients see massive improvements that continue developing for months after treatment.
          </p>
          <button 
            onClick={onBookingClick}
            className="inline-flex items-center justify-center bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your Transformation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}