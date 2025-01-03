import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Footer';
import './globals.css'
import Header from './components/Header';
/* import Head from 'next/head'; */
/* import Navbar from './components/Navbar'; */

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {

  title: 'Agencia digital, Agencia Web',
  description: 'Especialistas en diseño y desarrollo de páginas web modernas.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['agencia digital', 'páginas web', 'diseño web', 'SEO', 'marketing digital', 'diseño UX', 'diseño UI', 'UX UI', 'desarrollo web', 'programación', 'analítica web'],
  metadataBase: new URL("https://www.buenasweb.com"),
  openGraph: {
    title: 'Optimización SEO - Buenas Web',
    description: 'Profesionales y expertos en páginas web, tiendas virtuales y SEO web.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Buenas Web | Agencia Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buenas Web | Agencia Digital',
    description: 'Especialistas en diseño y desarrollo de páginas web modernas.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={` relative flex flex-col min-h-screen ${inter.className}`}>
        <Header/>
        <main  > {children} </main>
        <Footer/>
      </body>
    </html>
  )
}
