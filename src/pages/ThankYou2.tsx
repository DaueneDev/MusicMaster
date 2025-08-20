import { useLocation } from 'react-router-dom';
// import { CourseLayout } from '../components/CourseLayout';
import { CheckCircle } from 'lucide-react';
export function ThankYou() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const courseName = queryParams.get('curso');
  return (
    <div className="bg-gray-50 py-16 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-3">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Obrigado pela sua compra!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          O curso {courseName} foi pago com sucesso. Siga as instruções abaixo para acessar o curso.
        </p>
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Próximos passos:
          </h2>
          <ol className="text-left space-y-4 mb-6">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-green-200 text-green-800 rounded-full h-6 w-6 mr-3 font-bold text-sm">
                1
              </span>
              <span>
                Clica no botao abaixo para entrar em contato conosco via WhatsApp. 
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-green-200 text-green-800 rounded-full h-6 w-6 mr-3 font-bold text-sm">
                2
              </span>
              <span>
                Apresente o nome, o numero de celular e email que usou para a compra do curso.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-green-200 text-green-800 rounded-full h-6 w-6 mr-3 font-bold text-sm">
                3
              </span>
                <span>
                Após a confirmação dos dados, lhe daremos acesso ao curso no mesmo dia.
                </span>
            </li>
          </ol>
          <div className="bg-gray-50 p-4 rounded-md text-gray-700 text-sm">
            <p className="font-semibold mb-1">Nota:</p>
            <p>
              Estas instruções de acesso foram enviadas em PDF tanto para o seu e-mail quanto para o seu WhatsApp. Caso não receba o e-mail na caixa de entrada principal, verifique sua pasta de spam.
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
            Fale conosco no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}