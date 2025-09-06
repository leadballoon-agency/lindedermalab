'use client'

import { BOOKING_CONFIG } from '@/config/booking'
import GHLBooking from './GHLBooking'

interface BookingButtonProps {
  buttonText?: string
  className?: string
  showIcon?: boolean
  onBookingClick?: () => void
}

export default function BookingButton({ 
  buttonText = 'Book Now', 
  className = '',
  showIcon = true,
  onBookingClick
}: BookingButtonProps) {
  
  // If GHL booking is enabled, use the GHL component
  if (BOOKING_CONFIG.USE_GHL_BOOKING) {
    return (
      <GHLBooking 
        buttonText={buttonText}
        className={className}
        showIcon={showIcon}
      />
    )
  }
  
  // Otherwise use the modal callback
  return (
    <button 
      onClick={onBookingClick}
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