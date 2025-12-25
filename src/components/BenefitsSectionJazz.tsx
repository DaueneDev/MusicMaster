import { CheckIcon } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    'Acordes jazz (7, 9, 13) de forma simples e prática',
    'Progressões clássicas (II-V-I) e como aplicá-las',
    'Ritmo e comping para soar profissional',
    'Improvisação com escalas e arpejos essenciais',
    'Treinos para ouvido e controle harmônico',
    'Método direto ao ponto, sem confusão',
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Porque aprender Jazz conosco?</h2>
            <p className="text-lg text-gray-600 mb-8">
              O jazz pode parecer difícil, mas com um passo a passo claro você aprende acordes, progressões e improviso
              sem se perder. Aqui você vai construir uma base sólida e tocar com elegância.
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
              src="https://unsplash.com/photos/xez-RVM6wz0/download?force=true&w=1200"
              alt="Guitarra jazz"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
