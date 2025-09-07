'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import PremiumHero from '@/components/PremiumHero'
import AssessmentTool from '@/components/AssessmentTool'
import UltraPulseSection from '@/components/UltraPulseSection'  // Combines both technologies
import TeamSection from '@/components/TeamSection'
import PremiumTreatments from '@/components/PremiumTreatments'
import ProcessSection from '@/components/ProcessSection'  // Keep process, remove HowItWorks
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'

export default function PageWrapperStreamlined() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [assessmentData, setAssessmentData] = useState<any>(null)

  return (
    <>
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />
      <main className="overflow-hidden">
        {/* Hero & Assessment - Keep for engagement */}
        <PremiumHero onBookingClick={() => setIsBookingModalOpen(true)} />
        <AssessmentTool 
          onBookingClick={() => setIsBookingModalOpen(true)} 
          onAssessmentComplete={(data) => setAssessmentData(data)}
        />
        
        {/* Technology - Combined section */}
        <UltraPulseSection onBookingClick={() => setIsBookingModalOpen(true)} />
        
        {/* Treatments & Process */}
        <PremiumTreatments onBookingClick={() => setIsBookingModalOpen(true)} />
        <ProcessSection onBookingClick={() => setIsBookingModalOpen(true)} />
        
        {/* Results & Credibility */}
        <BeforeAfterGallery onBookingClick={() => setIsBookingModalOpen(true)} />
        <TeamSection onBookingClick={() => setIsBookingModalOpen(true)} />
        
        {/* FAQ & Final CTA */}
        <FAQ onBookingClick={() => setIsBookingModalOpen(true)} />
        <CTASection onBookingClick={() => setIsBookingModalOpen(true)} />
      </main>
      <Footer />
      
      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        assessmentData={assessmentData}
      />
      
      {/* Floating Book Now Button */}
      <button
        onClick={() => setIsBookingModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center group"
      >
        <span className="mr-2">Book Now</span>
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </>
  )
}