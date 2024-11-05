import { Link } from "react-router-dom";

const FeaturedBox = () => {
  return (
    <div className="bg-yellow-400 rounded-2xl p-8 mb-12 shadow-xl">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¡Viajá con la mejor tarifa garantizada!
          </h2>
          <p className="text-gray-800 text-lg">
            Reservá directamente en nuestra web oficial y obtené los mejores
            precios sin intermediarios.
          </p>
        </div>
        <Link
          to="/"
          className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
        >
          Reservar Ahora
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBox;
