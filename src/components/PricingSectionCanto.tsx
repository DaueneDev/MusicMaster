import { CheckIcon } from 'lucide-react';
export const PricingSection = () => {
  return <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3c2415] mb-4">
            Preço Acessível para Todos
          </h2>
          <p className="text-xl text-[#6b5240] max-w-3xl mx-auto">
            Aprenda a cantar com aulas gravadas de alta qualidade por um preço promocional. Acesso vitalício e o pagas apenas uma vez. Não perca essa oportunidade de transformar sua paixão pela música em realidade!
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-[url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover rounded-lg overflow-hidden shadow-xl">
            <div className="bg-black bg-opacity-70 p-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#e8b05c] mb-6">
                  Curso Completo de Canto e Melhoria da Voz
                </h3>
                <div className="bg-[#e8b05c] inline-block px-8 py-4 mb-6 rounded">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-[#3c2415] text-xl line-through">
                      1997 MT
                    </span>
                    <span className="text-[#3c2415] text-4xl font-bold">
                      399 MT
                    </span>
                  </div>
                  <div className="text-[#3c2415] mt-1 text-sm font-semibold">
                    APENAS HOJE
                  </div>
                </div>
                <div className="text-white mb-8 max-w-lg mx-auto">
                  <p>
                    Acesso completo a todas as aulas gravadas para você aprender
                    no seu próprio ritmo.
                  </p>
                </div>
                <ul className="mb-8 space-y-3 max-w-md mx-auto">
                  {['Mais de 50 vídeo-aulas', 'Exercícios práticos guiados', 'Técnicas de respiração e dicção', 'Como cantar afinado em qualquer estilo', 'Acesso vitalício', 'Sem pagamento de mensalidades'].map((feature, i) => <li key={i} className="flex items-start text-left">
                      <CheckIcon className="h-5 w-5 text-[#e8b05c] flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-white">{feature}</span>
                    </li>)}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <a
                href="/curso-guitarra-acustica/pagamento"
                className="bg-green-600 text-white px-8 py-3 rounded-md font-bold hover:bg-green-700 transition duration-300 flex items-center justify-center text-lg shadow-lg"
              >
                Começar Agora
              </a>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};