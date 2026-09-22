import CourseCard from '../components/CourseCard';
const Home = () => {
  const courses = [{
    title: 'Curso de Guitarra Eléctrica',
    image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    price: '300MT',
    originalPrice: '1997MT',
    link: '/curso-guitarra-electrica'
  }, {
    title: 'Curso de Guitarra Acústica',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    price: '300MT',
    originalPrice: '1997MT',
    link: '/curso-guitarra-acustica'
  }, {
    title: 'Curso de Piano e Teclado',
    image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    price: '300MT',
    originalPrice: '1997MT',
    link: '/curso-piano'
  }, {
    title: 'Curso de Canto e Melhoria da Voz',
    image: 'https://images.unsplash.com/photo-1638389746430-82c12a2d0bb2?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=emmanuel-ikwuegbu-n_qhPU-nsyc-unsplash.jpg',
    price: '300MT',
    originalPrice: '1997MT',
    link: '/curso-canto-voz'
  }, {
    title: 'Curso de Contrabaixo',
    image: 'https://unsplash.com/photos/fd47bVxHzVc/download?force=true&w=1920',
    price: '300MT',
    originalPrice: '1997MT',
    link: '/curso-contrabaixo'
  }];
  return <div className="w-full bg-gradient-to-b from-black to-gray-900 text-white">
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
      
      {/* Contact Section */}
      <div className="container mx-auto py-16 px-6">
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-500/30">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Precisa de Ajuda?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Estamos disponíveis para responder todas as suas dúvidas sobre os cursos.
            </p>
            <a
              href="https://wa.me/258844948189?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20cursos%20de%20música."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              <svg 
                className="h-6 w-6" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Fale Conosco no WhatsApp
            </a>
            <p className="text-gray-400 mt-4 text-sm">
              WhatsApp: +258 84 494 8189
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default Home;