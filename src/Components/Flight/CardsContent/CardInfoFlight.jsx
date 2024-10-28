// import PropTypes from "prop-types";
import PropTypes from "prop-types";
import { urlsImages } from "../../utilities";

const CardInfoFlight = (props) => {
  const { flightSelected, dateString } = props;

  let url;
  switch (flightSelected.destination) {
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
    default:
      url = urlsImages[0];
  }
  return (
    <section className="w-full md:w-64 lg:w-80 shadow-xl rounded-b-xl">
      <div className="card rounded-none rounded-t-xl ">
        <figure>
          <img src={url} alt="DestinationImage" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Vuelo {flightSelected.id}</h2>
          <p>
            Desde: {flightSelected.origin}
            {flightSelected.id === "" ? "" : "-"}
            {flightSelected.hour[0]}
          </p>
          <p>
            Hasta: {flightSelected.destination}
            {flightSelected.id === "" ? "" : "-"}
            {flightSelected.hour[1]}
          </p>
          <p>Fecha de salida: {dateString}</p>
          <p>Duracion: {flightSelected.duration}</p>
        </div>
      </div>
      <div className="card-body	bg-slate-200 rounded-b-xl">
        <h2 className="card-title">TOTAL:</h2>
        <button className="btn">
          ARS
          <div className="badge badge-warning">${flightSelected.price}</div>
        </button>
      </div>
    </section>
  );
};

export default CardInfoFlight;
CardInfoFlight.propTypes = {
  flightSelected: PropTypes.object.isRequired,
  dateString: PropTypes.string.isRequired,
};
