"use client"

/************************************************
 * IMPORTS AND COMPONENT DECLARATIONS
 ************************************************/


import { ArrowRight, Map, Search, Clock, UserCircle, Lightbulb, Target, Trophy } from 'lucide-react';
import Image from 'next/image';





/**
 * Main Portfolio Component
 * @description Landing page for research project
 */

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with softer gradient */}
      
        {/*======================
        * HERO SECTION
        *=====================*/}

<section className="relative h-screen bg-gradient-to-br from-pink-400 via-rose-300 to-pink-200">
 <div className="absolute top-8 right-8 flex gap-4">
  <a 
    href="https://www.linkedin.com/in/arturo-ram%C3%ADrez-7b8606273/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-900 hover:text-gray-700 transition"
  >
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg>
  </a>
  <a 
    href="https://x.com/Arturo_r05" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-900 hover:text-gray-700 transition"
  >
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
  </a>
 </div>
<div className="absolute inset-0 bg-white/10" />
    <div className="relative px-8 pt-32 md:pt-40 max-w-7xl mx-auto">
       <div className="space-y-8">
            <h1 className="text-8xl md:text-10xl font-bold text-gray-900 tracking-tight text-left">
              ¿QUIÉN CUIDA A LAS QUE CUIDAN?
            </h1>
            <p className="text-3xl md:text-3xl text-gray-800 max-w-3xl font-light text-left">
              Análisis espacial e identificación de áreas prioritarias para la 
              atención a la violencia de género en la Ciudad de México
            </p>
          <div className="flex gap-6 mt-100">
              <a href="#context" className="px-8 py-3 bg-white/80 backdrop-blur text-gray-900 rounded-lg font-medium hover:bg-white transition">
                Contexto
              </a>
              <a href="#methodology" className="px-8 py-3 bg-white/80 backdrop-blur text-gray-900 rounded-lg font-medium hover:bg-white transition">
                Metodología
              </a>
              <a href="#Results" className="px-8 py-3 bg-white/80 backdrop-blur text-white-900 rounded-lg font-medium hover:bg-white transition">
                Hallazgos Principales
              </a>
          </div>
      </div>
</div>
    
<div className="absolute bottom-8 right-8">
      <div className="bg-white-100 bg-opacity-70 p-4 rounded-lg shadow">
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 justify-end">
            <span className="text-gray-900 font-bold text-xl">2DO LUGAR</span>
            <Trophy className="w-6 h-6 text-gray-900" />
          </div>
          <div className="text-gray-900 text-right text-lg">
            Datatón Economía de Cuidados 2023
          </div>
          <div className="text-gray-700 text-right">
            Organizado por INFO CDMX
          </div>
        </div>
      </div>
    </div>
</section>

