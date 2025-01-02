
"use client";
import Link from 'next/link';
import { useState } from 'react';
//import { Sling as Hamburger } from "hamburger-react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import Image from 'next/image';





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = ()=>{
    setIsOpen(!isOpen);
  }
  const closeMenu = ()=>{
    setIsOpen(false);
  }
  
  return (
    <nav className="  bg-[#000000] text-[#F3F3F3] p-4 w-full sticky border-b-[1px] border-[#383838] z-50 top-0 mb-[0px] ">
      <div className="  flex justify-between items-center mx-auto max-w-[1440px] " >

        <Image src="logo.svg" alt="Logo" width={94} height={94} className='md:ml-8' />
        


        {/* Menu escritorio */}
        <div className=" hidden md:flex  " > {/* coloco "max" para manera la animación en vez de 'block' : 'hidden' */}
          <ul className='list-none flex md:gap-8 lg:gap-12 m-0 p-0 text-center text-lg' >
            <li ><Link href="/" className=' text-white  hover:text-slate-300 active:text-white focus:text-white focus:font-semibold'>  Home </Link></li>
            <li ><Link href="/nosotros" className=' text-white  hover:text-slate-300 active:text-white focus:text-white focus:font-semibold'>Nosotros</Link></li>

            {/* submenu SERVICIOS */}
            <li onClick={toggle} className='z-50' ><button  className='relative text-white  hover:text-slate-300 active:text-white focus:text-white focus:font-semibold flex items-center gap-2'>Servicios <IoIosArrowDown className='text-white' /> </button>
            {isOpen && (

              <ul className='list-none t-0 bg-white border rounded-lg border-gray-700 shadow-xl m-2 absolute text-left text-base z-50 transition-transform duration-300 ease-in-out' >
                <li onClick={closeMenu} className='m-auto'><Link href='/servicios/paginas-web' className='bg-black hover:bg-[#1e1e1e]  px-4 py-2 block rounded-t-md' >Páginas Web</Link></li>
                <li onClick={closeMenu} ><Link href='/servicios/tienda-virtual' className=' bg-black hover:bg-[#1e1e1e]  px-4 py-2 block'>Tienda virtual</Link></li>
                <li onClick={closeMenu} ><Link href='/servicios/seo' className='bg-black hover:bg-[#1e1e1e]  px-4 py-2 block rounded-b-md'>Seo</Link></li>
              </ul>
            )}
    
            </li>

            <li ><Link href="/contacto" className=' text-white  hover:text-slate-300 active:text-white focus:text-white focus:font-semibold'>Contacto</Link></li>
            <li ><Link href="/trabajos" className=' text-white  hover:text-slate-300 active:text-white focus:text-white focus:font-semibold'>Trabajos</Link></li>
          </ul>
        </div>
        

        
        <div className="flex md:mr-8 " >
          <a  href="tel:+51915176767" className="text-base hidden md:flex hover:underline font-semibold " > <Image src="phone.svg" alt="phone" width={20} height={20} className='hidden md:block mr-2' /> 915 173 767 </a>
        </div>

        {/* Botón hamburguesa */}
        <button className="md:hidden" onClick={toggle} > 
          {!isOpen ? <RiMenu3Fill className="text-3xl" />  : <IoMdClose className="text-3xl" /> }
        </button>

        {/* Menu desplegable (móvil) */}
        <div className={` md:hidden absolute bg-[#131313] left-0 px-2 top-16 w-full  overflow-hidden transition-all duration-700 ease-in-out " ${isOpen ? "max-h-[500px]" : "max-h-0" } `} > {/* coloco "max" para manera la animación en vez de 'block' : 'hidden' */}
          <ul className='list-none m-0 p-0 text-center text-2xl border-white border-4  shadow-lg ' >
            <li className=' group border-t-2 border-[#272727] hover:bg-[#0b0b0b] cursor-pointer py-4' onClick={closeMenu} ><Link href="/" className=' block group-hover:font-medium  group-active:text-white group-focus:text-white '>  Home </Link></li>
            <li className='group  border-t-2 border-[#272727] hover:bg-[#0b0b0b] cursor-pointer py-4' onClick={closeMenu} >  <Link href="/nosotros" className=' block '>Nosotros</Link></li>
            <li className='group border-t-2 border-[#272727] hover:bg-[#0b0b0b] cursor-pointer py-4 ' onClick={closeMenu}><Link href="/contacto" className=' block '>Contacto</Link></li>
            <li className='group border-t-2 border-[#272727] hover:bg-[#0b0b0b] cursor-pointer py-4 ' onClick={closeMenu}><Link href="/trabajos" className=' block '>Trabajos</Link></li>
          </ul>
        </div>

        

      </div>
    </nav>
  );
};

export default Navbar;



/* 
<nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl">
          <Link href="/">Logo</Link>
        </div>
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="space-x-4 text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="/servicios">Servicios</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav> */