import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

export const FAQSection = () => {
  const faqs = [
    {
      question: '1. Como recebo as aulas?',
      answer:
        'As aulas são enviadas por link após o pagamento. Você pode assistir pelo celular ou computador, sempre que quiser.',
    },
    {
      question: '2. As aulas são ao vivo?',
      answer: 'Não. As aulas são gravadas e você pode assistir no seu ritmo, quantas vezes quiser.',
    },
    {
      question: '3. Preciso ter uma guitarra em casa?',
      answer:
        'Não é obrigatório! Mesmo sem guitarra, você pode começar a assistir, aprender a teoria e se preparar. Assim, quando tiver o instrumento, estarás mais pronto!',
    },
    {
      question: '4. Eu sou iniciante. Posso aprender jazz?',
      answer:
        'Sim. O curso é estruturado do básico ao avançado. Você vai aprender acordes, ritmo e conceitos aos poucos, com exercícios simples e progressivos.',
    },
    {
      question: '5. Qual o preço do curso?',
      answer:
        'O curso custa normalmente 1997 MT, mas está com preço promocional de apenas 319 MT por tempo limitado. É um pagamento único com acesso vitalício.',
    },
    {
      question: '6. Como posso pagar?',
      answer:
        'Aceitamos pagamentos por M-Pesa, E-Mola e Ponto 24. Após o pagamento, basta enviar o comprovativo. Você receberá o link para as aulas por WhatsApp.',
    },
    {
      question: '7. Existe suporte ou acompanhamento após a compra?',
      answer:
        'As aulas são totalmente gravadas e não oferecem suporte individual. Todo o conteúdo foi preparado para que você aprenda de forma independente.',
    },
    {
      question: '8. Posso assistir as aulas offline?',
      answer: 'Sim! Você pode baixar os vídeos para assistir mesmo sem internet, no celular ou computador.',
    },
    {
      question: '9. Por quanto tempo terei acesso as aulas?',
      answer: 'Você vai ter acesso ao curso por tempo indeterminado, ou seja vitalício.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600">
            Tens dúvidas sobre nossas aulas de guitarra jazz? Encontre respostas para as perguntas mais comuns abaixo.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUpIcon className="h-5 w-5 text-indigo-600" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-indigo-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
