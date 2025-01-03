import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Trabajos = () => {
  return (
    
    <section className="text-gray-700 body-font pt-12 mb-4 md:mb-10 ">

      <div className=' container mx-auto text-center ' >
        <h1 className='title-font  text-4xl mb-4 font-bold text-gray-900' >Nuestro portafolio</h1>
      </div>




      <div className="container mx-auto flex px-5 pt-12 pb-6 md:flex-row flex-col items-center">
        <div className="overflow-hidden lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"> <Link href='https://www.exportadoraelsol.com/newsite/' target='_blank' >
          <Image className="object-cover object-center rounded transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" alt='trabajo-1' src="/elsol-06.png" width={720} height={400}/> </Link>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Exportadora el Sol
          </h1>
          <p className="mb-8 text-black text-base">Empresa exportadora de materias primas como: la Tara, produtos botánicos y otros productos para snacks.</p>
          <div className="flex justify-center">
            <Link href='https://www.exportadoraelsol.com/newsite/' target='_blank' >
            <button className="inline-flex w-full px-10 py-3 mt-6 text-base font-medium tracking-wide text-white capitalize bg-gradient-to-r from-[#2042c9] to-[#E03122] rounded-md hover:bg-[#f74231] focus:outline-none focus:ring focus:ring-opacity-50">Ver sitio</button>
            </Link>
          </div>
        </div>
      </div>




      <div className="container mx-auto flex px-5 pt-12 pb-6 md:flex-row flex-col items-center">
        <div className=" order-2 md:order-1 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Urbanova S.A.C.
        
          </h1>
          <p className="mb-8 leading-relaxed">El sitio web de Urbanova ofrece servicios de desarrollo inmobiliario, incluyendo diseño, construcción y gestión de proyectos sostenibles y modernos en Perú. Además, se enfoca en brindar soluciones integrales para viviendas, oficinas y espacios comerciales.</p>
          <div className="flex justify-center">
            <Link href='https://www.urbanova.com/' target='_blank' >
          <button className="inline-flex w-full px-10 py-3 mt-6 text-base font-medium tracking-wide text-white capitalize bg-gradient-to-r from-[#2042c9] to-[#E03122] rounded-md hover:bg-[#f74231] focus:outline-none focus:ring focus:ring-opacity-50">Ver sitio</button>
          </Link>
          </div>
        </div>
        <div className=" overflow-hidden order-1 md:order-2 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Link href='https://www.urbanova.com/' target='_blank' >
          <Image className="object-cover object-center rounded transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" alt='trabajo-1' src="/urbanova-05.png" width={720} height={400} /> </Link>
        </div>
      </div>




      
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="overflow-hidden lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"> 
        <Link href='https://www.consulting-projectsgroup.com/' target='_blank'  >
          <Image className="object-cover object-center rounded transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" alt='trabajo-1' src="/consulting-07.png" width={720} height={400}/> </Link>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Consulting projects.
          </h1>
          <p className="mb-8 leading-relaxed">Empresa de Consultoría y Construcción, dedicada a brindar la mejor solución técnica a los diversos requerimientos de Ingeniería.</p>
          <div className="flex justify-center">
          <Link href='https://www.consulting-projectsgroup.com/' target='_blank' >
            <button className="inline-flex w-full px-10 py-3 mt-6 text-base font-medium tracking-wide text-white capitalize bg-gradient-to-r from-[#2042c9] to-[#E03122] rounded-md hover:bg-[#f74231] focus:outline-none focus:ring focus:ring-opacity-50">Ver sitio</button>
          </Link>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Trabajos;
