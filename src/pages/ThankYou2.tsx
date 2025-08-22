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
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Como receber seu acesso:
          </h2>
          <ol className="text-left space-y-4 mb-6">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-green-200 text-green-800 rounded-full h-6 w-6 mr-3 font-bold text-sm">1</span>
              <span>Volte para o WhatsApp clicando no botão abaixo.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-green-200 text-green-800 rounded-full h-6 w-6 mr-3 font-bold text-sm">2</span>
              <span>Informe seu nome, número de celular e e-mail usados na compra.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-green-200 text-green-800 rounded-full h-6 w-6 mr-3 font-bold text-sm">3</span>
              <span>Após a confirmação, você receberá o acesso ao curso no mesmo dia!</span>
            </li>
          </ol>
          <div className="bg-gray-50 p-4 rounded-md text-gray-700 text-sm">
            <p className="font-semibold mb-1">Importante:</p>
            <p>
              Caso não encontre nosso e-mail na caixa de entrada, verifique a pasta de spam. O acesso também será enviado pelo WhatsApp.
            </p>
          </div>
        </div>
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