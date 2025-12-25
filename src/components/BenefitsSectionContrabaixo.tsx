import { CheckIcon } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    'Aprende a criar grooves e levadas sólidas em poucas semanas',
    'Desenvolve precisão rítmica e toca com mais confiança',
    'Domina técnicas essenciais (dedilhado, palheta e slap)',
    'Entende escalas e harmonia de forma prática',
    'Acompanha músicas e aprende a “segurar” a banda',
    'Método simples, direto ao ponto e fácil de aplicar',
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Porque aprender contrabaixo conosco?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              O contrabaixo é a base da música: ele dá corpo, ritmo e sustentação. Neste curso,
              vais aprender do zero com aulas práticas, para evoluir rápido e tocar com firmeza.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3 text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <img
              src="https://unsplash.com/photos/6D0_Y72T-TI/download?force=true&w=1200"
              alt="Aluno tocando contrabaixo"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
