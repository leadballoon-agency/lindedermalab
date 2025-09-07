'use client'

import { useState } from 'react'

interface BeforeAfterSliderProps {
  onBookingClick?: () => void
}

export default function BeforeAfterSlider({ onBookingClick }: BeforeAfterSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const beforeAfterPairs = [
    {
      before: '/images/before and after photos/1/before .png',
      after: '/images/before and after photos/1/after.png',
      title: 'Skin Texture Refinement',
      description: 'Dramatic improvement in texture and tone',
      details: '3 sessions over 12 weeks'
    },
    {
      before: '/images/before and after photos/2/before 1.png',
      after: '/images/before and after photos/2/after 1.png',
      title: 'Acne Scar Revision',
      description: 'Significant reduction in scarring',
      details: '2 sessions, 6 weeks apart'
    },
    {
      before: '/images/before and after photos/3/download.png',
      after: '/images/before and after photos/3/download-1.png',
      title: 'Pigmentation Treatment',
      description: 'Even skin tone restored',
      details: 'Single treatment session'
    },
    {
      before: '/images/before and after photos/4/download-5.png',
      after: '/images/before and after photos/4/download-4.png',
      title: 'Deep Resurfacing',
      description: 'Complete skin rejuvenation',
      details: 'Full face treatment'
    },
    {
      before: '/images/before and after photos/5/download-2.png',
      after: '/images/before and after photos/5/download-3.png',
      title: 'Fine Lines & Wrinkles',
      description: 'Visible age reversal',
      details: 'Single session results'
    },
    {
      before: '/images/before and after photos/6/download-7.png',
      after: '/images/before and after photos/6/download-6.png',
      title: 'Skin Tightening',
      description: 'Improved elasticity',
      details: 'Progressive improvement'
    },
    {
      before: '/images/before and after photos/7/before8.png',
      after: '/images/before and after photos/7/after8.png',
      title: 'Full Transformation',
      description: 'Comprehensive facial rejuvenation',
      details: 'Complete treatment program'
    }
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % beforeAfterPairs.length)
    setSliderPosition(50)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + beforeAfterPairs.length) % beforeAfterPairs.length)
    setSliderPosition(50)
  }

  return (
    <section id="results" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white via-primary-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm mb-4">
            Real Patient Results
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Transformations That
            <span className="block mt-2 gradient-text">Speak For Themselves</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-6 max-w-2xl mx-auto">
            Witness the remarkable results achieved with our Lumenis UltraPulse® CO2 laser treatments
          </p>
        </div>

        {/* Main Slider Container */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Image Comparison Slider */}
            <div 
              className="relative aspect-[16/10] sm:aspect-[16/9] cursor-ew-resize select-none"
              onMouseMove={handleMouseMove}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Bottom Layer) */}
              <div className="absolute inset-0">
                <img
                  src={beforeAfterPairs[activeIndex].after}
                  alt="After treatment"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  AFTER
                </div>
              </div>

              {/* Before Image (Top Layer with Clip) */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={beforeAfterPairs[activeIndex].before}
                  alt="Before treatment"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute top-4 left-4 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  BEFORE
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>

              {/* Instruction Overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur text-white px-4 py-2 rounded-full text-sm">
                Drag to compare
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8 bg-gradient-to-b from-white to-gray-50">
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  {beforeAfterPairs[activeIndex].title}
                </h3>
                <p className="text-lg text-gray-600 mb-1">
                  {beforeAfterPairs[activeIndex].description}
                </p>
                <p className="text-sm text-primary-600 font-medium">
                  {beforeAfterPairs[activeIndex].details}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Previous result"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {beforeAfterPairs.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveIndex(index)
                        setSliderPosition(50)
                      }}
                      className={`transition-all duration-300 ${
                        index === activeIndex 
                          ? 'w-8 h-2 bg-primary-600 rounded-full' 
                          : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                      }`}
                      aria-label={`Go to result ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Next result"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {beforeAfterPairs.map((pair, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  setSliderPosition(50)
                }}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                  index === activeIndex 
                    ? 'ring-2 ring-primary-600 ring-offset-2 scale-105' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={pair.after}
                  alt={`Result ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm sm:text-base opacity-90">Patient Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm sm:text-base opacity-90">Treatments Performed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">10+</div>
              <div className="text-sm sm:text-base opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">5★</div>
              <div className="text-sm sm:text-base opacity-90">Google Rating</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your transformation journey?
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
    </section>
  )
}