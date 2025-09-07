interface TeamSectionProps {
  onBookingClick?: () => void
}

export default function TeamSection({ onBookingClick }: TeamSectionProps) {
  return (
    <section id="team" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-7xl mx-auto section-padding">
        <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Our Team</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
          Meet Your
          <span className="block gradient-text">Treatment Team</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-2xl mx-auto px-4">
          Expert care from the entire Linde DermaLab team
        </p>
      </div>

      {/* Full-width team member */}
      <div className="w-full">
        <div className="bg-white overflow-hidden shadow-lg sm:shadow-premium hover:shadow-premium-lg transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section - Full Width */}
            <div className="aspect-[4/3] lg:aspect-auto relative">
              <img 
                src="/images/team4.jpg" 
                alt="Linde DermaLab Team - Experts in Anti-Ageing & Skin Health"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r"></div>
            </div>
            
            {/* Content Section */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  Linde DermaLab Team
                </h3>
                <p className="text-lg sm:text-xl text-primary-600 font-medium">
                  Expert in Anti-Ageing & Skin Health
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-neutral-600 mb-8 leading-relaxed">
                As experts in anti-ageing and skin health with over 10 years of experience in advanced aesthetic treatments, 
                our team leads the CO2 laser program with a focus on excellence and patient safety. Our commitment is to deliver 
                transformative results while ensuring the highest standards of care throughout your treatment journey.
              </p>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-neutral-500">
                  Qualifications & Expertise
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Expert in Anti-Ageing & Skin Health',
                    'Advanced CO2 Certification',
                    'Laser Safety Officer',
                    '10+ Years Experience',
                    'Observ520 Skin Analysis Expert',
                    'Continuous Professional Development'
                  ].map((qual, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base text-neutral-700">
                      <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={onBookingClick}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book Your Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="max-w-7xl mx-auto section-padding mt-12 sm:mt-16">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg sm:shadow-premium">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🔬</span>
              </div>
              <h4 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Advanced Technology</h4>
              <p className="text-xs sm:text-sm text-neutral-600">Observ520 & CO2 Laser</p>
            </div>
            <div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Proven Results</h4>
              <p className="text-xs sm:text-sm text-neutral-600">10+ Years Experience</p>
            </div>
            <div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">💝</span>
              </div>
              <h4 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Personalized Care</h4>
              <p className="text-xs sm:text-sm text-neutral-600">Tailored treatments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}