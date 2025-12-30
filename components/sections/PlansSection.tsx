"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose
} from "@/components/ui/drawer"

interface Plan {
  id: number
  name: string
  price: string
  period: string
  description: string
  features: string[]
  buttonText: string
  popular: boolean
  details: React.ReactNode
}

export default function PlansSection() {
  const [selectedPlan, setSelectedPlan] = useState(1)
  const [openDetails, setOpenDetails] = useState<number | null>(null)

  const plans: Plan[] = [
    {
      id: 1,
      name: "Transformación Total Premium",
      price: "$800.000 COP",
      period: "/3 meses | $400.000 COP /mes",
      description: "Incluye modalidad virtual + 4 sesiones virtuales. Plan integral de nutrición y entrenamiento.",
      features: [
        "Análisis de ingesta vs gasto",
        "Bitácora alimenticia y respuesta hormonal",
        "Educación nutricional",
        "Terapia conductual (cambio de hábitos)",
        "Tabla de reestructuración de alimentos",
        "Plan de nutrición personalizado y progresivo",
        "Lista de intercambios alimenticios",
        "Suplementación inteligente",
      ],
      buttonText: "COMENZAR AHORA",
      popular: true,
      details: (
        <div className="text-left mt-4 space-y-2">
          <div>
            <span className="font-bold text-cyan-300">Entrenamiento:</span>
            <ul className="list-disc ml-6 text-white">
              <li>Evaluación para el entrenamiento.</li>
              <li>Pruebas aplicables según condición física.</li>
              <li>Posturometría.</li>
              <li>Fuerza y tamaño muscular.</li>
              <li>Salud articular.</li>
              <li>Resistencia cardiovascular enfocada en el objetivo (VO2 máx, reducción de grasa).</li>
              <li>Prescripción y programación del entrenamiento.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 2,
      name: "Cambio de Identidad Corporal",
      price: "$720.000 COP",
      period: "/3 meses | $320.000 COP /mes",
      description: "Modalidad virtual. Plan nutricional y de entrenamiento personalizado.",
      features: [
        "Análisis de ingesta vs gasto",
        "Bitácora alimenticia y respuesta hormonal",
        "Tabla de reestructuración de alimentos",
        "Plan de nutrición personalizado y progresivo",
        "Suplementación inteligente",
        "Evaluación para el entrenamiento",
        "Evaluación de condición física",
        "Posturometría",
        "Fuerza y tamaño muscular",
        "Resistencia",
        "Prescripción y programación del entrenamiento"
      ],
      buttonText: "COMENZAR AHORA",
      popular: false,
      details: (
        <div className="text-left mt-4 space-y-2">
          <div>
            <span className="font-bold text-cyan-300">Nutricional:</span>
            <ul className="list-disc ml-6 text-white">
              <li>Análisis de ingesta vs. gasto.</li>
              <li>Bitácora alimenticia con enfoque hormonal.</li>
              <li>Tabla de reestructuración de alimentos problema.</li>
              <li>Plan nutricional personalizado y progresivo.</li>
              <li>Suplementación inteligente.</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-cyan-300">Entrenamiento:</span>
            <ul className="list-disc ml-6 text-white">
              <li>Evaluación inicial.</li>
              <li>Evaluación escrita de condiciones físicas.</li>
              <li>Posturometría.</li>
              <li>Fuerza y tamaño muscular.</li>
              <li>Resistencia.</li>
              <li>Prescripción y programación del entrenamiento.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 3,
      name: "Cambio de Identidad Corporal Basic",
      price: "$240.000 COP",
      period: "/mes",
      description: "Modalidad virtual. Plan nutricional básico y entrenamiento.",
      features: [
        "Bitácora alimenticia con abordaje en respuesta hormonal",
        "Tabla de reestructuración de alimentos",
        "Plan de nutrición personalizado y progresivo",
        "Suplementación inteligente",
        "Evaluación para el entrenamiento",
        "Evaluación articular",
        "Fuerza y tamaño muscular",
        "Resistencia",
        "Prescripción y programación del entrenamiento"
      ],
      buttonText: "COMENZAR AHORA",
      popular: false,
      details: (
        <div className="text-left mt-4 space-y-2">
          <div>
            <span className="font-bold text-cyan-300">Nutricional:</span>
            <ul className="list-disc ml-6 text-white">
              <li>Bitácora alimenticia con enfoque hormonal.</li>
              <li>Tabla de reestructuración de alimentos problema.</li>
              <li>Plan nutricional personalizado.</li>
              <li>Suplementación inteligente.</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-cyan-300">Entrenamiento:</span>
            <ul className="list-disc ml-6 text-white">
              <li>Evaluación inicial.</li>
              <li>Salud articular.</li>
              <li>Fuerza y tamaño muscular.</li>
              <li>Resistencia.</li>
              <li>Prescripción del entrenamiento.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 4,
      name: "Plan Nutricional",
      price: "$160.000 COP",
      period: "/mes | $100.000 COP /2 mes en adelante",
      description: "Plan de nutrición personalizado y progresivo.",
      features: [
        "Análisis de ingesta vs gasto",
        "Bitácora alimenticia y respuesta hormonal",
        "Educación nutricional",
        "Terapia conductual (cambio de hábitos)",
        "Tabla de reestructuración de alimentos",
        "Plan de nutrición personalizado y progresivo",
        "Lista de intercambios alimenticios"
      ],
      buttonText: "COMENZAR AHORA",
      popular: false,
      details: (
        <div className="text-left mt-4 space-y-2">
          <span className="font-bold text-cyan-300">Nutricional:</span>
          <ul className="list-disc ml-6 text-white">
            <li>Análisis de ingesta vs. gasto.</li>
            <li>Bitácora alimenticia con enfoque hormonal.</li>
            <li>Educación nutricional.</li>
            <li>Terapia conductual (cambio de hábitos).</li>
            <li>Tabla de reestructuración de alimentos problema.</li>
            <li>Plan nutricional personalizado y progresivo.</li>
            <li>Lista de intercambios alimenticios.</li>
          </ul>
        </div>
      )
    },
    {
      id: 5,
      name: "Plan de Entrenamiento",
      price: "$240.000 COP",
      period: "/mes | $160.000 COP /2 mes en adelante",
      description: "Entrenamiento personalizado y progresivo.",
      features: [
        "Evaluación para el entrenamiento",
        "Evaluación de condición física",
        "Posturometría",
        "Fuerza y tamaño muscular",
        "Resistencia",
        "Prescripción y programación del entrenamiento"
      ],
      buttonText: "COMENZAR AHORA",
      popular: false,
      details: (
        <div className="text-left mt-4 space-y-2">
          <span className="font-bold text-cyan-300">Entrenamiento:</span>
          <ul className="list-disc ml-6 text-white">
            <li>Evaluación inicial.</li>
            <li>Evaluación escrita de condiciones físicas.</li>
            <li>Posturometría.</li>
            <li>Fuerza y tamaño muscular.</li>
            <li>Resistencia.</li>
            <li>Prescripción y programación del entrenamiento.</li>
          </ul>
        </div>
      )
    },
    {
      id: 6,
      name: "Transformación Total Premium + 8 Sesiones Virtuales",
      price: "$680.000 COP",
      period: "/mes | $560.000 COP /2 mes en adelante",
      description: "Incluye 8 sesiones virtuales de 1hr de duración.",
      features: [
        "Plan integral de nutrición y entrenamiento",
        "8 sesiones virtuales (1hr)",
        "Evaluación y seguimiento personalizado",
        "Educación nutricional y suplementación"
      ],
      buttonText: "COMENZAR AHORA",
      popular: false,
      details: (
        <div className="text-left mt-4 space-y-2">
          <span className="font-bold text-cyan-300">Incluye:</span>
          <ul className="list-disc ml-6 text-white">
            <li>Todos los componentes del Plan 1</li>
            <li>8 sesiones virtuales personalizadas (1hr cada una)</li>
          </ul>
        </div>
      )
    },
    {
      id: 7,
      name: "Transformación Total Premium + 8 Sesiones Presenciales",
      price: "$800.000 COP",
      period: "/mes | $600.000 COP /2 mes en adelante",
      description: "Incluye 8 sesiones presenciales de 1hr de duración.",
      features: [
        "Plan integral de nutrición y entrenamiento",
        "8 sesiones presenciales (1hr)",
        "Evaluación y seguimiento personalizado",
        "Educación nutricional y suplementación"
      ],
      buttonText: "COMENZAR AHORA",
      popular: false,
      details: (
        <div className="text-left mt-4 space-y-2">
          <span className="font-bold text-cyan-300">Incluye:</span>
          <ul className="list-disc ml-6 text-white">
            <li>Todos los componentes del Plan 1</li>
            <li>8 sesiones presenciales guiadas (1hr cada una)</li>
          </ul>
        </div>
      )
    },
  ]

  const handlePlanSelection = (planId: number) => {
    // Disparar evento personalizado para comunicar con ContactSection
    const event = new CustomEvent('planSelected', {
      detail: { planId }
    })
    window.dispatchEvent(event)

    // Scroll suave al formulario de contacto
    const contactSection = document.getElementById('contacto')
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="planes" className="py-20 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Planes de{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Entrenamiento
            </span>
          </h2>
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus objetivos y comienza tu transformación hoy mismo
          </p>
        </div>

        {/* Plan Premium centrado arriba */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-md">
            <Card
              className="relative w-full overflow-hidden transition-all duration-300 cursor-pointer transform hover:scale-105 bg-purple-900 border-purple-700 hover:border-cyan-400/30 backdrop-blur-sm"
              onClick={() => setSelectedPlan(1)}
            >

              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 px-3 md:px-4 py-1 text-xs md:text-sm">
                  MÁS POPULAR
                </Badge>
              </div>
              <CardContent className="p-6 md:p-8 pt-10 md:pt-12">
                <div className="text-center space-y-4 md:space-y-6">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{plans[1].name}</h3>
                  <p className="text-cyan-100 text-base md:text-lg font-medium">{plans[1].description}</p>
                  <div className="text-center">
                    <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {plans[1].price}
                    </span>
                    <span className="text-cyan-200 text-lg font-semibold">{plans[1].period}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Drawer>
                      <DrawerTrigger asChild>
                        <Button variant="outline" className="w-full bg-transparent border-cyan-400 text-cyan-300 hover:bg-cyan-400/20 hover:text-white">Ver Beneficios</Button>
                      </DrawerTrigger>
                      <DrawerContent className="bg-gradient-to-br from-cyan-900/90 to-purple-900/90 text-white p-6">
                        <DrawerHeader>
                          <DrawerTitle>Beneficios de {plans[1].name}</DrawerTitle>
                          <DrawerDescription className="text-cyan-300">Incluye:</DrawerDescription>
                        </DrawerHeader>
                        <ul className="list-disc ml-6 text-white mb-4">
                          {plans[1].features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                        <DrawerFooter>
                          <DrawerClose asChild>
                            <Button className="text-black" variant="outline">Cerrar</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                    <Drawer>
                      <DrawerTrigger asChild>
                        <Button className="w-full bg-purple-800/50 hover:bg-purple-800/80 text-white border border-purple-500/30">Ver Detalles</Button>
                      </DrawerTrigger>
                      <DrawerContent className="bg-gradient-to-br from-cyan-900/90 to-purple-900/90 text-white p-6">
                        <DrawerHeader>
                          <DrawerTitle>Detalles de {plans[1].name}</DrawerTitle>
                        </DrawerHeader>
                        <div className="mb-4 text-white text-base md:text-lg">
                          {plans[1].details}
                        </div>
                        <DrawerFooter>
                          <DrawerClose asChild>
                            <Button className="text-black" variant="outline">Cerrar</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                  <Button
                    onClick={() => handlePlanSelection(plans[1].id)}
                    className={`w-full mt-4 text-white border-0 py-4 md:py-6 rounded-full font-semibold transition-all duration-300 text-base md:text-lg ${plans[1].popular
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 shadow-lg"
                      : "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                      }`}
                  >
                    {plans[1].buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Grid de 3 columnas para los otros 6 planes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center">
          {plans.filter((_, idx) => idx !== 1).map((plan, index) => (
            <Card
              key={index}
              className="relative w-full max-w-md overflow-hidden transition-all duration-300 cursor-pointer transform hover:scale-105 bg-purple-900 border-purple-700 hover:border-cyan-400/30 backdrop-blur-sm"
              onClick={() => setSelectedPlan(index >= 1 ? index + 1 : index)}
            >

              {plan.popular && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 px-3 md:px-4 py-1 text-xs md:text-sm">
                    MÁS POPULAR
                  </Badge>
                </div>
              )}
              <CardContent className="p-6 md:p-8 pt-10 md:pt-12">
                <div className="text-center space-y-4 md:space-y-6">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{plan.name}</h3>
                  <p className="text-cyan-100 text-base md:text-lg font-medium">{plan.description}</p>
                  <div className="text-center">
                    <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-cyan-200 text-lg font-semibold">{plan.period}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Drawer>
                      <DrawerTrigger asChild>
                        <Button variant="outline" className="w-full bg-transparent border-cyan-400 text-cyan-300 hover:bg-cyan-400/20 hover:text-white">Ver Beneficios</Button>
                      </DrawerTrigger>
                      <DrawerContent className="bg-gradient-to-br from-cyan-900/90 to-purple-900/90 text-white p-6">
                        <DrawerHeader>
                          <DrawerTitle>Beneficios de {plan.name}</DrawerTitle>
                          <DrawerDescription className="text-cyan-300">Incluye:</DrawerDescription>
                        </DrawerHeader>
                        <ul className="list-disc ml-6 text-white mb-4">
                          {plan.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                        <DrawerFooter>
                          <DrawerClose asChild>
                            <Button className="text-black" variant="outline">Cerrar</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                    <Drawer>
                      <DrawerTrigger asChild>
                        <Button className="w-full bg-purple-800/50 hover:bg-purple-800/80 text-white border border-purple-500/30">Ver Detalles</Button>
                      </DrawerTrigger>
                      <DrawerContent className="bg-gradient-to-br from-cyan-900/90 to-purple-900/90 text-white p-6">
                        <DrawerHeader>
                          <DrawerTitle>Detalles de {plan.name}</DrawerTitle>
                        </DrawerHeader>
                        <div className="mb-4 text-white text-base md:text-lg">
                          {plan.details}
                        </div>
                        <DrawerFooter>
                          <DrawerClose asChild>
                            <Button className="text-black" variant="outline">Cerrar</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                  <Button
                    onClick={() => handlePlanSelection(plan.id)}
                    className={`w-full mt-4 text-white border-0 py-4 md:py-6 rounded-full font-semibold transition-all duration-300 text-base md:text-lg ${plan.popular
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 shadow-lg"
                      : "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                      }`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
