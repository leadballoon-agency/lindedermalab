import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
            Privacy Policy
          </h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p>
                Linde DermaLab ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information 
                when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when booking consultations or contacting us.</li>
                <li><strong>Health Information:</strong> Information about your skin concerns and treatment history that you share during consultations.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Schedule and manage your appointments</li>
                <li>Provide personalized treatment recommendations</li>
                <li>Send appointment reminders and follow-up communications</li>
                <li>Improve our services and website experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your 
                personal data against unauthorized access, alteration, disclosure, or destruction. 
                Your data is stored securely and accessed only by authorized personnel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="mb-3">Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. These are small 
                text files stored on your device that help us analyze website traffic and remember 
                your preferences. You can control cookie settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p>
                We may use third-party services for appointment booking and payment processing. 
                These services have their own privacy policies, and we encourage you to review them. 
                We are not responsible for the privacy practices of third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes 
                for which it was collected and to comply with legal requirements. Medical records 
                are retained in accordance with NHS guidelines and professional standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under 18 years of age. We do not 
                knowingly collect personal information from children. If you believe we have 
                collected information from a minor, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted 
                on this page with an updated revision date. We encourage you to review this policy 
                periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-3">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Linde DermaLab</strong></p>
                <p>Email: <a href="mailto:info@lindedermalab.com" className="text-primary-600 hover:underline">info@lindedermalab.com</a></p>
                <p>Phone: <a href="tel:+447414245007" className="text-primary-600 hover:underline">+44 7414 245007</a></p>
                <p>Address: Marylebone, London W1</p>
              </div>
            </section>

            <section className="pt-6 border-t">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}