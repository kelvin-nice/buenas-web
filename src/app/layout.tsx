import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Footer';
import './globals.css'
import Header from './components/Header';
import Head from 'next/head';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agencia digital, Agencia Web',
  description: 'Profesionales y expertos en páginas web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={` relative flex flex-col min-h-screen ${inter.className}`}>
        <Head>
          {/* Metaetiquetas comunes para todas las páginas */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" /> {/* Permite a los motores de búsqueda indexar las páginas */}
          <meta name="author" content="Buenas web" />
          <meta property="og:image" content="/images/og-image.jpg" /> {/* Imagen para compartir en redes */}
          <meta property="og:title" content="Buenas web" />
          <meta property="og:description" content="Agencia Digital, especialistas en páginas web modernas." />
          <link rel="icon" href="/favicon.ico" /> {/* Ícono del sitio */}
          {/* <link rel="stylesheet" href="/styles/globals.css" /> */} {/* Estilos globales, si aplica */}
          
          <title>Buenas Web | Agencia Digital</title> {/* Título predeterminado */}
        </Head>
        <Navbar/>
        <main  > {children} </main>
        <Footer/>
      </body>
    </html>
  )
}
