"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Plan {
  id: number
  name: string
  price: string
  period: string
}

const plans: Plan[] = [
  { id: 1, name: "Transformación Total Premium", price: "200 SD", period: "/3 meses | 100 SD /mes" },
  { id: 2, name: "Cambio de Identidad Corporal", price: "180 SD", period: "/3 meses | 80 SD /mes" },
  { id: 3, name: "Cambio de Identidad Corporal Basic", price: "60 SD", period: "/mes" },
  { id: 4, name: "Plan Nutricional", price: "40 SD", period: "/mes | 25 SD/2 mes en adelante" },
  { id: 5, name: "Plan de Entrenamiento", price: "60 SD", period: "/mes | 40 SD/2 mes en adelante" },
  { id: 6, name: "Transformación Total Premium + 8 Sesiones Virtuales", price: "170 SD", period: "/mes | 140 SD/2 mes en adelante" },
  { id: 7, name: "Transformación Total Premium + 8 Sesiones Presenciales", price: "200 SD", period: "/mes | 150 SD/2 mes en adelante" },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    selectedPlan: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Función para recibir el plan seleccionado desde PlansSection
  useEffect(() => {
    const handlePlanSelection = (event: CustomEvent) => {
      setFormData(prev => ({
        ...prev,
        selectedPlan: event.detail.planId.toString()
      }))
    }

    window.addEventListener('planSelected', handlePlanSelection as EventListener)
    return () => {
      window.removeEventListener('planSelected', handlePlanSelection as EventListener)
    }
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Obtener el plan seleccionado
    const selectedPlan = plans.find(plan => plan.id.toString() === formData.selectedPlan)
    const planText = selectedPlan ? `${selectedPlan.name} - ${selectedPlan.price} ${selectedPlan.period}` : "No seleccionado"

    // Construir mensaje de WhatsApp con formato simple
    const message = `Hola! Me interesa el plan: ${planText}

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Mensaje: ${formData.message}`

    // Crear URL de WhatsApp
    const whatsappNumber = "573227673418"

    // Usar un mensaje más simple para evitar problemas de codificación
    const simpleMessage = `Hola! Me interesa el plan: ${planText}. Nombre: ${formData.name}. Email: ${formData.email}. Teléfono: ${formData.phone}. Mensaje: ${formData.message}`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(simpleMessage)}`

    // Simular delay para mejor UX
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Redirigir a WhatsApp
    window.open(whatsappUrl, "_blank")

    // Reset del formulario después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "", selectedPlan: "" })
    }, 3000)
  }


  return (
    <section id="contacto" className="py-20 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Contácta
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">me</span>
          </h2>
          <p className="text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto">
            ¿Listo para comenzar tu transformación? Contáctame y te ayudaré a alcanzar tus objetivos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto ">
          <div className="space-y-8 ">
            <Card className="bg-gradient-to-br from-purple-800/30 to-cyan-800/30 border-cyan-600/30 backdrop-blur-sm  bg-purple-900 border-purple-700 hover:border-cyan-400/30 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Información de Contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm md:text-base">Teléfono</div>
                      <div className="text-white text-base md:text-lg font-bold tracking-wide">3227673418</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="font-bold text-white text-lg">KT</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm md:text-base">Nombre</div>
                      <div className="text-white text-base md:text-lg font-bold tracking-wide">Karen Tatiana González Rojas</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-cyan-600/30">
                  <h4 className="text-lg md:text-xl font-bold text-white mb-4">Horarios de Atención</h4>
                  <div className="space-y-2 text-white text-base md:text-lg font-semibold">
                    <div className="flex justify-between">
                      <span>Lunes a Sábado:</span>
                      <span>6am - 11am / 5pm - 9pm</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-purple-800/30 to-cyan-800/30 border-cyan-600/30 backdrop-blur-sm  bg-purple-500 border-purple-700 hover:border-cyan-400/30 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Solicitar Información</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white mb-2 text-sm md:text-base">Plan de Interés</label>
                  <Select value={formData.selectedPlan} onValueChange={(value) => handleInputChange('selectedPlan', value)}>
                    <SelectTrigger className="w-full p-3 md:p-4 bg-purple-900/50 border border-cyan-600/50 rounded-lg text-white focus:border-cyan-400 focus:outline-none text-sm md:text-base">
                      <SelectValue placeholder="Selecciona un plan" />
                    </SelectTrigger>
                    <SelectContent className="bg-purple-900 border-cyan-600">
                      {plans.map((plan) => (
                        <SelectItem key={plan.id} value={plan.id.toString()} className="text-white hover:bg-purple-800">
                          {plan.name} - {plan.price} {plan.period}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-white mb-2 text-sm md:text-base">Nombre Completo</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full p-3 md:p-4 bg-purple-900/50 border border-cyan-600/50 rounded-lg text-white placeholder-cyan-300 focus:border-cyan-400 focus:outline-none text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 text-sm md:text-base">Email</label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-3 md:p-4 bg-purple-900/50 border border-cyan-600/50 rounded-lg text-white placeholder-cyan-300 focus:border-cyan-400 focus:outline-none text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 text-sm md:text-base">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="Tu teléfono"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full p-3 md:p-4 bg-purple-900/50 border border-cyan-600/50 rounded-lg text-white placeholder-cyan-300 focus:border-cyan-400 focus:outline-none text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 text-sm md:text-base">Mensaje</label>
                  <textarea
                    placeholder="¿En qué puedo ayudarte?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full p-3 md:p-4 bg-purple-900/50 border border-cyan-600/50 rounded-lg text-white placeholder-cyan-300 focus:border-cyan-400 focus:outline-none resize-none text-sm md:text-base"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white border-0 text-sm md:text-lg py-4 md:py-6 rounded-lg font-semibold shadow-xl transform transition-all duration-300 ${isSubmitting
                    ? "bg-gray-500 cursor-not-allowed"
                    : isSubmitted
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 hover:scale-105"
                    }`}
                >
                  {isSubmitting ? "ENVIANDO..." : isSubmitted ? "¡ENVIADO!" : "ENVIAR MENSAJE"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
