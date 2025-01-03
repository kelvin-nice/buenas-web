import React from 'react'
import Image from 'next/image'

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
  return (

   /*  <footer className="bg-[#181818] mt-auto" >
        <div className="mx-auto  max-w-[1440px] py-16 px-8  " style={{background:"url('../pie.svg') no-repeat "} }  >
            <div className="  md:flex md:items-center md:justify-between  " >
                <div className='max-w-[300px] mr-auto pb-8 '>
                    <Image src="logo-pie.svg" alt='Logo-pie' width={150} height={100} />

                    <p className="mt-4 max-w-xs text-gray-100">
                    Expertos en páginas web.
                    </p>

                </div>
                
                <div className=' block md:flex  text-white font-extralight  ' >
                    <div className='py-4 md:px-8 lg:mr-16'>
                        <p className='font-bold mb-2 '  >Servicios</p>
                        <ul >
                            <li>Diseño Web</li>
                            <li>Programación web</li>
                            <li>Tiendas Online</li>
                            <li>Carritos de compra</li>
                        </ul>
                    </div>
                    <div className='py-4 md:px-8'>
                        <p className='font-bold  mb-2' >Otros </p>
                        <ul>
                            <li>Construcción de marca</li>
                            <li>Diseño UX/UI</li>
                            <li>Researching</li>
                        </ul>
                    </div>
                </div>
            </div>

            
        </div>
        
        <div className='mx-auto  max-w-[1440px]  pb-12 px-8 ' >
        <hr className="h-px  bg-gray-500 border-none "  />
            <p className="text-sm text-gray-200 font-extralight mt-6 ">
            &copy; Copyright 2024 Lima, Perú. Todos los derechos reservados.
            </p>
        </div>
    </footer> */


<footer className="bg-black text-cornsilk w-full pt-8">
    <div className=" max-w-[1200px] mx-auto mt-5 flex flex-wrap justify-between mb-4 space-y-6 ">
    {/* Card 1 */}
    <div className=" mb-8 p-4 w-72">
        <Image src="/logo-pie.svg" alt="Buenas web, profesionales en diseño web" width={150} height={60} className=" ml-0 pl-0 my-0 " />
        <p className="text-lg leading-6 text-gray-300 mb-5">
        Expertos profesionales en páginas web.
        </p>
        <div className="flex space-x-3">
        <a
            href="https://www.facebook.com/El-Preg%C3%B3n-Digital-107583488147961"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded bg-blue-600 text-white"
        >
            <FaFacebookF className='text-white text-xl' />
        </a>
        <a
            href="https://www.instagram.com/elpregondigita21/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white"
        >
            <FaInstagram className='text-white text-xl' />
        </a>
        <span className="p-2 rounded bg-red-600 text-white">
            
            <IoLogoYoutube className='text-white text-xl' />

        </span>
        </div>
    </div>

    {/* Card 2 */}
    <div className="p-4 w-72">
        <h3 className="text-xl font-medium text-white mb-4">Horario de atención:</h3>
        <p className="text-base leading-5 text-gray-300">
        De Lunes a Sábado de 8 a.m. a 8 p.m.
        </p>
    </div>

    {/* Card 3 */}
    <div className="p-4 w-72">
        <h3 className="text-xl font-medium text-white mb-4">Contáctenos</h3>
        <div className="mb-5">
        <p className="text-base leading-5 text-gray-300">Cel.:</p>
        <p className='text-white font-semibold' >51+ 915 173 767</p>
        </div>
        <div>
        <p className="text-base leading-5 text-gray-300">E-mail:</p>
        
        </div>
        <a
        href="mailto:cotiza@buenasweb.com?subject=Consulta%20sobre%20servicios&body=Hola%2C%20quisiera%20saber%20más%20detalles."
        className="text-red-300 hover:text-white transition"
        >
        cotiza@buenasweb.com
        </a>
    </div>

    {/* Card 4 */}
    <div className="p-4 w-72">
        <div className="flex items-center mb-3">
        <Image src="/flechita-01.png" alt="creatividad" width={182} height={78} className="w-3 mr-2" />
        <p className="text-base leading-5 text-gray-300">Creatividad</p>
        </div>
        <div className="flex items-center mb-3">
        <Image src="/flechita-01.png" alt="Puntualidad" width={182} height={78} className="w-3 mr-2 " />
        <p className="text-base leading-5 text-gray-300">Puntualidad</p>
        </div>
        <div className="flex items-center mb-3">
        <Image src="/flechita-01.png" alt="Eficiencia" width={182} height={78} className="w-3 mr-2" />
        <p className="text-base leading-5 text-gray-300">Eficiencia</p>
        </div>
        <div className="flex items-center mb-3">
        <Image src="/flechita-01.png" alt="Compromiso" width={182} height={78} className="w-3 mr-2" />
        <p className="text-base leading-5 text-gray-300">Compromiso</p>
        </div>
        <div className="flex items-center mb-3">
        <Image src="/flechita-01.png" alt="Experiencia" width={182} height={78} className="w-3 mr-2" />
        <p className="text-base leading-5 text-gray-300">Experiencia</p>
        </div>
    </div>
    </div>
    <div className="bg-black mx-auto border-t border-gray-700 py-6 text-center text-sm text-gray-300">
    <p>
        Copyright © 2023-2025 Buenas Web Todos los derechos reservados.
    </p>
    </div>
    </footer>



  )
}

export default Footer
