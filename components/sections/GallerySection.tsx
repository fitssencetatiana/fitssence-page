import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function GallerySection() {
  const contentImages = [
    "/fitssence-page/images/hero/1.jpg",
    "/fitssence-page/images/hero/2.jpg",
    "/fitssence-page/images/hero/3.jpg",
    "/fitssence-page/images/hero/1Full.jpg",
    "/fitssence-page/images/hero/2Full.jpg",
    "/fitssence-page/images/hero/3Full.jpg",
    "/fitssence-page/images/sobreMi/aboutTatiana.jpg",
  ]

  const contentLinks = [
    "https://instagram.com/", // ejemplo
    "https://tiktok.com/",
    "https://instagram.com/",
    "https://tiktok.com/",
    "https://instagram.com/",
    "https://tiktok.com/",
    "https://instagram.com/",
    "https://tiktok.com/",
  ]

  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3500)
    return () => clearInterval(interval)
  }, [contentImages.length, current])

  const goTo = (idx: number) => setCurrent(idx)

  // Nueva función para manejar el siguiente con transición instantánea si es necesarioimage.png
  const handleNext = () => {
    if (current === contentImages.length - 1) {
      setIsTransitioning(true)
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrent(0)
      }, 700)
    } else {
      setCurrent((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (current === 0) {
      setIsTransitioning(true)
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrent(contentImages.length - 1)
      }, 700)
    } else {
      setCurrent((prev) => prev - 1)
    }
  }

  return (
    <section id="galeria" className="py-20 bg-gradient-to-r from-cyan-900 to-purple-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Mi contenido para ti</h2>
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto">
            Explora mis mejores vídeos y fotos de Instagram y TikTok. Haz clic para ver el contenido completo en la red
            social.
          </p>
        </div>
      </div>
      {/* Carrusel 3D fuera del container para ocupar todo el ancho */}
      <div className="w-full flex justify-center">
        <div className="relative flex items-center justify-center h-72 md:h-[40rem] select-none w-full mx-auto overflow-hidden">
          <button onClick={handlePrev} className="absolute left-0 z-10 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white shadow-lg transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="relative w-full flex items-center justify-center h-full" style={{ perspective: "1800px" }}>
            {contentImages.map((img, idx) => {
              const offset = idx - current
              let style = {
                transition: isTransitioning ? "none" : "transform 0.7s cubic-bezier(.4,2,.6,1)",
                zIndex: 10 - Math.abs(offset),
                opacity: Math.abs(offset) > 2 ? 0 : 1,
                position: "absolute" as const,
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) scale(${offset === 0 ? 1 : 0.8}) rotateY(${offset * 40}deg) translateX(${offset * 320}px)`,
                boxShadow: offset === 0 ? "0 8px 32px 0 rgba(0,0,0,0.25)" : "none",
                filter: offset === 0 ? "none" : "blur(1px)",
              }
              return (
                <a
                  key={idx}
                  href={contentLinks[idx]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl w-65 h-52 md:w-[28rem] md:h-[36rem] object-cover cursor-pointer border-4 border-transparent hover:border-cyan-400 transition-all duration-300 block overflow-hidden"
                  style={style}
                >
                  <img
                    src={img}
                    alt={`Contenido ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Shine effect */}
                  <span className="absolute inset-0 pointer-events-none overflow-hidden">
                    <span className="block w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:shine-anim" />
                  </span>
                </a>
              )
            })}
          </div>
          <button onClick={handleNext} className="absolute right-0 z-10 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white shadow-lg transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center mt-12">
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Conviértete en mi próxima historia de éxito
          </h3>
          <p className="text-cyan-100 max-w-4xl mx-auto leading-relaxed text-sm md:text-base">
            ¿Listo para transformar tu vida? Sígueme y déjame acompañarte en el proceso de mejorar tu calidad de vida,
            alcanzar tus metas y descubrir tu mejor versión. Juntos lograremos resultados duraderos, hábitos saludables
            y una mentalidad fuerte. ¡Tú puedes ser la próxima inspiración para otros!
          </p>
        </div>
      </div>
    </section>
  )
}
