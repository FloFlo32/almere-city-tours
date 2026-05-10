import Link from 'next/link'
import Image from 'next/image'
import CtaBanner from '../components/CtaBanner'

const pricing = [
  {
    duration: '2 uur',
    base: '500',
    featured: false,
    rows: [
      { label: 'Tot 30 pers.', price: '€19,50 p.p.' },
      { label: 'Tot 40 pers.', price: '€18,50 p.p.' },
      { label: 'Tot 50 pers.', price: '€17,50 p.p.' },
      { label: 'Vanaf 51 pers.', price: '€16,50 p.p.' },
    ],
  },
  {
    duration: '2,5 uur',
    base: '550',
    featured: false,
    rows: [
      { label: 'Tot 30 pers.', price: '€23 p.p.' },
      { label: 'Tot 40 pers.', price: '€22 p.p.' },
      { label: 'Tot 50 pers.', price: '€21 p.p.' },
      { label: 'Vanaf 51 pers.', price: '€20 p.p.' },
    ],
  },
  {
    duration: '3 uur',
    base: '600',
    featured: true,
    rows: [
      { label: 'Tot 30 pers.', price: '€27 p.p.' },
      { label: 'Tot 40 pers.', price: '€26 p.p.' },
      { label: 'Tot 50 pers.', price: '€25 p.p.' },
      { label: 'Vanaf 51 pers.', price: '€24 p.p.' },
    ],
  },
  {
    duration: '3,5 uur',
    base: '650',
    featured: false,
    rows: [
      { label: 'Tot 30 pers.', price: '€30 p.p.' },
      { label: 'Tot 40 pers.', price: '€29 p.p.' },
      { label: 'Tot 50 pers.', price: '€28 p.p.' },
      { label: 'Vanaf 51 pers.', price: '€27 p.p.' },
    ],
  },
  {
    duration: '4 uur',
    base: '700',
    featured: false,
    rows: [
      { label: 'Tot 30 pers.', price: '€34 p.p.' },
      { label: 'Tot 40 pers.', price: '€33 p.p.' },
      { label: 'Tot 50 pers.', price: '€32 p.p.' },
      { label: 'Vanaf 51 pers.', price: '€31 p.p.' },
    ],
  },
]

export default function TarievenPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-14 pb-10 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#E07B2A] mb-4">Varen met Almere City Tours</h1>
        <p className="text-gray-500 text-sm max-w-xl mx-auto mb-8">
          Momenteel varen wij alleen voor groepen en evenementen. Je kunt een boeking voor een groep maken door ons
          contact formulier in te vullen.
        </p>
        <Link href="/contact" className="btn-orange rounded-full py-3 px-8 text-sm">
          Offerte aanvragen
        </Link>
      </section>

      {/* Pricing table */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Tarieven</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {pricing.map((plan) => (
              <div
                key={plan.duration}
                className={`rounded-lg border-2 overflow-hidden ${
                  plan.featured
                    ? 'border-[#E07B2A] shadow-lg scale-105 z-10'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {/* Header */}
                <div
                  className={`p-4 text-center border-b ${
                    plan.featured ? 'bg-[#E07B2A] text-white border-[#E07B2A]' : 'bg-white text-gray-800 border-gray-100'
                  }`}
                >
                  <div className="text-lg font-bold">{plan.duration}</div>
                </div>

                {/* Price */}
                <div className={`px-4 py-5 text-center border-b ${plan.featured ? 'bg-orange-50 border-orange-100' : 'border-gray-100'}`}>
                  <div className="flex items-start justify-center">
                    <span className="text-sm font-semibold text-gray-500 mt-1">€</span>
                    <span className="text-4xl font-black text-gray-900">{plan.base}</span>
                    <div className="flex flex-col ml-1">
                      <span className="text-xs font-bold text-gray-900 leading-none">00</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">tot 25 personen</p>
                </div>

                {/* Rows */}
                <div className="bg-white p-3 space-y-2">
                  {plan.rows.map((row, i) => (
                    <div key={i} className="flex justify-between text-xs text-gray-600 py-1 border-b border-gray-50 last:border-0">
                      <span>{row.label}</span>
                      <span className="font-medium">{row.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info section */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: image + checklist */}
          <div>
            {/* Boat image */}
            <div className="w-full h-64 rounded-xl mb-6 relative overflow-hidden">
              <Image
                src="/images/rondvaartboot.jpg"
                alt="Almere City Tours boot"
                fill
                className="object-cover object-center"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-1">Welkom aan boord</h3>
            <p className="text-gray-500 text-sm mb-4">Bij Almere City Tours</p>
            <ul className="space-y-2">
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
          </div>

          {/* Right: practical info */}
          <div className="space-y-6">
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
                <h4 className="font-bold text-gray-800 mb-1">{block.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
