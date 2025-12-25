import { Link } from 'react-router-dom';
interface CourseCardProps {
  title: string;
  image: string;
  price: string;
  originalPrice: string;
  link: string;
}
const CourseCard = ({
  title,
  image,
  price,
  originalPrice,
  link
}: CourseCardProps) => {
  // Extract the course name from the title
  const courseName = title.replace('Curso de ', '');
  return <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center mb-4">
          <span className="text-gray-500 line-through mr-2">
            {originalPrice}
          </span>
          <span className="text-2xl font-bold text-yellow-600">{price}</span>
        </div>
        <Link
          to={link}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors shadow-lg"
        >
          Ver o Curso de {courseName}
        </Link>
      </div>
    </div>;
};
export default CourseCard;