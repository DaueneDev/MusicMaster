import { StarIcon } from 'lucide-react';
export const TestimonialsSection = () => {
  const testimonials = [{
    content: "Antes tinha vergonha até de cantar em casa. Hoje canto na igreja com confiança. Este curso mudou a minha vida.",
    author: 'Marisa',
    age: '27',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  }, {
    content: "O professor explica de forma tão simples que em poucas semanas já notei diferença na minha voz",
    author: 'Carlos',
    age: '31',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg'
  }, {
    content: "Nunca pensei que conseguiria atingir notas altas sem esforço. O treino diário fez toda a diferença.",
    author: 'Helena',
    age: '19',
    avatar: 'https://randomuser.me/api/portraits/men/68.jpg'
  }];
  return <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nossos alunos amam as aulas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Não confie apenas na nossa palavra. Veja o que os alunos dizem sobre as suas experiência com o curso.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-600 text-sm">Idade {testimonial.age}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};