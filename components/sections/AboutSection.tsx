import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-cyan-900/90"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <Card className="bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border-cyan-400/30 backdrop-blur-sm">
              <CardContent className="p-0">
                <img
                  src="/fitssence-page/images/sobreMi/aboutTatiana.jpg"
                  alt="TatianaSobreMi"
                  className="w-full h-80 md:h-96 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-cyan-600" />
                    <div>
                      <div className="font-bold text-purple-900 text-sm md:text-base">Experiencia</div>
                      <div className="text-cyan-700 text-xs md:text-sm">10+ años</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Sobre{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Mí</span>
              </h2>
              <p className="text-cyan-100 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                Soy una entrenadora personal apasionada por ayudar a las personas a alcanzar sus objetivos fitness. Con
                más de 10 años de experiencia en el sector, he desarrollado un enfoque personalizado que combina
                entrenamiento de fuerza, nutrición y bienestar mental.
              </p>
              <p className="text-purple-200 leading-relaxed text-sm md:text-base">
                Mi misión es inspirar y guiar a mis clientes hacia una vida más saludable y activa, proporcionándoles
                las herramientas y el conocimiento necesarios para lograr resultados duraderos y significativos.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-white">Certificaciones</h3>
              <div className="space-y-2">
                <div className="text-cyan-200">
                  <span className="font-semibold text-sm md:text-base">Entrenador Personal Certificado</span>
                  <div className="text-purple-300 text-xs md:text-sm">ACSM - 2018</div>
                </div>
                <div className="text-cyan-200">
                  <span className="font-semibold text-sm md:text-base">Especialista en Nutrición Deportiva</span>
                  <div className="text-purple-300 text-xs md:text-sm">ISSN - 2019</div>
                </div>
                <div className="text-cyan-200">
                  <span className="font-semibold text-sm md:text-base">Entrenador de Fuerza y Acondicionamiento</span>
                  <div className="text-purple-300 text-xs md:text-sm">NSCA - 2020</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-cyan-200 text-xs md:text-sm">Clientes Transformados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-cyan-200 text-xs md:text-sm">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  95%
                </div>
                <div className="text-cyan-200 text-xs md:text-sm">Clientes Satisfechos</div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
              COMENZAR AHORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
