import PropTypes from "prop-types";

const CardFlight = (props) => {
  const { origin, destination, date } = props;
  return (
    <div className="card w-full bg-base-100 shadow-2xl flex flex-col md:flex-row p-4">
      <div className="flex flex-col justify-between md:w-1/3">
        <div className="flex items-center space-x-4">
          <div className="text-3xl font-bold">08:30</div>
          <div className="text-gray-500">
            <p>Tucumán</p>
            <p className="text-sm">TUC</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-2">
          <div className="text-3xl font-bold">10:25</div>
          <div className="text-gray-500">
            <p>Buenos Aires</p>
            <p className="text-sm">AEP</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center md:w-1/3 my-4 md:my-0">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500">1hr 55mins</span>
          <span className="text-gray-400">FO5221</span>
          <img
            src="https://cdn-icons-png.flaticon.com/128/68/68380.png"
            alt="avión"
            className="h-5 w-5"
          />
        </div>
      </div>

      <button className="btn btn-warning text-lg mt-8 mx-2">
        Tarifa base: $60.531
      </button>
    </div>
  );
};

export default CardFlight;
CardFlight.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
