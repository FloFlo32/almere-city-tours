import Image from 'next/image'
import CtaBanner from '../components/CtaBanner'

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-14 pb-10 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#E07B2A] mb-3">Een persoonlijke antwoord</h1>
        <p className="text-gray-500 text-sm">Op al je vragen, opmerkingen of bijzonderheden.</p>
      </section>

      {/* Two-column layout */}
      <section className="pb-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: image + info */}
          <div>
            {/* Boat image */}
            <div className="w-full h-52 rounded-xl mb-6 relative overflow-hidden">
              <Image
                src="/images/rondvaartboot.jpg"
                alt="Almere City Tours boot"
                fill
                className="object-cover object-center"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-1">Welkom aan boord</h3>
            <p className="text-gray-500 text-sm mb-4">Bij Almere City Tours</p>
            <ul className="space-y-2 mb-8">
              {[
                'Gegarandeerd plezier op het water',
                'Een belevenis om nooit te vergeten',
                'Van alle gemakken voorzien',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-[#E07B2A] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* Practical info */}
            <div className="space-y-5">
              {[
                {
                  title: 'Opstapplaats',
                  text: 'Opstapplaats op de lange steiger bij het Esplanadeplein.',
                },
                {
                  title: 'Parkeren',
                  text: 'Parkeren kan in het centrum, de dichtstbijzijnde parkeergarage is de Hospitaalgarage (map link). In het centrum van Almere is er betaald parkeren.',
                },
                {
                  title: 'Openbaar vervoer',
                  text: 'Kom met de trein en loop door de stad naar het water, vanuit het station loop je door de winkelstraat in 1 rechte lijn richting het Esplanade plein. Aan de linkerkant bevindt zich de steiger.\n\nKom je met de bus? Stap zo dicht mogelijk bij het stadscentrum uit en loop richting het Esplanade plein.',
                },
              ].map((block, i) => (
                <div key={i}>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">{block.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">{block.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: contact form */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Neem gerust contact met ons op via het formulier. Almere City Tours reageert doorgaans binnen één dag op
              je bericht.
            </p>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Voor- en achternaam{' '}
                  <span className="text-[#E07B2A] text-xs font-normal">(Vereist)</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#E07B2A] focus:ring-1 focus:ring-[#E07B2A] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefoon</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#E07B2A] focus:ring-1 focus:ring-[#E07B2A] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mailadres{' '}
                  <span className="text-[#E07B2A] text-xs font-normal">(Vereist)</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#E07B2A] focus:ring-1 focus:ring-[#E07B2A] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Onderwerp</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#E07B2A] focus:ring-1 focus:ring-[#E07B2A] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bericht{' '}
                  <span className="text-[#E07B2A] text-xs font-normal">(Vereist)</span>
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#E07B2A] focus:ring-1 focus:ring-[#E07B2A] transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                className="btn-orange rounded py-2.5 px-8 text-sm w-auto"
              >
                Versturen
              </button>

              <p className="text-xs text-gray-400 pt-2">
                Wij versturen je absoluut geen ongewenste mail.
              </p>
            </form>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
