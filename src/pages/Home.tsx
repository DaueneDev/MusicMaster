import CourseCard from '../components/CourseCard';
const Home = () => {
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
      {/* Hero Section */}
      <div className="w-full bg-cover bg-center py-24 px-6" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      backgroundPosition: 'center'
    }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Aprenda a{' '}
            <span className="text-yellow-400">Tocar e a Cantar</span>
            <span> De Forma Profissional</span>
            
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Cursos online completos de guitarra elétrica, guitarra acústica, piano e canto. Com mais de 450 videoaulas, apostilas e exercícios práticos. Para alunos iniciantes e avançados
          </p>
          <a href="#courses" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg">
            Escolher Curso
          </a>
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