import { CheckIcon } from 'lucide-react';
export const BenefitsSection = () => {
  const benefits = [
    'Aprende as técnicas para tocar riffs famosos em poucas semanas',
    'Desenvolve solos cheios de emoção e criatividade',
    'Descobre segredos de palhetada e velocidade',
    'Domina acordes, ritmos e escalas essenciais',
    'Perde o medo de improvisar e criar a tua identidade musical',
    'Método simples, prático e direto ao ponto',
  ];
  return <section id="benefits" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Porque aprender guitarra elétrica conosco?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A guitarra elétrica não é só um instrumento, é uma forma de expressão. Seja para tocar as tuas músicas favoritas, criar a tua própria banda ou simplesmente relaxar, este curso vai te dar as bases e as técnicas para evoluir rápido e com confiança.
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
            <img src="https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Student playing guitar" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>;
};