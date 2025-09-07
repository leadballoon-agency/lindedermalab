export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/images/new-logo-2-scaled-e1746157317110-1024x762.png" 
              alt="Aesthetics with Linde DermaLab" 
              className="h-12 mb-4"
            />
            <p className="text-gray-400">
              State-of-the-art CO2 laser treatments in Marylebone, London
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+447414245007" className="hover:text-white">
                  +44 7414 245007
                </a>
              </li>
              <li>
                <a href="mailto:info@lindedermalab.com" className="hover:text-white">
                  info@lindedermalab.com
                </a>
              </li>
              <li>Marylebone, London W1</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#treatments" className="hover:text-white">Treatments</a></li>
              <li><a href="#results" className="hover:text-white">Results</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="mb-2">&copy; 2024 Linde DermaLab. All rights reserved.</p>
          <a href="/privacy" className="text-gray-400 hover:text-white text-sm underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}