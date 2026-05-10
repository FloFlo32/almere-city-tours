import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2017 50%, #1a1a1a 100%)',
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E07B2A' fill-opacity='0.3'%3E%3Ccircle cx='5' cy='5' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Neem vrijblijvend contact met ons op
          </h2>
          <p className="text-gray-400">Je kunt al je vragen gerust stellen aan ons, wij horen graag van je.</p>
        </div>
        <div className="shrink-0">
          <Link href="/contact" className="btn-orange-outline text-sm py-3 px-8 rounded font-semibold whitespace-nowrap">
            Contact opnemen
          </Link>
        </div>
      </div>
    </section>
  )
}
