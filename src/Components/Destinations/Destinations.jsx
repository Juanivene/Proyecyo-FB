import { Link } from "react-router-dom";
import DestinationCard from "./DestinationCard";
import destinations from "./destinations.js";

const Destinations = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Nuestros Destinos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-yellow-400">
            Descubrí los mejores destinos de Argentina con nuestras ofertas
            increíbles
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.city}
              city={destination.city}
              image={destination.image}
              price={destination.price}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="rounded-full bg-yellow-400 px-8 py-3 font-semibold text-gray-900 transition-all hover:bg-yellow-500 hover:shadow-lg"
          >
            ¡Reservar vuelo!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
