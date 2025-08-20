import { CheckIcon } from 'lucide-react';
export const BenefitsSection = () => {
  const benefits = [
    'Sempre sonhou tocar piano mas acha que não tem talento',
    'Já tentou aprender sozinho pelo YouTube e desistiu',
    'Quer tocar na igreja, em casa ou até se apresentar em público',
    'Deseja entender música de forma simples e sem complicação',
    'Quer expresse-se criativamente através da música',
  ];
  return <section id="benefits" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Por que aprender piano conosco?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              O piano é um dos instrumentos mais completos do mundo. Ele pode ser suave, emocionante, alegre ou poderoso — tudo depende de ti.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Este curso foi feito para quem:
            </p>
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3 text-gray-700">{benefit}</p>
                </div>)}
            </div>
            <div className="mt-8">
              <p className="text-lg text-gray-600 mb-8">
                Com o nosso método vais aprender a:
              </p>
              <ul className="list-none space-y-5 mb-8">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mt-1" />
                  <span className="ml-3 text-gray-700">Tocar músicas conhecidas logo nas primeiras aulas</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mt-1" />
                  <span className="ml-3 text-gray-700">Acordes, escalas e ritmos de forma descomplicada</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mt-1" />
                  <span className="ml-3 text-gray-700">Como ler cifras e partituras simples</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mt-1" />
                  <span className="ml-3 text-gray-700">Técnicas para acompanhar canto, coral ou banda</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mt-1" />
                  <span className="ml-3 text-gray-700">Improvisar e criar os teus próprios arranjos</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Student playing guitar" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>;
};