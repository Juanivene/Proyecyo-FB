import PropTypes from "prop-types";

const HeaderFlight = (props) => {
  const { origin, destination, date } = props;
  return (
    <div className="bg-base-200 shadow-md p-4 rounded-lg flex flex-col items-center">
      <img
        src="https://cdn-icons-png.flaticon.com/128/45/45896.png"
        alt="planeIcon"
        className="w-10"
      />
      <div className="flex items-center space-x-4 mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Elije tu vuelo</h1>
      </div>
      <div className="text-lg font-bold text-gray-700 flex items-center space-x-2">
        <span className="text-xl">{origin}</span>
        <span className="text-blue-500 text-2xl">→</span>
        <span className="text-xl">{destination}</span>
      </div>
    </div>
  );
};

export default HeaderFlight;
HeaderFlight.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
