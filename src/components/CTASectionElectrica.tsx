export const CTASection = () => {
  return <section className="py-16 bg-[url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover text-white relative">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-[#e8b05c]">
          Está na hora de soltar os riffs que sempre sonhaste tocar!
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
          Não fiques apenas assistindo outros tocarem. Aprende agora guitarra elétrica de forma simples e divertida por{' '}
          <span className="line-through">1997 MT</span> apenas{' '}
          <span className="font-bold">399 MT</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <a
                href="/curso-guitarra-acustica/pagamento"
                className="bg-green-600 text-white px-8 py-3 rounded-md font-bold hover:bg-green-700 transition duration-300 flex items-center justify-center text-lg shadow-lg"
              >
                Começar Agora
              </a>
            </div>
        <p className="mt-6 text-sm text-gray-300">
          Oferta por tempo limitado. Aproveite agora!
        </p>
      </div>
    </section>;
};