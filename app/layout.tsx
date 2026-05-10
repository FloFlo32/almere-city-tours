import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Almere City Tours – Varen op het water van Almere',
  description: 'Ontdek Almere vanaf het water met Almere City Tours. Boek een privé rondvaart voor jouw groep of evenement.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
