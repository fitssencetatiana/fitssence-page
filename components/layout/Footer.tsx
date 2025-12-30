export default function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-r from-cyan-900 to-purple-900 border-t border-cyan-700/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src="/fitssence-page/images/logo.png" alt="AIA SYNERGY Logo" className="w-10 h-10 rounded-full object-cover" />
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              FITSSENCE
            </div>
          </div>
          <p className="text-cyan-300 mb-6 text-sm md:text-base">
            Conectando propósito, bienestar y resultados para un 2025 extraordinario.
          </p>
          <div className="text-purple-400 text-xs md:text-sm">© 2025 AIA SYNERGY. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
}
