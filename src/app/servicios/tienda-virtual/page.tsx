import React from 'react'
import Image from 'next/image'

const TiendaVirtual = () => {
  return (
    <section className='w-full'>
    
    
        <div className="container mx-auto flex px-5 pt-12 pb-6 md:flex-row flex-col items-center sm:mb-20 sm:mt-14">
                <div className=" order-2 md:order-1 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0 md:mb-0 items-center text-center">
                  <h2 className="title-font sm:text-xl text-lg mb-1 font-bold text-blue-900">Diseño y desarrollo de
                  </h2>
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Tienda virtual
                  </h1>
                  <p className="mb-8 leading-relaxed">Una tienda virtual es la puerta de entrada para llevar tu negocio al mundo digital, permitiéndote vender productos y servicios las 24 horas del día. Con un diseño profesional, una experiencia de usuario optimizada y métodos de pago seguros, puedes llegar a más clientes y aumentar tus ventas sin límites geográficos. El comercio electrónico no solo te hace más competitivo, sino que también reduce costos y maximiza tus ingresos. ¡Invierte hoy en tu tienda virtual y transforma tu negocio en un éxito digital!</p>
                </div>
                <div className=" order-1 md:order-2 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                  <Image className="object-cover object-center rounded" alt='servicio de diseño y desarrollo de tiendas virtuales' src="/tienda-virtual.png" width={720} height={400} />
                </div>
              </div>
    
    
        </section>
  )
}

export default TiendaVirtual
