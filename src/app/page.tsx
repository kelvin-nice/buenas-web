"use client";
import Image from "next/image";
import Link from "next/link";
/* import Link from "next/link"; */


export default function Home() {
  return (
    <main >

      <section className="w-full bg-[#000] ">
        <div className="relative mx-auto max-w-[1440px] h-[530px] md:h-[490px]  md:bg-no-repeat md:bg-cover md:bg-bottom md:bg-[url('/banner-01.jpg')] " >
          <Image src="/banner-04.jpg" alt="ideal para empresarios" width={1000} height={800} className=" w-screen h-auto absolute bg-center mt-auto bottom-0 mb-0 md:hidden"/>
          <div className="absolute max-w-[650px] top-4 md:top-10 p-6 md:ml-8 text-white text-left">
            <h2 className="text-white font-bold mb-2 flex items-center" > <span className="font-black text-red-600 text-4xl items-center flex mr-2 " >I</span> Agencia Creativa Digital</h2>
            <h1 className="text-3xl md:text-6xl font-bold mb-4">Una Buena Web aumenta tus ventas</h1>
            <p className="text-base md:text-xl font-light mb-6">
              Somos especialistas en Páginas Web profesionales, modernas y optimizadas.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-6 py-3 bg-white text-black font-extrabold rounded-lg hover:bg-gray-300 transition"
            >
              !Cotiza yá!
            </Link>
          </div>
        </div>
      </section>


      {/* SERVICIOS */}
      <section className="w-full mt-10 sm:mt-28">

        {/* Titulo */}
        <div className="text-center mb-8 md:mb-14">
            <h1 className="sm:text-4xl text-2xl font-bold title-font text-gray-900 mb-4">Nuestros servicios:</h1>
            
            {/* rayita de adorno */}
            <div className="flex mt-4 justify-center">
              <div className="w-6 h-2 rounded-sm bg-[#595AF8] inline-flex mr-2"></div>
              <div className="w-14 h-2 rounded-sm bg-[#E03122] inline-flex"></div>
            </div>

           {/*  <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-6 text-gray-900s">desde un sitio web sencillo a uno complejo, lo hacemos.</p> */}
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center mx-auto max-w-[1200px] gap-14">
          {/* Card 1 */}
          <div className=" text-center max-w-[340px]">
            <Image
              src="/servicios-03.png"
              alt="Servicio páginas web"
              width={350}
              height={250}
              className="mx-auto mb-4 "
            />
            <p className="text-black text-base mb-6">
              Tu presencia en internet es necesaria y dejarlo en manos de profesionales también.
            </p>
            <Link
              href="/servicios/paginas-web"
              className=" inline-block py-3 px-6 bg-white border-2 border-black text-black font-bold rounded-lg hover:bg-black hover:text-white transition"
            >
              Ver más
            </Link>
          </div>



          {/* Card TIENDA ONLINE */}
          <div className=" text-center max-w-[340px]">
            <Image
              src="/tienda-online-05.png"
              alt="Servicio páginas web"
              width={350}
              height={250}
              className="mx-auto mb-4 "
            />
            <p className="text-black text-base mb-6">
            El comercio electrónico requiere seguridad en los pagos e interfaces llamativas.
            </p>
            <Link
              href="/servicios/tienda-virtual"
              className=" inline-block py-3 px-6 bg-white border-2 border-black text-black font-bold rounded-lg hover:bg-black hover:text-white transition"
            >
              Ver más
            </Link>
          </div>



          {/* Card SEO */}
          <div className=" text-center max-w-[340px]">
            <Image
              src="/servicios-05.png"
              alt="Servicio páginas web"
              width={350}
              height={250}
              className="mx-auto mb-4 "
            />
            <p className="text-black text-base mb-6">
            Una página web que no aparece en Google, no existe. Este servicio está hecho para ti.
            </p>
            <Link
              href="/servicios/seo"
              className=" inline-block py-3 px-6 bg-white border-2 border-black text-black font-bold rounded-lg hover:bg-black hover:text-white transition"
            >
              Ver más
            </Link>
          </div>

          
        </div>
      </section>





      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">

          {/* Titulo */}
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-2xl font-bold title-font text-black  mb-4">Nuestro proceso de trabajo</h1>
            
            {/* rayita de adorno */}
            <div className="flex mt-4 justify-center">
              <div className="w-6 h-2 rounded-sm bg-[#595AF8] inline-flex mr-2"></div>
              <div className="w-14 h-2 rounded-sm bg-[#E03122] inline-flex"></div>
            </div>

            <p className="text-base  mx-auto mt-6 text-black">Un sitio web a medida y las mejóres prácticas de programación y marketing</p>
          </div>

          {/* Tres columnas de proceso */}
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">


            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-xl bg-gray-200  mb-5 flex-shrink-0"  >
                <Image src="investigacion.svg" alt="investigación" width={50} height={50} />
              </div>
              <div className="flex-grow">
                <h2 className="text-black  text-lg title-font font-bold mb-3">Análisis UX/estrategia</h2>
                <p className="text-black text-base">Estudio y análisis de la información que tendrá tu sitio web según las necesidades de tu empresa o negocio. Aplicación de métodos de investigación UX.</p>
                {/* <a className="mt-3 text-indigo-500 inline-flex items-center">¿Qué es esto?
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>

            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-xl bg-gray-200 text-indigo-500 mb-5 flex-shrink-0">
              <Image src="idea.svg" alt="idea" width={50} height={50} />
              </div>

              <div className="flex-grow">
                <h2 className="text-black  text-lg title-font font-bold mb-3">Diseño Web</h2>
                <p className="text-black text-base">Creación del diseño de las pantallas que tendrá tu sitio web. Tendrás un prototipo de como se verá y comportará tu web antes de pasarlo a código.</p>
                
              </div>
            </div>

            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-xl bg-gray-200 text-indigo-500 mb-5 flex-shrink-0">
              <Image src="codigo.svg" alt="codigo" width={50} height={50} />
              </div>
              <div className="flex-grow">
                <h2 className="text-black  text-lg title-font font-bold mb-3">Programación</h2>
                <p className="text-base font-normal text-black ">En esta última fase el programador desarrollará a código el diseño de tu web y toda la lógica del negocio con las mejores prácticas de semántica web y código.</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      



    </main>


  )
}
