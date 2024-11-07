import DestinationCard from "../../Destinations/DestinationCard";
import destinations from "../../Destinations/destinations";
import CardHome from "./CardHome";
import { infoCardsHome, infoCardsLowCost } from "./InfoCardsHome";

const ContentCardsHome = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-5">
        {infoCardsHome.map((e, i) => {
          return (
            <CardHome
              key={i}
              title={e.title}
              description={e.description}
              image={e.image}
            />
          );
        })}
      </div>
      <div className="text-center my-5">
        <h2 className=" text-2xl font-bold text-gray-500 ">Volá a tu medida</h2>
        <p className="font-bold">
          ¡Elegí la opción que más te guste y preparate para despegar!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-10">
        {destinations.slice(3).map((e, i) => {
          return (
            <DestinationCard
              key={i}
              city={e.city}
              image={e.image}
              price={e.price}
            />
          );
        })}
      </div>

      <h2 className="card-title text-2xl font-bold text-gray-500 mb-4 flex justify-center my-10">
        ¿Cómo hacemos para darte los precios más bajos?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-5">
        {infoCardsLowCost.map((e, i) => {
          return (
            <CardHome
              key={i}
              title={e.title}
              description={e.description}
              image={e.image}
            />
          );
        })}
      </div>
      <div className="text-center my-10 mx-96">
        <button className="btn btn-block">
          ¿Quieres saber mas sobre vuelos low cost?
        </button>
      </div>
    </div>
  );
};

export default ContentCardsHome;
