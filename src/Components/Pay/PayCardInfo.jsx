import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { getflightSelectedFn } from "../../api/flight";
import PayCardError from "./PayCardError";

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
    return <div className="skeleton h-80 w-full sticky top-20"></div>;
  }
  if (id===null||isError) {
    return <PayCardError />;
  }

  const sumPrices = (priceStr, tasaStr) => {
    const price = parseFloat(priceStr.replace(/[$.]/g, "").replace(".", ""));
    const tasa = parseFloat(tasaStr.replace(/[$.]/g, "").replace(".", ""));
    const total = price + tasa;
    return `$${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  };
  const totalPrice = sumPrices(flightSelected.price, flightSelected.tasa);

  return (
    <div className=" bg-white border border-gray-200 shadow-lg rounded-lg sticky top-20 ">
      <h3 className="bg-gray-800 text-white text-lg font-semibold px-4 py-2">
        Tu vuelo
      </h3>
      <div className="p-4 space-y-4">
        <div>
          <span className="flex text-lg font-semibold gap-2 text-gray-700">
            <img
              className="w-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lP1xnXMPSt7QWLGJ2KcnYXP5-0tx12TpUg&s"
              alt="planeIcon"
            />
            {flightSelected.origin} a {flightSelected.destination}
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
            <span>
              <img
                className="w-8"
                src="https://png.pngtree.com/png-clipart/20240101/original/pngtree-passenger-icon-passenger-photo-png-image_13989312.png"
                alt="passengerIcon"
              />
            </span>
            <p>1 pasajero</p>
          </div>
          <p className="text-lg font-semibold text-gray-800">
            {flightSelected.price}
          </p>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <span>
              <img
                className="w-8"
                src="https://icones.pro/wp-content/uploads/2021/03/icone-de-l-argent-symbole-png-jaune.png"
                alt="billIcon"
              />
            </span>
            <p>Tasas e impuestos</p>
          </div>
          <p className="text-lg font-semibold text-gray-800">
            {flightSelected.tasa}
          </p>
        </div>
        <div className="flex justify-between items-center pt-2">
          <p className="text-lg font-bold text-gray-700">Total</p>
          <p className="text-2xl font-bold text-gray-800">
            <span className="text-xs">ARS</span>
            {totalPrice}
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
