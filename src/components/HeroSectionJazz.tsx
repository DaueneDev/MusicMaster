export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-cover text-white py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://unsplash.com/photos/-KuyYQcnAbg/download?force=true&w=1600')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#e8b05c]">
              Curso de Guitarra - Jazz
            </h1>
            <p className="text-xl mb-8 text-white">
              Aprende guitarra jazz do zero até avançado: acordes sofisticados, progressões, improviso e ritmo.
              Método prático para tocares com elegância — no teu ritmo, no teu celular, tablet ou computador.
            </p>
            <div className="bg-[#e8b05c] inline-block px-6 py-2 mb-8 relative">
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 -mt-3 -mr-2 rounded">
                APENAS HOJE
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#3c2415] text-lg line-through">1997 MT</span>
                <span className="text-[#3c2415] text-3xl font-bold">319 MT</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://wa.me/258844948189?text=Ol%C3%A1%2C%20quero%20come%C3%A7ar%20agora%20com%20o%20curso%20de%20Guitarra%20Jazz."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-md font-bold hover:bg-green-700 transition duration-300 flex items-center justify-center text-lg shadow-lg"
              >
                Começar Agora
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white p-2 rounded-lg shadow-xl">
                <img
                  src="https://unsplash.com/photos/XV9F-gfmThs/download?force=true&w=1200"
                  alt="Guitarrista tocando jazz"
                  className="rounded w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 transform rotate-12">
                <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 18V9.93a8 8 0 0 1-3 .93v-2c.93-.19 1.69-.51 2.3-.97.61-.46 1.08-1.01 1.42-1.66.34-.65.5-1.43.5-2.33h2v14h-3.18z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
