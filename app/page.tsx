"use client"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import PlansSection from "@/components/sections/PlansSection"
import GallerySection from "@/components/sections/GallerySection"
import AboutSection from "@/components/sections/AboutSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-purple-900 to-violet-900">
      <Header />
      <main>
        <HeroSection />
        <PlansSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
