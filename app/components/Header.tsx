'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/ontdek-almere', label: 'Ontdek Almere' },
  { href: '/tarieven', label: 'Tarieven' },
  { href: '/contact', label: 'Contact' },
]

const languages = [
  { code: 'nl', label: 'Nederlands', flag: '/flags/nl.png' },
  { code: 'en', label: 'English',    flag: '/flags/en.png' },
  { code: 'de', label: 'Deutsch',    flag: '/flags/de.png' },
]

export default function Header() {
  const pathname = usePathname()
  const [activeLang, setActiveLang] = useState('nl')
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const current = languages.find(l => l.code === activeLang)!

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Almere City Tours"
            width={160}
            height={50}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link text-sm font-medium ${pathname === href ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-orange text-sm py-2 px-5 rounded hidden sm:inline-block">
            Boeken
          </Link>

          {/* Language dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(o => !o)}
              className="flex items-center gap-1.5 px-2 py-1.5 rounded hover:bg-gray-100 transition-colors"
              aria-expanded={open}
            >
              <Image src={current.flag} alt={current.label} width={20} height={14} />
              <svg
                className={`w-3 h-3 text-gray-500 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => { setActiveLang(lang.code); setOpen(false) }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      activeLang === lang.code ? 'bg-orange-50 text-[#E07B2A] font-medium' : 'text-gray-700'
                    }`}
                  >
                    <Image src={lang.flag} alt={lang.label} width={20} height={14} />
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="md:hidden border-t border-gray-100 bg-white">
        <div className="flex overflow-x-auto px-4 py-2 gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link text-sm whitespace-nowrap ${pathname === href ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
