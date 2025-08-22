import { useLocation } from 'react-router-dom';
import React from 'react';
// import { CourseLayout } from '../components/CourseLayout';
import { CheckCircle } from 'lucide-react';
export function ThankYou() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const courseName = queryParams.get('curso');
  // Facebook Pixel: track conversion event
  React.useEffect(() => {
    // @ts-ignore
    if (window.fbq) {
      // @ts-ignore
      window.fbq('track', 'Purchase');
    }
  }, []);
  return (
    <div className="bg-gray-50 py-16 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-3">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Parabéns! Sua compra foi confirmada 🎉
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Você acaba de garantir o acesso ao curso <span className="font-bold">{courseName}</span>.<br />
          Agora, para receber seu acesso, volte para o WhatsApp e envie uma mensagem para nossa equipe.
        </p>
        <div className="space-y-4">
          <a
            href="https://wa.me/258844948189"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md shadow-lg text-lg"
          >
            Voltar para o WhatsApp e Receber Acesso
          </a>
        </div>
      </div>
    </div>
  );
}