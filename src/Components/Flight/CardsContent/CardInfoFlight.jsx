import PropTypes from "prop-types";
import { urlsImages } from "../../utilities";

const CardInfoFlight = (props) => {
  const { origin, destination, date } = props;
  let url;

  switch (destination) {
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
          <h2 className="card-title">Vuelo #12345</h2>
          <p>Desde: Tucumán</p>
          <p>Hasta: Buenos Aires</p>
          <p>Fecha de salida: 23 de octubre, 2024</p>
          <p>Duración: 2h 30m</p>
        </div>
      </div>
      <div className="card-body	bg-slate-200 rounded-b-xl">
        <h2 className="card-title">TOTAL:</h2>
        <button className="btn">
          ARS
          <div className="badge badge-warning">$55.100</div>
        </button>
      </div>
    </section>
  );
};

export default CardInfoFlight;
CardInfoFlight.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
