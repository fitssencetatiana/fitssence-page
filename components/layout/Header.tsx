"use client"

import { useState } from "react"
import { Menu, X, Home, Dumbbell, Image, User, Mail, Instagram, Youtube, Music2 } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-cyan-900/70 to-purple-900/70 backdrop-blur-xl border-b-2 border-cyan-400/40 shadow-xl animate-fade-in">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/fitssence-page/images/logo.png" alt="FITSSENCE Logo" className="w-14 h-14 rounded-full object-cover" />
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
              FITSSENCE
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-around space-x-8 text-lg">
            <a href="#inicio" className="text-white hover:text-cyan-300 transition-colors flex items-center gap-2 relative group">
              <Home className="w-6 h-6 relative top-[2px] text-cyan-400 group-hover:text-purple-400 transition-colors duration-200" />
              <span className="flex items-center leading-none align-middle">Inicio</span>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#planes" className="text-white hover:text-cyan-300 transition-colors flex items-center gap-2 relative group">
              <Dumbbell className="w-6 h-6 relative top-[2px] text-cyan-400 group-hover:text-purple-400 transition-colors duration-200" />
              <span className="flex items-center leading-none align-middle">Planes</span>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#galeria" className="text-white hover:text-cyan-300 transition-colors flex items-center gap-2 relative group">
              <Image className="w-6 h-6 relative top-[2px] text-cyan-400 group-hover:text-purple-400 transition-colors duration-200" />
              <span className="flex items-center leading-none align-middle">Galería</span>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#sobre-mi" className="text-white hover:text-cyan-300 transition-colors flex items-center gap-2 relative group">
              <User className="w-6 h-6 relative top-[2px] text-cyan-400 group-hover:text-purple-400 transition-colors duration-200" />
              <span className="flex items-center leading-none align-middle">Sobre Mí</span>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contacto" className="text-white hover:text-cyan-300 transition-colors flex items-center gap-2 relative group">
              <Mail className="w-6 h-6 relative top-[2px] text-cyan-400 group-hover:text-purple-400 transition-colors duration-200" />
              <span className="flex items-center leading-none align-middle">Contacto</span>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Redes sociales */}
          <div className="hidden md:flex items-center space-x-3 ml-6">
            <a href="https://www.instagram.com/nutricionyentrenamiento_kfit?igsh=ZjlkZ2Rtb3U5NTZm" target="_blank" rel="noopener noreferrer" className="group relative">
              <span className="sr-only">Instagram</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 text-white shadow-lg transition-transform duration-200 group-hover:scale-110 group-hover:shadow-xl">
                <Instagram className="w-6 h-6" />
              </span>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Instagram</span>
            </a>
            <a href="https://youtube.com/@tatiicos?si=vF-UFGxGe0KVW1Mt" target="_blank" rel="noopener noreferrer" className="group relative">
              <span className="sr-only">YouTube</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 text-white shadow-lg transition-transform duration-200 group-hover:scale-110 group-hover:shadow-xl">
                <Youtube className="w-6 h-6" />
              </span>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">YouTube</span>
            </a>
            <a href="https://www.tiktok.com/@karentatiana_gr?_t=ZS-8wxRhXlO86Z&_r=1" target="_blank" rel="noopener noreferrer" className="group relative">
              <span className="sr-only">TikTok</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 text-white shadow-lg transition-transform duration-200 group-hover:scale-110 group-hover:shadow-xl">
                <Music2 className="w-6 h-6" />
              </span>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">TikTok</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-cyan-300 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
        >
          <div className="py-8 space-y-4 border-t border-cyan-400/20 mt-4">
            <a
              href="#inicio"
              onClick={closeMenu}
              className="block text-white hover:text-cyan-300 transition-colors py-2 flex items-center gap-2"
            >
              <Home className="w-5 h-5" /> Inicio
            </a>
            <a
              href="#planes"
              onClick={closeMenu}
              className="block text-white hover:text-cyan-300 transition-colors py-2 flex items-center gap-2"
            >
              <Dumbbell className="w-5 h-5" /> Planes
            </a>
            <a
              href="#galeria"
              onClick={closeMenu}
              className="block text-white hover:text-cyan-300 transition-colors py-2 flex items-center gap-2"
            >
              <Image className="w-5 h-5" /> Galería
            </a>
            <a
              href="#sobre-mi"
              onClick={closeMenu}
              className="block text-white hover:text-cyan-300 transition-colors py-2 flex items-center gap-2"
            >
              <User className="w-5 h-5" /> Sobre Mí
            </a>
            <a
              href="#contacto"
              onClick={closeMenu}
              className="block text-white hover:text-cyan-300 transition-colors py-2 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" /> Contacto
            </a>
            {/* Redes sociales en menú móvil */}
            <div className="flex justify-center space-x-4 mt-6">
              <a href="https://www.instagram.com/nutricionyentrenamiento_kfit?igsh=ZjlkZ2Rtb3U5NTZm" target="_blank" rel="noopener noreferrer" className="group relative">
                <span className="sr-only">Instagram</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 text-white transition-transform duration-200 group-hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Instagram</span>
              </a>
              <a href="https://youtube.com/@tatiicos?si=vF-UFGxGe0KVW1Mt" target="_blank" rel="noopener noreferrer" className="group relative">
                <span className="sr-only">YouTube</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 text-white shadow-lg transition-transform duration-200 group-hover:scale-110 group-hover:shadow-xl">
                  <Youtube className="w-6 h-6" />
                </span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">YouTube</span>
              </a>
              <a href="https://www.tiktok.com/@karentatiana_gr?_t=ZS-8wxRhXlO86Z&_r=1" target="_blank" rel="noopener noreferrer" className="group relative">
                <span className="sr-only">TikTok</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 text-white shadow-lg transition-transform duration-200 group-hover:scale-110 group-hover:shadow-xl">
                  <Music2 className="w-6 h-6" />
                </span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
