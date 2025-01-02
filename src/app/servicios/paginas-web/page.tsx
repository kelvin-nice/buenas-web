import React from 'react'
import Image from 'next/image'

const PaginasWeb = () => {
  return (
    <section className='w-full'>


    <div className="container mx-auto flex px-5 pt-12 pb-6 md:flex-row flex-col items-center sm:mb-20 sm:mt-14">
            <div className=" order-2 md:order-1 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0 md:mb-0 items-center text-center">
              <h2 className="title-font sm:text-xl text-lg mb-1 font-bold text-blue-900">Servicio de
              </h2>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Páginas web
              </h1>
              <p className="mb-8 leading-relaxed">Una página web es la herramienta digital más poderosa para destacar tu negocio en el mundo online. Es tu carta de presentación las 24 horas, diseñada para atraer clientes, generar confianza y aumentar tus ventas. Con un diseño atractivo, funcionalidad optimizada y adaptada a dispositivos móviles, tu página web se convierte en el canal ideal para captar nuevos mercados y fidelizar clientes actuales. Invertir en una página web profesional significa asegurar tu presencia en el mundo digital, donde millones de personas buscan productos y servicios como los tuyos. ¡Haz crecer tu negocio hoy mismo con una página web que impacte y venda!</p>
            </div>
            <div className=" order-1 md:order-2 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image className="object-cover object-center rounded" alt='servicio de diseño y desarrollo de páginas web' src="/pagina-web.png" width={720} height={400} />
            </div>
          </div>


    </section>
  )
}

export default PaginasWeb