{/* Context & Problem Statement */}
<section id="context" className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="space-y-6">
      {/* Header Badge */}

      <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-rose-50 text-rose-700 rounded-lg text-sm font-medium mb-4">
              Contexto
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Hallazgos principales</h2>
            <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
              El análisis revela patrones significativos en la distribución espacial 
              de la demanda y oferta de servicios de atención.
            </p>
          </div>



      {/* First Title */}
      <h2 className="text-2xl font-bold text-gray-900 my-12">
        ¿Qué son los centros LUNA?
      </h2>

      <div className="prose prose-lg text-gray-700 max-w-full">
        {/* Info Box */}
        <div className="bg-gray-100 rounded-xl p-8 flex gap-6 items-start">
          <div className="bg-rose-100 p-4 rounded-full">
            <UserCircle className="w-8 h-8 text-rose-600" />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Los Centros LUNA
            </h3>
            <p className="text-gray-700">
              son unidades territoriales de atención y prevención de la violencia de género, 
              pertenecientes a la Secretaría de las Mujeres de la Ciudad de México. Ofrecen asesoría 
              y acompañamiento psicológico y jurídico a mujeres que viven violencia, con el objetivo 
              de ayudarlas a salir del ciclo violento. Además, brindan información sobre derechos sexuales 
              y reproductivos, así como sobre la Interrupción Legal del Embarazo (ILE).
            </p>
          </div>
        </div>

        {/* Second Title */}
        <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8">
          ¿Cuál es la cobertura de los centros LUNA?
        </h2>

        {/* Description Paragraphs */}
        <p className="my-6">
          La violencia de género representa un desafío crítico en la Ciudad de México. 
          La distribución espacial actual de los centros LUNA no corresponde necesariamente 
          con las zonas de mayor incidencia, generando barreras significativas en el 
          acceso a servicios esenciales de atención.
        </p>

        <p className="my-6">
          Este estudio aborda la necesidad de optimizar la ubicación de los centros 
          de atención, considerando factores socioespaciales y patrones de movilidad urbana.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 max-w-4xl">
        <div className="p-6 bg-rose-50 rounded-xl">
          <p className="text-4xl font-bold text-rose-600 mb-2">60%</p>
          <p className="text-gray-700">De las colonias con mayor nivel de marginalidad en la Ciudad 
            no tienen cobertura menor a 30 minutos en transporte público a un centro LUNA
          </p>
        </div>

        <div className="p-6 bg-rose-50 rounded-xl">
          <p className="text-4xl font-bold text-rose-600 mb-2">50%</p>
          <p className="text-gray-700">de las colonias de la Ciudad deben viajar más de una hora diaria en transporte público para ir al centro LUNA más cercano</p>
        </div>
      </div>
    </div>
    
    {/* Bottom Image */}
    <div className="mt-4">
    <Image 
  src="/graph_1.png"
  alt="Mapa de calor de incidencia"
  width={1024}  // specify appropriate width
  height={768}  // specify appropriate height
  className="rounded-lg w-full max-w-5xl mx-auto"
/>

        {/* Key Takeaway Box */}
        <div className="mt-16 bg-gray-100 rounded-xl p-8">
        <div className="flex gap-6 items-start">
          <div className="bg-rose-100 p-4 rounded-full">
          <Lightbulb className="w-8 h-8 text-rose-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Punto Clave
            </h3>
            <p className="text-gray-700">
              La ubicación actual de los centros LUNA presenta desafíos significativos de accesibilidad, 
              particularmente para las colonias con mayor marginación. Esta situación requiere una 
              redistribución estratégica que priorice las zonas de mayor vulnerabilidad y mejore los 
              tiempos de traslado para las usuarias.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 
      {/* Methodology */}
      <section id="methodology" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">


        <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-rose-50 text-rose-700 rounded-lg text-sm font-medium mb-4">
              Metodología
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Estructura de la investigación</h2>
            <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
              El análisis utilizó datos geográficos para estimar la cobertura de los centros LUNA, así como
              indicadores sociodemográficos para identificar áreas prioritarias de intervención.
            </p>
          </div>


    
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8">
              <div className="bg-rose-50 rounded-lg p-4 inline-block mb-6">
                <Search className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Recopilación de datos</h3>
              <ul className="space-y-4 text-gray-700">

                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-rose-600 mt-1 mr-2 flex-shrink-0" />
                  Localización de centros LUNA existentes
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-rose-600 mt-1 mr-2 flex-shrink-0" />
                  Índice de marginalidad y violencia urbana por colonia
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="bg-rose-50 rounded-lg p-4 inline-block mb-6">
                <Clock className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Análisis espacial</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-rose-600 mt-1 mr-2 flex-shrink-0" />
                  Construcción de isócronas de accesibilidad
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-rose-600 mt-1 mr-2 flex-shrink-0" />
                  Identificación de cobertura por colonia según los tiempos de traslado
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-rose-600 mt-1 mr-2 flex-shrink-0" />
                  Cruce con colonias prioritarias según indicadores sociodemográficos
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="bg-rose-50 rounded-lg p-4 inline-block mb-6">
                <Target className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Áreas prioritarias</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-rose-600 mt-1 mr-2 flex-shrink-0" />
                  Identificación de colonias prioritarias según nivel de marginalidad y accesibilidad a centros LUNA
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-rose-600 mt-1 mr-2 flex-shrink-0" />
                  Visualización interactiva para identificar áreas prioritarias
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      

