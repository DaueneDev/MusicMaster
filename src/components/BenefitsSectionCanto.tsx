import { CheckIcon } from 'lucide-react';
export const BenefitsSection = () => {
  const benefits = [
    'Desenvolve potência e afinação vocal',
    'Aprende técnicas de respiração e projeção',
    'Domina estilos musicais variados',
    'Perde o medo de cantar em público',
    'Exercícios práticos para melhorar o timbre e a extensão vocal',
    'Faça parte da comunidade dos que sabem cantar',
  ];
  return <section id="benefits" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Porque aprender a cantar conosco?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Cantar vai muito além da música — melhora a respiração, reduz o estresse e aumenta a autoconfiança. No nosso curso, vais aprender de forma clara, passo a passo, a explorar todo o potencial da tua voz.</p>
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
            <img src="https://images.unsplash.com/photo-1638389746430-82c12a2d0bb2?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=emmanuel-ikwuegbu-n_qhPU-nsyc-unsplash.jpg" alt="Estudante aprendendo a cantar" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>;
};