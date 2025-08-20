
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
        <span className="mt-2 text-green-700 font-semibold text-lg tracking-wide">Ambiente Protegido</span>
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-3xl font-extrabold text-gray-800 mb-3">Pagamento Seguro e Criptografado</h3>
        <p className="text-gray-700 mb-6 text-lg">
          Todas as transações são processadas de forma segura pelo <span className="font-bold text-green-700">MozPayments</span>.<br className="hidden md:block" />
          Você pode pagar com confiança que vai receber o acesso ao curso.
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
        </div>
      </div>
    </div>
  </section>
);
