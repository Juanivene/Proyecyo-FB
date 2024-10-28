// import PropTypes from "prop-types";
import PropTypes from "prop-types";
import { urlsImages } from "../../utilities";

const CardInfoFlight = (props) => {
  const { flighstDay, dateString } = props;
  let url;
  console.log(flighstDay);
  switch (flighstDay.destination) {
    case "Buenos Aires":
      url = urlsImages[0];
      break;
    case "Mendoza":
      url = urlsImages[1];
      break;
    case "Bariloche":
      url = urlsImages[2];
      break;
    case "Tucuman":
      url = urlsImages[3];
      break;
    case "Cordoba":
      url = urlsImages[4];
      break;
  }
  return (
    <section className=" w-80 shadow-xl rounded-b-xl">
      <div className="card rounded-none rounded-t-xl ">
        <figure>
          <img src={url} alt="DestinationImage" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Vuelo {flighstDay.id}</h2>
          <p>Desde: {flighstDay.origin}</p>
          <p>Hasta: {flighstDay.destination}</p>
          <p>Fecha de salida: {dateString}</p>
          <p>{flighstDay.duration}</p>
        </div>
      </div>
      <div className="card-body	bg-slate-200 rounded-b-xl">
        <h2 className="card-title">TOTAL:</h2>
        <button className="btn">
          ARS
          <div className="badge badge-warning">${flighstDay.price}</div>
        </button>
      </div>
    </section>
  );
};

export default CardInfoFlight;
CardInfoFlight.propTypes = {
  flighstDay: PropTypes.object.isRequired,
  dateString: PropTypes.string.isRequired,
};
