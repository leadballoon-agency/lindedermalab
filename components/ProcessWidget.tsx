'use client'

import { useState } from 'react'

interface ProcessWidgetProps {
  onBookingClick?: () => void
}

export default function ProcessWidget({ onBookingClick }: ProcessWidgetProps) {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: '01',
      title: '£50 Consultation (Redeemable)',
      duration: '30 minutes',
      icon: '🔍',
      description: 'Meet with our expert team for a comprehensive skin analysis using the Observ520 system. Your £50 consultation fee is fully redeemable against any treatment.',
      details: [
        'Detailed skin assessment',
        'Observ520 diagnostic imaging',
        'Personalized treatment plan',
        '£50 fee redeemable against treatment'
      ],
      image: '/images/girl-with-freckles.png'
    },
    {
      number: '02',
      title: 'Treatment Planning',
      duration: '15 minutes',
      icon: '📋',
      description: 'We create a customized treatment protocol based on your specific skin concerns and goals.',
      details: [
        'Detailed treatment roadmap',
        'Expected outcomes discussion',
        'Pricing and package options',
        'Pre-treatment instructions'
      ],
      image: '/images/beneath-the-skin.png'
    },
    {
      number: '03',
      title: 'Preparation',
      duration: 'Day of treatment',
      icon: '✨',
      description: 'Your skin is cleansed and prepared with numbing cream for maximum comfort.',
      details: [
        'Gentle cleansing routine',
        'Topical numbing application',
        'Final skin assessment',
        'Comfort measures explained'
      ],
      image: '/images/team4.jpg'
    },
    {
      number: '04',
      title: 'CO2 Laser Treatment',
      duration: '30-90 minutes',
      icon: '💫',
      description: 'Precise application of the Lumenis UltraPulse® laser with SCAAR FX™ technology.',
      details: [
        'Targeted laser application',
        'Real-time skin monitoring',
        'Comfort checks throughout',
        'Immediate cooling therapy'
      ],
      image: '/images/new-logo-2-scaled-e1746157317110-1024x762.png'
    },
    {
      number: '05',
      title: 'Recovery & Healing',
      duration: '5-7 days',
      icon: '🌱',
      description: 'Your skin begins its natural healing process with our comprehensive aftercare support.',
      details: [
        'Daily check-in support',
        'Healing progress tracking',
        'Skincare routine guidance',
        '24/7 support line access'
      ],
      image: '/images/before and after photos/7/after8.png'
    },
    {
      number: '06',
      title: 'Results & Follow-up',
      duration: '3-6 months',
      icon: '🌟',
      description: 'Watch your skin transform as collagen production continues and final results emerge.',
      details: [
        'Progressive improvement',
        'Follow-up appointments',
        'Maintenance planning',
        'Long-term care advice'
      ],
      image: '/images/before and after photos/1/after.png'
    }
  ]

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length)
  }

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">
            Treatment Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Your Path to
            <span className="block gradient-text">Perfect Skin</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-2xl mx-auto">
            Click through each step to understand your treatment journey
          </p>
        </div>

        {/* Main Widget Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-gray-50 p-6 border-b">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`flex-1 relative ${index < steps.length - 1 ? 'mr-2' : ''}`}
                  >
                    <div className="flex items-center">
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all
                        ${index === activeStep 
                          ? 'bg-primary-600 text-white scale-110 shadow-lg' 
                          : index < activeStep 
                            ? 'bg-primary-200 text-primary-700' 
                            : 'bg-gray-200 text-gray-500'
                        }
                      `}>
                        {index < activeStep ? '✓' : step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`
                          flex-1 h-1 ml-2 transition-all
                          ${index < activeStep ? 'bg-primary-400' : 'bg-gray-200'}
                        `} />
                      )}
                    </div>
                    <p className={`
                      text-xs mt-2 transition-all hidden sm:block
                      ${index === activeStep ? 'text-primary-600 font-semibold' : 'text-gray-500'}
                    `}>
                      {step.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="grid lg:grid-cols-2 min-h-[500px]">
              {/* Image Side */}
              <div className="relative bg-gradient-to-br from-primary-100 to-primary-50 order-2 lg:order-1">
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-5xl mb-3">{steps[activeStep].icon}</div>
                  <div className="text-sm font-medium bg-white/20 backdrop-blur inline-block px-3 py-1 rounded-full">
                    {steps[activeStep].duration}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 sm:p-12 flex flex-col order-1 lg:order-2">
                <div className="flex-1">
                  <div className="text-primary-600 font-bold text-sm mb-2">
                    STEP {steps[activeStep].number}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    {steps[activeStep].description}
                  </p>

                  <div className="space-y-3">
                    {steps[activeStep].details.map((detail, index) => (
                      <div key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-8 pt-8 border-t">
                  <button
                    onClick={prevStep}
                    className="flex items-center text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>

                  <div className="flex gap-2">
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`
                          w-2 h-2 rounded-full transition-all
                          ${index === activeStep 
                            ? 'w-8 bg-primary-600' 
                            : 'bg-gray-300 hover:bg-gray-400'
                          }
                        `}
                        aria-label={`Go to step ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextStep}
                    className="flex items-center text-primary-600 hover:text-primary-700 transition-colors font-medium"
                  >
                    Next
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom CTA Bar */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-white text-center">
              <p className="mb-3 text-lg">Ready to start your journey?</p>
              <button
                onClick={onBookingClick}
                className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Book Consultation (£50 Redeemable)
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-600">30min</div>
            <div className="text-sm text-gray-600">Consultation</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600">5-7</div>
            <div className="text-sm text-gray-600">Days Recovery</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600">98%</div>
            <div className="text-sm text-gray-600">Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600">3-6mo</div>
            <div className="text-sm text-gray-600">Full Results</div>
          </div>
        </div>
      </div>
    </section>
  )
}