import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { getflightSelectedFn } from "../../api/flight";

const PayCardInfo = (props) => {
  const { id } = props;

  const {
    data: flightSelected,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`flights-${id}`],
    queryFn: () => getflightSelectedFn(id),
  });
  if (isLoading) {
    return (
      <div className="max-w-sm bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden sticky top-20 ">
        <div className="skeleton h-32 w-32"></div>
      </div>
    );
  }
  if (isError) {
    return null;
  }
  const total = flightSelected.price + flightSelected.tasa;
  function formatCurrency(value) {
    if (isNaN(value)) return value;
    return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  }
  const price = formatCurrency(flightSelected.price);
  const tasa = formatCurrency(flightSelected.tasa);
  const totalFormated = formatCurrency(total);

  return (
    <div className="max-w-sm bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden sticky top-20 ">
      <h3 className="bg-gray-800 text-white text-lg font-semibold px-4 py-2">
        Tu vuelo
      </h3>
      <div className="p-4 space-y-4">
        <div>
          <span className="text-lg font-semibold text-gray-700">
            ✈️ {flightSelected.origin} a {flightSelected.destination}
          </span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <div>
            <p>Salida:</p>
            <p className="font-semibold">{flightSelected.date}</p>
          </div>
          <div>
            <p>
              {flightSelected.hour[0]}
              {` ${flightSelected.aitaCode[0]}`}
            </p>
            <p>
              {flightSelected.hour[1]}
              {` ${flightSelected.aitaCode[1]}`}
            </p>
          </div>
          <div>
            <p>Vuelo: {flightSelected.id}</p>
            <p>Duración: {flightSelected.duration}</p>
          </div>
        </div>
        <div className="flex justify-between items-center py-2 border-t border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <span>👤</span>
            <p>1 pasajero</p>
          </div>
          <p className="text-lg font-semibold text-gray-800">{price}</p>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <span>⚖️</span>
            <p>Tasas e impuestos</p>
          </div>
          <p className="text-lg font-semibold text-gray-800">{tasa}</p>
        </div>
        <div className="flex justify-between items-center pt-2">
          <p className="text-lg font-bold text-gray-700">Total</p>
          <p className="text-2xl font-bold text-gray-800">
            <span className="text-xs">ARS</span>
            {totalFormated}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PayCardInfo;
PayCardInfo.propTypes = {
  id: PropTypes.string.isRequired,
};
