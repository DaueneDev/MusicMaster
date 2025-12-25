import { useEffect, useMemo, useState } from 'react';
import CourseCard from '../components/CourseCard';

type TimeLeft = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getTimeLeft = (endsAt: Date): TimeLeft => {
  const totalMs = Math.max(0, endsAt.getTime() - Date.now());
  const totalSeconds = Math.floor(totalMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return {
    totalMs,
    days,
    hours,
    minutes,
    seconds,
  };
};

const pad2 = (n: number) => String(n).padStart(2, '0');
const Home = () => {
  const promoEndsAt = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), 11, 31, 23, 59, 59);
  }, []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(promoEndsAt));
  useEffect(() => {
    const id = window.setInterval(() => {
      setTimeLeft(getTimeLeft(promoEndsAt));
    }, 1000);
    return () => window.clearInterval(id);
  }, [promoEndsAt]);
  const promoEnded = timeLeft.totalMs <= 0;

  const courses = [{
    title: 'Curso de Guitarra Eléctrica',
    image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    price: '250MT',
    originalPrice: '1997MT',
    link: '/curso-guitarra-electrica'
  }, {
    title: 'Curso de Guitarra Acústica',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    price: '250MT',
    originalPrice: '1997MT',
    link: '/curso-guitarra-acustica'
  }, {
    title: 'Curso de Piano e Teclado',
    image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    price: '250MT',
    originalPrice: '1997MT',
    link: '/curso-piano'
  }, {
    title: 'Curso de Canto e Melhoria da Voz',
    image: 'https://images.unsplash.com/photo-1638389746430-82c12a2d0bb2?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=emmanuel-ikwuegbu-n_qhPU-nsyc-unsplash.jpg',
    price: '250MT',
    originalPrice: '1997MT',
    link: '/curso-canto-voz'
  }, {
    title: 'Curso de Contrabaixo',
    image: 'https://unsplash.com/photos/fd47bVxHzVc/download?force=true&w=1920',
    price: '250MT',
    originalPrice: '1997MT',
    link: '/curso-contrabaixo'
  }, {
    title: 'Curso de Guitarra - Jazz',
    image: 'https://unsplash.com/photos/XV9F-gfmThs/download?force=true&w=1920',
    price: '319MT',
    originalPrice: '1997MT',
    link: '/curso-guitarra-jazz'
  }, {
    title: 'Curso de Guitarra - Blues',
    image: 'https://unsplash.com/photos/JS-l3dLb8eQ/download?force=true&w=1920',
    price: '319MT',
    originalPrice: '1997MT',
    link: '/curso-guitarra-blues'
  }];
  return <div className="w-full bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black">
        <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-bold tracking-wide text-sm md:text-base text-center md:text-left">
            Promoção de Fim de Ano: entra em 2026 tocando e cantando com confiança
          </div>
          <div className="bg-black/15 rounded-full px-4 py-1 text-sm font-semibold">
            {promoEnded ? (
              <span>Promoção encerrada</span>
            ) : (
              <span>
                Termina em: {timeLeft.days}d {pad2(timeLeft.hours)}:{pad2(timeLeft.minutes)}:{pad2(timeLeft.seconds)}
              </span>
            )}
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="w-full bg-cover bg-center py-24 px-6" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      backgroundPosition: 'center'
    }}>
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 text-sm md:text-base">
            <span className="font-semibold text-yellow-300">Oferta de Fim de Ano</span>
            <span className="text-gray-200">Acesso vitalício • Pagamento único</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Aprenda a{' '}
            <span className="text-yellow-400">Tocar e a Cantar</span>
            <span> De Forma Profissional</span>
            
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Cursos online completos para iniciar e evoluir rápido. Mais de 450 videoaulas, apostilas e exercícios práticos.
            Ideal para iniciantes e avançados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#courses" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg">
              Ver Cursos com Desconto
            </a>
            <a
              href="https://wa.me/258844948189?text=Ol%C3%A1%2C%20quero%20aproveitar%20a%20promo%C3%A7%C3%A3o%20de%20fim%20de%20ano%20e%20preciso%20de%20ajuda%20para%20escolher%20o%20curso."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/15 border border-white/25 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-lg font-bold text-yellow-300 mb-2">Começa do zero</div>
            <div className="text-gray-200">
              Aulas organizadas por níveis, com exercícios práticos para evoluir sem confusão.
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-lg font-bold text-yellow-300 mb-2">Evolui rápido</div>
            <div className="text-gray-200">
              Material completo para praticares todos os dias e veres resultados ainda este mês.
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-lg font-bold text-yellow-300 mb-2">Compra segura</div>
            <div className="text-gray-200">
              Pagamento único, acesso vitalício e suporte via WhatsApp para tirar dúvidas.
            </div>
          </div>
        </div>
      </div>
      {/* Courses Section */}
      <div id="courses" className="container mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Escolha o <span className="text-yellow-400">Curso</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => <CourseCard key={index} title={course.title} image={course.image} price={course.price} originalPrice={course.originalPrice} link={course.link} />)}
        </div>
      </div>
    </div>;
};
export default Home;