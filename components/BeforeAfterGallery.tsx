'use client'

import { useState } from 'react'

interface BeforeAfterGalleryProps {
  onBookingClick?: () => void
}

export default function BeforeAfterGallery({ onBookingClick }: BeforeAfterGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('sideBySide')

  const beforeAfterPairs = [
    {
      before: '/images/before and after photos/1/before .png',
      after: '/images/before and after photos/1/after.png',
      title: 'Skin Texture Refinement',
      description: 'Dramatic improvement in skin texture and tone'
    },
    {
      before: '/images/before and after photos/2/before 1.png',
      after: '/images/before and after photos/2/after 1.png',
      title: 'Acne Scar Revision',
      description: 'Significant reduction in acne scarring'
    },
    {
      before: '/images/before and after photos/3/download.png',
      after: '/images/before and after photos/3/download-1.png',
      title: 'Pigmentation Treatment',
      description: 'Even skin tone and reduced pigmentation'
    },
    {
      before: '/images/before and after photos/4/download-5.png',
      after: '/images/before and after photos/4/download-4.png',
      title: 'Deep Resurfacing',
      description: 'Complete skin rejuvenation'
    },
    {
      before: '/images/before and after photos/5/download-2.png',
      after: '/images/before and after photos/5/download-3.png',
      title: 'Fine Lines & Wrinkles',
      description: 'Visible reduction in signs of aging'
    },
    {
      before: '/images/before and after photos/6/download-7.png',
      after: '/images/before and after photos/6/download-6.png',
      title: 'Skin Tightening',
      description: 'Improved skin elasticity and firmness'
    },
    {
      before: '/images/before and after photos/7/before8.png',
      after: '/images/before and after photos/7/after8.png',
      title: 'Comprehensive Transformation',
      description: 'Full facial rejuvenation results'
    }
  ]

  return (
    <section id="results" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Real Results</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Before & After
            <span className="block gradient-text">Transformations</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-2xl mx-auto px-4">
            Real patient results from our Lumenis UltraPulse® CO2 laser treatments
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setViewMode('sideBySide')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'sideBySide'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Side by Side
            </button>
            <button
              onClick={() => setViewMode('slider')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'slider'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Slider View
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {beforeAfterPairs.map((pair, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Images Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                {viewMode === 'sideBySide' ? (
                  <div className="flex h-full">
                    <div className="w-1/2 relative">
                      <img
                        src={pair.before}
                        alt={`Before - ${pair.title}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                        BEFORE
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <img
                        src={pair.after}
                        alt={`After - ${pair.title}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-xs font-medium">
                        AFTER
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={pair.after}
                      alt={`After - ${pair.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <img
                        src={pair.before}
                        alt={`Before - ${pair.title}`}
                        className="w-full h-full object-cover"
                        style={{ clipPath: 'inset(0 50% 0 0)' }}
                      />
                    </div>
                    <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                      HOVER TO COMPARE
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{pair.title}</h3>
                <p className="text-sm text-neutral-600 mb-3">{pair.description}</p>
                <div className="flex items-center text-primary-600 font-medium text-sm">
                  <span>View Details</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready for Your Transformation?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Our Lumenis UltraPulse® CO2 laser treatments deliver dramatic, lasting results. 
            Book your consultation today to start your journey.
          </p>
          <button
            onClick={onBookingClick}
            className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book Your Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl w-full">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="flex">
                  <div className="w-1/2">
                    <img
                      src={beforeAfterPairs[selectedImage].before}
                      alt={`Before - ${beforeAfterPairs[selectedImage].title}`}
                      className="w-full"
                    />
                    <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
                      BEFORE
                    </div>
                  </div>
                  <div className="w-1/2">
                    <img
                      src={beforeAfterPairs[selectedImage].after}
                      alt={`After - ${beforeAfterPairs[selectedImage].title}`}
                      className="w-full"
                    />
                    <div className="bg-primary-600 text-white text-center py-2 text-sm font-medium">
                      AFTER
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-2">{beforeAfterPairs[selectedImage].title}</h3>
                  <p className="text-gray-600">{beforeAfterPairs[selectedImage].description}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}