{/* Results */}
<section id="Results" className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <div className="inline-block px-4 py-1 bg-rose-50 text-rose-700 rounded-lg text-sm font-medium mb-4">
        Resultados
      </div>
      <h2 className="text-4xl font-bold text-gray-900">Hallazgos principales</h2>
      <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
        El análisis revela patrones significativos en la distribución espacial 
        de la demanda y oferta de servicios de atención.
      </p>
    </div>

    {/* Three boxes in one row */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="p-6 bg-rose-50 rounded-xl">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Patrones espaciales identificados</h3>
        <p className="text-gray-700">
          El análisis reveló cinco zonas prioritarias caracterizadas por una alta 
          incidencia de violencia de género y accesibilidad limitada a servicios 
          de atención, presentando oportunidades estratégicas para la ubicación 
          de nuevos centros LUNA.
        </p>
      </div>
      
      <div className="p-6 bg-rose-50 rounded-xl">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Implicaciones para política pública</h3>
        <p className="text-gray-700">
          La implementación estratégica de centros en las ubicaciones propuestas 
          podría reducir significativamente las barreras de acceso y mejorar la 
          eficacia de la intervención institucional en casos de violencia de género.
        </p>
      </div>
      
      <div className="p-6 bg-rose-50 rounded-xl">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Recomendaciones</h3>
        <p className="text-gray-700">
          Se sugiere priorizar la apertura de nuevos centros en las zonas 
          identificadas, así como fortalecer la red de transporte público para 
          mejorar la accesibilidad integral a los servicios de atención.
        </p>
      </div>
    </div>

    
    {/* Instructions Section */}
    <div className="mb-12">
            <div className="bg-rose-50 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Map className="h-6 w-6 text-rose-700"/>
                <h3 className="text-xl font-semibold text-gray-900">Instrucciones para el uso del mapa</h3>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-rose-700 font-semibold">1.</span>
                  <p className="text-gray-700">El mapa contiene las colonias que no tienen cobertura de centros LUNA y que además reportaron un nivel alto de marginalidad (4 o 5)</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-rose-700 font-semibold">2.</span>
                  <p className="text-gray-700">La cobertura varía según el tiempo de traslado de 15 a 30 a 45 minutos, se puede ver el cambio mostrando y ocultando cada capa del mapa haciendo click en el ícono del ojo en cada capa.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-rose-700 font-semibold">3.</span>
                  <p className="text-gray-700">Para referencia, al pasar el cursor por encima de cada colonia se puede ver su nivel de marginalidad, el nombre de la colonia y el total de carpetas de investigación por violencia doméstica el año pasado.</p>
                </div>
              </div>
            </div>
          </div>


 
 
 {/* Map container */}
 <div className="mb-12">
    <div className="bg-rose-50 p-1 rounded-xl max-w-1xl mx-auto"> {/* Added max-width and margin auto */}
        <h3 className="text-xl font-semibold mb-2 text-gray-900 p-4 text-center"> {/* Added text-center */}
            Mapa Interactivo de Cobertura
        </h3>
        <div className="w-full h-[500px] rounded-lg overflow-hidden"> {/* Reduced height to 600px */}
            <iframe 
                src="/maps/kepler_isochrones_map.html" 
                className="w-full h-full border-0"
                title="Mapa de cobertura de centros LUNA"
                style={{ minHeight: '500px' }}
            />
        </div>
    </div>
</div>
  </div>
</section>
    </div>
  );
};

export default Portfolio;