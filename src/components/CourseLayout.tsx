import React from 'react';
import { Link } from 'react-router-dom';
interface CourseLayoutProps {
  children: React.ReactNode;
}
export function CourseLayout({
  children
}: CourseLayoutProps) {
  return <div className="min-h-screen bg-white">
      <header className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Cursos de Música
            </Link>
            <nav className="flex space-x-4">
              <Link to="/guitarra-eletrica" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Guitarra Elétrica
              </Link>
              <Link to="/piano" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Piano
              </Link>
              <Link to="/canto" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Canto e Voz
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-800 py-8 text-center text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Cursos de Música. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>;
}