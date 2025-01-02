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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"> 
          <Image className="object-cover object-center rounded" alt='trabajo-1' src="work-1.svg" width={720} height={400}/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Exportadora el Sol
          </h1>
          <p className="mb-8 text-black text-base">Empresa exportadora de materias primas como: la Tara, produtos botánicos y otros productos para snacks.</p>
          <div className="flex justify-center">
            <Link href='https://www.exportadoraelsol.com/newsite/' target='_blank' >
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded-3xl text-lg">Ver sitio</button>
            </Link>
          </div>
        </div>
      </div>




      <div className="container mx-auto flex px-5 pt-12 pb-6 md:flex-row flex-col items-center">
        <div className=" order-2 md:order-1 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
          <br className="hidden lg:inline-block" />readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded-3xl text-lg">Ver sitio</button>
          </div>
        </div>
        <div className=" order-1 md:order-2 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image className="object-cover object-center rounded" alt='trabajo-1' src="work-1.svg" width={720} height={400} />
        </div>
      </div>




      
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"> 
          <Image className="object-cover object-center rounded" alt='trabajo-1' src="work-1.svg" width={720} height={400}/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
            <br className="hidden lg:inline-block" />readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded-3xl text-lg">Ver sitio</button>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Trabajos;
