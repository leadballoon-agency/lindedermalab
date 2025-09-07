interface UltraPulseSectionProps {
  onBookingClick?: () => void
}

export default function UltraPulseSection({ onBookingClick }: UltraPulseSectionProps) {
  const treatments = [
    {
      icon: '🎯',
      title: 'SCAAR FX™ Mode',
      description: 'Advanced treatment for severely damaged skin lesions with synergistic coagulation and ablation.',
      highlight: true
    },
    {
      icon: '✨',
      title: 'Acne Scar Revision',
      description: 'Dramatically decrease even very deep scars while repairing damaged skin and improving tone.'
    },
    {
      icon: '👁️',
      title: 'Syringomas',
      description: 'Safe, non-scarring treatment for benign tumors typically found on eyelids.'
    },
    {
      icon: '💎',
      title: 'Fractional Resurfacing',
      description: 'Reduce signs of aging, improve texture and laxity, treat scars and stretch marks in a single session.'
    },
    {
      icon: '🔬',
      title: 'Blepharoplasty',
      description: 'Complete laser solution with reduced bleeding and minimal post-surgery bruising.'
    },
    {
      icon: '🌟',
      title: 'Rhinophyma',
      description: 'Precise CO2 laser treatment for bulbous nose conditions associated with rosacea.'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Advanced Technology</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Lumenis UltraPulse®
            <span className="block gradient-text">With SCAAR FX™ Technology</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-3xl mx-auto px-4">
            We use the gold standard in CO2 laser technology - the Lumenis UltraPulse® system with 
            revolutionary SCAAR FX™ mode for advanced skin resurfacing and scar revision
          </p>
        </div>

        {/* Main Feature Box */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 sm:p-12 text-white mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                The Gold Standard in CO2 Technology
              </h3>
              <p className="text-lg mb-6 text-white/90">
                The Lumenis UltraPulse® system delivers unmatched precision and power, enabling 
                dramatic improvements in skin texture, tone, and appearance with minimal downtime.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/80 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Unique pulse technology for optimal results</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/80 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Tailored treatment modes for every concern</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white/80 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>High improvement rate with minimal downtime</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h4 className="text-2xl font-bold mb-2">Industry Leader</h4>
              <p className="text-white/90">
                Lumenis is the world's largest energy-based medical device company for aesthetic applications
              </p>
            </div>
          </div>
        </div>

        {/* Treatment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all ${
                treatment.highlight ? 'ring-2 ring-primary-500 ring-offset-2' : ''
              }`}
            >
              <div className="text-3xl mb-3">{treatment.icon}</div>
              <h3 className="text-lg font-bold mb-2">
                {treatment.title}
                {treatment.highlight && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    Exclusive
                  </span>
                )}
              </h3>
              <p className="text-sm text-neutral-600">{treatment.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Experience the Difference of Medical-Grade Technology
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Our Lumenis UltraPulse® system with SCAAR FX™ mode delivers results that other 
              treatments simply cannot achieve. Book your consultation to learn more.
            </p>
            <button 
              onClick={onBookingClick}
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Discover UltraPulse Treatment
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="mt-4 text-sm text-neutral-500">
              Learn more at{' '}
              <a 
                href="https://lumenis.co.uk/solutions/aesthetic/products/ultrapulse/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                lumenis.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}