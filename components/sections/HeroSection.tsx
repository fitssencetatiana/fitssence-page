"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const isMobile = useIsMobile()

  const heroImages = isMobile
    ? [
      "/images/hero/1.jpg",
      "/images/hero/2.jpg",
      "/images/hero/3.jpg",
    ]
    : [
      "/images/hero/1Full.jpg",
      "/images/hero/2Full.jpg",
      "/images/hero/3Full.jpg",
    ]

  // Auto-cambio de slides cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="inicio" className="pt-20 pb-20 relative overflow-hidden min-h-screen">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
              }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${image}')`,
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-cyan-400 scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="w-full mx-auto px-6 relative z-10 lg:w-[700px] lg:ml-12">
        <div className="grid lg:grid-cols-1 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8 text-center lg:pl-8">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">

              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>

              <div>
                <h2 className="text-3xl md:text-6xl font-bold text-white text-center mb-2">Hola, soy Tatiana</h2>
                <p className="text-base md:text-2xl text-white text-center md:text-lg font-bold">
                  Coach de bienestar, especialista en transformación personal y hábitos saludables. Juntos llegaremos a
                  tu mejor versión con entrenamiento personalizado, hábitos saludables y asesoría profesional.
                </p>

              </div>
            </div>

            <div className="space-y-4 ">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight text-center mb-3"  >
                Transforma tu{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Potencial
                </span>
              </h1>
            </div>

            <a
              href="https://wa.me/573227673418?text=Hola%20Tatiana%2C%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <Button
                size="lg"
                className="mt-auto bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Agenda tu cita
              </Button>
            </a>


          </div>
        </div>
      </div>
    </section>
  )
}
