import { CheckIcon } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    'Pentatônica e blues scale para improvisar',
    'Bends e vibrato com técnica e controle',
    'Licks clássicos e como montar frases',
    'Shuffle, boogie e ritmo blues',
    'Improviso com feeling e dinâmica',
    'Método prático, simples e direto',
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Porque aprender Blues conosco?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Blues é sentimento + técnica. Aqui você aprende as bases (escala, licks, ritmo) e evolui com exercícios práticos
              para tocar com emoção e confiança.
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
              src="https://unsplash.com/photos/gioH4gHo0-g/download?force=true&w=1200"
              alt="Guitarra blues"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
