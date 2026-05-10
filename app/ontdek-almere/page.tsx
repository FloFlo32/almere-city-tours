import Link from 'next/link'
import Image from 'next/image'
import CtaBanner from '../components/CtaBanner'

export default function OntdekAlmerePage() {
  return (
    <>
      {/* Main content */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#E07B2A] mb-6 leading-tight">
              Vorm een nieuwe kijk op onze ontzettend veelzijdige stad, Almere.
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We vertellen niet alleen, we laten zien en laten ervaren. Wanneer je aan boord stapt, begint het
              avontuur. We laten het water voor ons werken en we kunnen genieten van de bijzondere gebouwen, omringd
              door groen. De groen-blauwe structuur geeft een fijne afwisseling van aan de hoge gebouwen in het
              stadscentrum. 'Het New York van de Polder', noemt burgemeester Weerwind de stad liefkozend.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Een stad ontstaan uit, omringd door en gevuld met water is de ideale plek om op te stappen op een van de
              boten van Almere City Tours, om te ontdekken vanaf het water!
            </p>

            <Link href="/contact" className="btn-orange rounded py-3 px-8 text-sm inline-block mb-10">
              Nu Boeken
            </Link>
          </div>

          {/* Right: city image with blob shape */}
          <div className="flex justify-center">
            <div
              className="w-full max-w-md h-80 relative overflow-hidden"
              style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
            >
              <Image
                src="/images/almere.jpg"
                alt="Almere stad gezien vanaf het water"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Additional text section */}
        <div className="max-w-5xl mx-auto mt-10 space-y-5">
          <p className="text-gray-600 text-sm leading-relaxed">
            Almere is een moderne stad die gekenmerkt wordt door haar moderne architectuur en strakke skyline. In 2022
            is het 50 jaar geleden dat Almere op de tekentafel ontstaan is, in 1975 is gestart met de bouw van de
            eerste woningen. Almere is een groeistad en behoort tot één van de grootste steden van Nederland.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Almere heeft een diepe verbinding met het water, aangezien het eeuwenlang Zuiderzee is geweest en nog
            steeds zo'n 5 meter onder zeeniveau ligt. De stad Almere is vernoemd naar het water genaamd{' '}
            <strong>Almere</strong>. Dit was in de middeleeuwen een meer of binnenzee, ongeveer waar nu het{' '}
            <strong>IJsselmeer</strong> ligt. Sinds 1971 draagt onze stad deze naam. Door alle stadsdelen loopt water
            en de stad heeft een kustlijn van maar liefst 42 kilometer.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Een stad ontdekken vanaf het water is een totaal andere beleving dan vanaf het land. Tijdens een boottocht
            van Almere City Tours ervaar je een moderne stad die ontstaan is uit het water en omringd is door groen.
            Waarom het 'Weerwater' zo heet, welke architecten bijgedragen hebben aan de kenmerkende skyline en wat het
            duurste gebouw aan de skyline is leer je tijdens onze boottours.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Ook enthousiast geworden om aan boord te stappen van onze tour?
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
