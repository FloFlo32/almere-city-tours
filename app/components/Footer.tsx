import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-500 border-b-4 border-[#E07B2A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Logo + tagline */}
        <div>
          <div className="mb-5">
            <Image
              src="/images/logo.png"
              alt="Almere City Tours"
              width={180}
              height={56}
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="text-base leading-relaxed text-gray-700 font-medium">
            Stap aan boord en ontdek samen met ons Almere van haar mooiste kant.
          </p>
        </div>

        {/* Col 2: Nav links */}
        <div>
          <h4 className="text-gray-800 font-semibold mb-4 text-sm">Almere City Tours</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/', label: 'Home', orange: true },
              { href: '/ontdek-almere', label: 'Informatie', orange: true },
              { href: '/tarieven', label: 'Tarieven', orange: false },
              { href: '/ontdek-almere', label: 'Ontdek Almere', orange: false },
              { href: '/contact', label: 'Contact', orange: false },
              { href: '/contact', label: 'City tour boeken', orange: false },
              { href: '/', label: 'Privacybeleid', orange: false },
            ].map(({ href, label, orange }, i) => (
              <li key={i}>
                <Link
                  href={href}
                  className={`transition-colors duration-150 hover:text-[#E07B2A] ${orange ? 'text-[#E07B2A]' : 'text-gray-600'}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Gegevens */}
        <div>
          <h4 className="text-gray-800 font-semibold mb-4 text-sm">Gegevens</h4>
          <address className="not-italic text-sm space-y-1 leading-relaxed text-gray-600">
            <p>Almere City Tours</p>
            <p>Esplanade 14</p>
            <p>1315 TN Almere</p>
            <p className="mt-3">Ontvangst bij Strand 22 in Almere Stad.</p>
          </address>
        </div>

        {/* Col 4: Contact */}
        <div>
          <h4 className="text-gray-800 font-semibold mb-4 text-sm">Contact</h4>
          <p className="text-sm mb-5 leading-relaxed text-gray-600">
            Neem contact met ons op via het contactformulier op de contactpagina.
          </p>
          <Link href="/contact" className="btn-orange text-sm py-2 px-5 rounded">
            Contact
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-xs text-gray-400 flex flex-wrap gap-1 items-center">
          <span>©2026 • Almere City Tours • Redesigned by</span>
          <span className="text-gray-500 font-medium">yetti.ai</span>
        </div>
      </div>
    </footer>
  )
}
