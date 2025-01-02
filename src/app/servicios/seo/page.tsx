import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

const seo = () => {
  return (
    <>

      <Head>
        <title>SEO - Buenas Web</title>
        <meta name="description" content="Página dedicada a la optimización SEO de nuestro proyecto." />
        <meta name="keywords" content="SEO, optimización, desarrollo web" />
        <meta name="author" content="Buenas Web" />
        
        {/* Open Graph Tags (para redes sociales) */}
        <meta property="og:title" content="SEO - Buenas Web" />
        <meta property="og:description" content="Optimización SEO para los motores de búsqueda." />
        <meta property="og:image" content="/images/og-seo-image.jpg" />
        <meta property="og:url" content="https://www.buenasweb.com/servicios/seo" />
    
      </Head>
    
        
    <section className='w-full'>  
            <div className="container mx-auto flex px-5 pt-12 pb-6 md:flex-row flex-col items-center sm:mb-20 sm:mt-14">
                    <div className=" order-2 md:order-1 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0 md:mb-0 items-center text-center">
                      <h2 className="title-font sm:text-xl text-lg mb-1 font-bold text-blue-900">Servicio en
                      </h2>
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">SEO (OPtimización y Posicionamiento web)
                      </h1>
                      <p className="mb-8 leading-relaxed">El SEO (Optimización para Motores de Búsqueda) es la clave para posicionar tu sitio web en los primeros resultados de Google y atraer clientes de manera orgánica. Con estrategias personalizadas, palabras clave relevantes y contenido optimizado, puedes aumentar tu visibilidad, tráfico y ventas. Un buen SEO convierte a los visitantes en clientes al conectar tu negocio con quienes buscan exactamente lo que ofreces. ¡Invierte en SEO y haz que tu marca domine los buscadores!</p>
                    </div>
                    <div className=" order-1 md:order-2 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                      <Image className="object-cover object-center rounded" alt='servicio de diseño y desarrollo de tiendas virtuales' src="/seo.png" width={720} height={400} />
                    </div>
                  </div>
        
        
        </section>

        </>
  )
}

export default seo
