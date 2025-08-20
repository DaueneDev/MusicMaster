import { CheckIcon } from 'lucide-react';
export const BenefitsSection = () => {
  const benefits = [
    'Toque suas músicas favoritas em poucas semanas',
    'Construa confiança ao tocar através das aulas',
    'Desenvolva a técnica correta desde o início',
    'Aprenda teoria musical de forma prática e divertida',
    'Expresse-se criativamente através da música',
    'Faça parte da comunidade dos que sabem tocar guitarra',
  ];
  return <section id="benefits" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Porque aprender a tocar guitarra conosco?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Aprender a tocar guitarra oferece inúmeros benefícios mentais e emocionais além de simplesmente fazer música. E a abordagem das aulas garante que você aprenda e desenvolva essa habilidade para a vida toda.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3 text-gray-700">{benefit}</p>
                </div>)}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Student playing guitar" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>;
};