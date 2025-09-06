interface WhyChooseUsSectionProps {
  onBookingClick?: () => void
}

export default function WhyChooseUsSection({ onBookingClick }: WhyChooseUsSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">The Difference</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Why Linde DermaLab
            <span className="block gradient-text">Stands Alone</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-2xl mx-auto px-4 italic">
            "I have had treatments in various clinics across London and I can honestly say Linde DermaLab stands alone."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Expert-Led Excellence */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-3">Expert-Led Excellence</h3>
            <p className="text-neutral-600 leading-relaxed">
              Clients consistently say "Tatiana is very knowledgeable and excellent at what she does." 
              Our expert-led clinic means you get professional, clinical expertise that other practitioners 
              simply can't deliver.
            </p>
          </div>

          {/* Massive Improvements, Fast */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold mb-3">Massive Improvements, Fast</h3>
            <p className="text-neutral-600 leading-relaxed">
              Real clients report "massive improvement in my skin after just one visit." 
              While others promise results, Linde DermaLab actually delivers them—quickly and visibly.
            </p>
          </div>

          {/* Professional Treatment Environment */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="text-xl font-bold mb-3">Professional Treatment Environment</h3>
            <p className="text-neutral-600 leading-relaxed">
              Experience treatments in a clean, professional clinic designed for your comfort and safety. 
              Our welcoming environment ensures you feel at ease throughout your entire treatment experience.
            </p>
          </div>

          {/* Clear Communication */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-3">You'll Know Everything</h3>
            <p className="text-neutral-600 leading-relaxed">
              "Tatiana always makes sure you know exactly what's happening and talks you through your treatment." 
              No confusion, no surprises—just clear, caring communication.
            </p>
          </div>

          {/* Clients Return Again & Again */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-bold mb-3">Clients Return Again & Again</h3>
            <p className="text-neutral-600 leading-relaxed">
              "I've had many treatments with her" - clients don't just come once, they build relationships 
              with Tatiana and the team because the results and experience are exceptional.
            </p>
          </div>

          {/* Can't Recommend Highly Enough */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-bold mb-3">Can't Recommend Highly Enough</h3>
            <p className="text-neutral-600 leading-relaxed">
              Clients don't just like Linde DermaLab—they become passionate advocates who 
              "will definitely recommend to all friends and family." That's the Linde DermaLab difference.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-br from-primary-100 to-white rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why Clients Choose Linde DermaLab</h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
            When you've tried treatments at various clinics and nothing compares, you understand why 
            Linde DermaLab truly stands alone in delivering exceptional results with unmatched professional care.
          </p>
          <button 
            onClick={onBookingClick}
            className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Experience The Difference
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}