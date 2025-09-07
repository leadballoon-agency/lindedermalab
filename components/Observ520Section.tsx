interface Observ520SectionProps {
  onBookingClick?: () => void
}

export default function Observ520Section({ onBookingClick }: Observ520SectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Advanced Technology</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Observ520 Skin Analysis
            <span className="block gradient-text mt-1">Precision Diagnostics</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image placeholder - will be replaced when image is added */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative bg-gradient-to-br from-primary-50 to-white">
                <img 
                  src="/images/girl-with-freckles.png" 
                  alt="Observ520 Skin Analysis - Revealing skin conditions beneath the surface"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                See Beyond the Surface
              </h3>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                Our state-of-the-art Observ520 skin analysis system uses advanced imaging technology 
                to reveal underlying skin conditions invisible to the naked eye.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">What It Reveals:</h4>
              <ul className="space-y-3">
                {[
                  'Sun damage and UV spots before they surface',
                  'Underlying pigmentation and melasma',
                  'Vascular conditions and redness',
                  'Pore size and oil production',
                  'Skin texture and fine lines',
                  'Bacterial presence and acne development'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary-50 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-2">Precision Treatment Planning</h4>
              <p className="text-sm sm:text-base text-neutral-600 mb-4">
                The Observ520 analysis ensures your CO2 laser treatment is precisely 
                tailored to address your specific skin concerns for optimal results.
              </p>
              <button 
                onClick={onBookingClick}
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Book Your Analysis
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}