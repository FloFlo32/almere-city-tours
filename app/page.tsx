import Link from 'next/link'
import Image from 'next/image'
import CtaBanner from './components/CtaBanner'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
        <path d="M3 17h18v2H3z" />
        <path d="M2 14h20v1H2z" />
      </svg>
    ),
    title: 'Geniet op de wateren van Almere',
    text: 'Verken de prachtige stad Almere samen met ons. Via het water is bijna de gehele stad bereikbaar.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    title: 'Ontdek de stad vanaf haar mooiste kant',
    text: 'Heb je het over Almere, dan heb je het over water. Samen met ons verken je de stad vanaf het water.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    title: 'Met het gezin, de familie of gezelschap naar wens',
    text: 'De Almere City Tours boten bieden genoeg ruimte en mogelijkheden voor je gehele gezelschap.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero.jpg"
          alt="Almere City Tours boot op het water"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
          <p className="text-white/80 text-lg mb-3">Stap aan boord en ontdek</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-xl leading-tight">
            Almere van haar mooiste kant
          </h1>
          <Link href="/contact" className="btn-orange text-base py-3 px-8 rounded-full inline-flex items-center gap-2">
            Neem contact op
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Welkom */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#E07B2A] mb-6">Welkom aan boord!</h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            We laten je graag de mooiste kant van Almere zien. Een stad van moderne architectuur, ongekende natuur en
            veel onontdekte pareltjes. We nemen je mee in een wereld onder de zeespiegel, waar de geschiedenis nog
            geschreven moet worden en geen familie al generaties woont. Almere, de jonge stad van Nederland.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-left">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E07B2A] flex items-center justify-center shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#E07B2A] mb-2 leading-snug">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Groepsaanvragen */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#E07B2A] mb-4">
            Groepsaanvragen en evenementen
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Ontdek 'New Amsterdam' Almere: de snelst groeiende stad van Nederland. Deze jongste stad van het land
            bestaat nog geen 50 jaar en bevindt zich 5 meter onder zeeniveau. Benieuwd naar Almere vanaf het water?
            Boek dan een privé rondvaart voor jouw groep of evenement. Neem gerust contact met ons op om de
            mogelijkheden te bespreken.
          </p>
          <Link href="/contact" className="btn-orange rounded-full py-3 px-8 text-sm">
            Vrijblijvend contact opnemen
          </Link>
        </div>
      </section>

      {/* Info bar */}
      <div className="py-6 px-4 bg-white border-y border-gray-100">
        <p className="max-w-3xl mx-auto text-center text-sm text-gray-500 italic">
          Momenteel varen wij alleen voor groepen en evenementen. Je kunt een boeking voor een groep maken door ons
          contact formulier in te vullen.
        </p>
      </div>

      {/* CTA Banner */}
      <CtaBanner />
    </>
  )
}
