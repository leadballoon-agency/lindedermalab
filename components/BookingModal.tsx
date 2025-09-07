'use client'

import { useEffect, useState } from 'react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  assessmentData?: any
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setIsLoading(true)
      
      // Load the embed script
      const script = document.createElement('script')
      script.src = 'https://link.leadballoon.co.uk/js/form_embed.js'
      script.type = 'text/javascript'
      script.async = true
      script.onload = () => setIsLoading(false)
      document.body.appendChild(script)
      
      return () => {
        document.body.removeChild(script)
      }
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop with blur */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal - Mobile First Design */}
      <div className="flex min-h-screen items-end sm:items-center justify-center p-0 sm:p-4">
        <div className="relative bg-white w-full sm:max-w-5xl sm:rounded-2xl shadow-2xl overflow-hidden transform transition-all">
          {/* Header - Elegant Gradient */}
          <div className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 px-4 sm:px-6 py-4 sm:py-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  CO2 Laser Consultation - Linde DermaLab
                </h2>
                <p className="text-sm text-white/80 mt-1">
                  £50 consultation fee - fully redeemable against any treatment
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors p-2"
                aria-label="Close booking modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 bg-white z-10 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                </div>
                <p className="text-gray-600">Loading calendar...</p>
              </div>
            </div>
          )}

          {/* Calendar Container - Responsive Height */}
          <div className="relative bg-gradient-to-b from-gray-50 to-white">
            <div className="w-full" style={{ minHeight: '600px', height: '70vh', maxHeight: '800px' }}>
              <iframe
                src="https://link.leadballoon.co.uk/widget/booking/Lg9ddozlnpd7sEyiOdpN"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  overflow: 'hidden'
                }}
                scrolling="no"
                id="Lg9ddozlnpd7sEyiOdpN_booking_modal"
                title="Book Your Consultation"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>

          {/* Call Option Banner */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 border-t border-primary-200 px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold text-gray-900">Prefer to book by phone?</p>
                <p className="text-xs text-gray-600">Speak with Kerry for instant confirmation</p>
              </div>
              <a 
                href="tel:+447414245007" 
                className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Kerry Now
              </a>
            </div>
          </div>

          {/* Footer - Trust Indicators */}
          <div className="bg-white border-t px-4 sm:px-6 py-3">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Instant Confirmation</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>5-Star Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}