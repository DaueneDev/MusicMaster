export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-cover text-white py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://unsplash.com/photos/8x_Ki1pdn0A/download?force=true&w=1600')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#e8b05c]">
              Curso de Contrabaixo
            </h1>
            <p className="text-xl mb-8 text-white">
              Aprende contrabaixo do zero até avançado com um método prático, claro e fácil de seguir.
              Domina grooves, levadas e técnicas para tocar as tuas músicas favoritas — no teu ritmo, no teu celular, tablet ou computador.
              Após a compra, receberás um email com o guia em PDF contendo o acesso às videoaulas.
            </p>
            <div className="bg-[#e8b05c] inline-block px-6 py-2 mb-8 relative">
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 -mt-3 -mr-2 rounded">
                APENAS HOJE
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#3c2415] text-lg line-through">1997 MT</span>
                <span className="text-[#3c2415] text-3xl font-bold">300 MT</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white p-2 rounded-lg shadow-xl">
                <img
                  src="https://unsplash.com/photos/fd47bVxHzVc/download?force=true&w=1000"
                  alt="Estudante aprendendo a tocar contrabaixo"
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
