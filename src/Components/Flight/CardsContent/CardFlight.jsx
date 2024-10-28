import PropTypes from "prop-types";

const CardFlight = (props) => {
  const { flightsDay } = props;
  return (
    <div className="card w-full bg-base-100 shadow-2xl flex flex-col md:flex-row p-4">
      <div className="flex flex-col justify-between md:w-1/3">
        <div className="flex items-center space-x-4">
          <div className="text-3xl font-bold">{flightsDay.hour[0]}</div>
          <div className="text-gray-500">
            <p>{flightsDay.origin}</p>
            <p className="text-sm">{flightsDay.aitaCode[0]}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-2">
          <div className="text-3xl font-bold">{flightsDay.hour[1]}</div>
          <div className="text-gray-500">
            <p>{flightsDay.destination}</p>
            <p className="text-sm">{flightsDay.aitaCode[1]}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center md:justify-start justify-center md:w-1/3 my-4 ">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500">{flightsDay.duration}</span>
          <span className="text-gray-400">{flightsDay.id}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/128/68/68380.png"
            alt="avión"
            className="h-5 w-5"
          />
        </div>
      </div>

      <button className="btn btn-warning text-lg mt-8 mx-2">
        Tarifa base: ${flightsDay.price}
      </button>
    </div>
  );
};

export default CardFlight;
CardFlight.propTypes = {
  flightsDay: PropTypes.object.isRequired,
};
