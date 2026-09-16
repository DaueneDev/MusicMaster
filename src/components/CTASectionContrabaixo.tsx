export const CTASection = () => {
  return (
    <section className="py-16 bg-[url('https://unsplash.com/photos/nauavwJLz6Q/download?force=true&w=1600')] bg-cover text-white relative">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-[#e8b05c]">
          Pronto para tocar contrabaixo com firmeza e confiança?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
          Deixa de ficar só no “tum tum” sem direção. Aprende contrabaixo com um método claro por{' '}
          <span className="line-through">1997 MT</span> apenas <span className="font-bold">300 MT</span>.
          Após a compra, receberás um email com o guia em PDF contendo o acesso às videoaulas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <a
            href="https://checkout.escalepay.com/2985617"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-3 rounded-md font-bold hover:bg-green-700 transition duration-300 flex items-center justify-center text-lg shadow-lg"
          >
            Começar Agora
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-300">Oferta por tempo limitado. Aproveite agora!</p>
      </div>
    </section>
  );
};
