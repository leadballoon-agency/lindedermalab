'use client'

import { BOOKING_CONFIG } from '@/config/booking'

interface GHLBookingProps {
  buttonText?: string
  className?: string
  showIcon?: boolean
}

export default function GHLBooking({ 
  buttonText = 'Book Now', 
  className = '',
  showIcon = true 
}: GHLBookingProps) {
  
  const handleBooking = () => {
    // Open GHL booking in new tab
    window.open(BOOKING_CONFIG.GHL_BOOKING_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <button 
      onClick={handleBooking}
      className={className || "inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"}
    >
      {buttonText}
      {showIcon && (
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      )}
    </button>
  )
}

export const GHL_CALENDAR_URL = BOOKING_CONFIG.GHL_BOOKING_URL