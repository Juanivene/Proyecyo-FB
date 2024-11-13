import { Plane } from "lucide-react";
import PropTypes from "prop-types";
const DestinationCard = (props) => {
  const { city, image, price } = props;
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-3 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`${city} destination`}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
      <div className="absolute bottom-0 w-full p-4 text-white">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-2xl font-bold">{city}</h3>
          <Plane className="h-6 w-6 -rotate-45" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Desde</span>
          <span className="text-xl font-bold">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
DestinationCard.propTypes = {
  city: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
