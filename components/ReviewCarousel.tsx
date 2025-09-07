'use client'

import { useState, useEffect } from 'react'

interface ReviewCarouselProps {
  onBookingClick?: () => void
}

export default function ReviewCarousel({ onBookingClick }: ReviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const reviews = [
    {
      name: 'Anastasija Polosukhina',
      rating: 5,
      date: '1 month ago',
      text: 'I had my skin analysis with Observ520 before my CO2 laser treatment. Thanks to the team for their valuable recommendations! Everything was at a high level, as always ❤️',
      reviewCount: 6,
      verified: true,
      treatment: 'CO2 Laser Consultation'
    },
    {
      name: 'Silvia Lupascu',
      rating: 5,
      date: '1 month ago',
      text: 'Absolutely loved my CO2 laser experience! The team was so friendly and professional, and the clinic is stunning. My skin texture has improved dramatically—exactly what I wanted. I felt safe, heard, and looked after from start to finish. Highly recommend! ✨💕',
      reviewCount: 3,
      verified: true,
      treatment: 'CO2 Laser Resurfacing'
    },
    {
      name: 'Shabnam Nanji',
      rating: 5,
      date: '2 weeks ago',
      text: 'Very professional, detailed CO2 laser consultation and great results. Always available to answer questions post treatment',
      reviewCount: 2,
      verified: true,
      treatment: 'CO2 Laser Treatment'
    },
    {
      name: 'Dona Goonatilake',
      rating: 5,
      date: '1 month ago',
      text: 'Very happy with my CO2 laser treatment. So lovely and helpful staff. Looking forward to seeing the full results. Very affordable pricing.',
      reviewCount: 1,
      verified: true,
      treatment: 'CO2 Skin Rejuvenation'
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, reviews.length])

  const nextReview = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToReview = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm mb-4 animate-fade-in">
            Patient Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-slide-up">
            Real Stories,
            <span className="block mt-2 gradient-text">Real Results</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-6 max-w-2xl mx-auto animate-fade-in-delay">
            Discover what our patients are saying about their transformative experiences
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative max-w-5xl mx-auto perspective-1000">
          <div className="relative h-[500px] sm:h-[450px] md:h-[400px] flex items-center justify-center">
            {reviews.map((review, index) => {
              const offset = index - currentIndex
              const isActive = offset === 0
              const isPrev = offset === -1 || (currentIndex === 0 && index === reviews.length - 1)
              const isNext = offset === 1 || (currentIndex === reviews.length - 1 && index === 0)
              
              return (
                <div
                  key={index}
                  className={`absolute w-full max-w-xl sm:max-w-2xl px-4 transition-all duration-700 ease-out ${
                    isActive 
                      ? 'opacity-100 scale-100 z-20 transform-gpu translate-x-0 rotate-y-0' 
                      : isPrev
                        ? 'opacity-60 scale-90 z-10 transform-gpu -translate-x-full rotate-y-25'
                        : isNext
                          ? 'opacity-60 scale-90 z-10 transform-gpu translate-x-full -rotate-y-25'
                          : 'opacity-0 scale-75 -z-10'
                  }`}
                  style={{
                    transform: isActive 
                      ? 'translateX(0) rotateY(0deg) scale(1)' 
                      : isPrev
                        ? 'translateX(-60%) rotateY(25deg) scale(0.85)'
                        : isNext
                          ? 'translateX(60%) rotateY(-25deg) scale(0.85)'
                          : 'translateX(0) rotateY(0deg) scale(0.75)',
                    transformStyle: 'preserve-3d',
                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Glassmorphism Card */}
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    
                    {/* Card Content */}
                    <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/50 transform-gpu transition-all duration-500 hover:bg-white/90">
                      {/* Google Review Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            {/* Avatar */}
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{review.name}</h3>
                              <p className="text-xs text-gray-600">{review.reviewCount} reviews • {review.date}</p>
                            </div>
                          </div>
                          
                          {/* Star Rating */}
                          <div className="flex items-center gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        
                        {/* Google Logo */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      </div>

                      {/* Treatment Badge */}
                      {review.treatment && (
                        <div className="inline-flex items-center px-3 py-1 bg-primary-100/50 backdrop-blur text-primary-700 rounded-full text-xs font-medium mb-4">
                          <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {review.treatment}
                        </div>
                      )}

                      {/* Review Text */}
                      <p className="text-gray-700 leading-relaxed mb-6 min-h-[120px]">
                        "{review.text}"
                      </p>

                      {/* Verified Badge */}
                      {review.verified && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-xs text-gray-500">
                            <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Verified Google Review
                          </div>
                          <span className="text-xs text-gray-400">via Google Reviews</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 sm:mt-12">
            <button
              onClick={prevReview}
              className="p-3 sm:p-4 rounded-full bg-white/80 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              aria-label="Previous review"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-12 h-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-lg' 
                      : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-3 sm:p-4 rounded-full bg-white/80 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              aria-label="Next review"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 sm:mt-20 bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm text-gray-600">Google Rating</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">127+</div>
              <div className="text-sm text-gray-600">Happy Patients</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Join our community of satisfied patients
          </p>
          <button
            onClick={onBookingClick}
            className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            Book Your Consultation (£50 Redeemable)
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-gpu {
          transform-style: preserve-3d;
        }
        .rotate-y-25 {
          transform: rotateY(25deg);
        }
        .-rotate-y-25 {
          transform: rotateY(-25deg);
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  )
}