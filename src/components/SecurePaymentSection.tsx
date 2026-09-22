
import { ShieldCheck, Lock } from 'lucide-react';

export const SecurePaymentSection = () => (
  <section className="w-full py-12 px-4 bg-gradient-to-br from-green-100 via-blue-50 to-gray-50 rounded-2xl shadow-xl mt-14 mb-10 border border-green-200">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
      <div className="flex flex-col items-center gap-4 mb-8 md:mb-0 md:items-start">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center justify-center bg-green-200 rounded-full p-5 shadow-lg">
            <Lock className="h-12 w-12 text-green-700" />
          </span>
          <span className="inline-flex items-center justify-center bg-blue-200 rounded-full p-5 shadow-lg">
            <ShieldCheck className="h-12 w-12 text-blue-700" />
          </span>
        </div>
        <span className="mt-2 text-green-700 font-semibold text-lg tracking-wide">Processo Seguro</span>
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-3xl font-extrabold text-gray-800 mb-3">
            Paguamento com Confiança
        </h3>
        <p className="text-gray-700 mb-6 text-lg">
           Você pode pagar com confiança que vai receber o acesso ao curso.
        Fique tranquilo, este não é um golpe: você não sofrerá nenhuma fraude. Mais de 100 pessoas em todo Moçambique já compraram nossos cursos e receberam acesso normalmente. Temos isso registrado e podemos provar. Se desejar, pode solicitar essas provas e teremos o prazer de lhe apresentar.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-8 mt-4">
          <img
            src="/Mpesa.png"
            alt="Mpesa logo"
            className="h-14 w-32 object-contain bg-white rounded-lg border border-gray-300 shadow-md p-2"
          />
          <img
            src="/Emola.png"
            alt="Emola logo"
            className="h-14 w-32 object-contain bg-white rounded-lg border border-gray-300 shadow-md p-2"
          />
          <img
            src="/Ponto24.png"
            alt="Ponto24 logo"
            className="h-14 w-32 object-contain bg-white rounded-lg border border-gray-300 shadow-md p-2"
          />
        </div>
      </div>
    </div>
    
    {/* Informações de Contato */}
    <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-green-300">
      <div className="bg-white rounded-xl p-6 shadow-md border border-green-200">
        <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Precisa de Ajuda? Entre em Contato!
        </h4>
        <p className="text-gray-600 text-center mb-6">
          Estamos disponíveis para responder todas as suas dúvidas sobre os cursos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/258844948189?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20cursos%20de%20música."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
          >
            <svg 
              className="h-5 w-5" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp: +258 84 494 8189
          </a>
        </div>
      </div>
    </div>
  </section>
);
