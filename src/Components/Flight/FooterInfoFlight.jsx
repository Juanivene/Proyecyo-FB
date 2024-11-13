import PropTypes from "prop-types";

const FooterInfoFlight = (props) => {
  const { origin } = props;
  let airport;
  let direction;
  switch (origin) {
    case "Tucuman":
      airport = "Aropuerto internacional Benjamin Matienzo";
      direction =
        "https://www.google.com.ar/maps/place/Aeroparque+Internacional+Jorge+Newbery/@-34.5574099,-58.418067,16z/data=!3m1!4b1!4m6!3m5!1s0x95bcb5a7f531c7b5:0xfdd992892f9ccadb!8m2!3d-34.5590184!4d-58.4156511!16zL20vMDFfdDM3?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D";
      break;
    case "Buenos Aires":
      airport = "Aeroparque Internacional Jorge Newbery";
      direction =
        "https://www.google.com.ar/maps/place/Aeroparque+Internacional+Jorge+Newbery/@-34.5574099,-58.418067,16z/data=!3m1!4b1!4m6!3m5!1s0x95bcb5a7f531c7b5:0xfdd992892f9ccadb!8m2!3d-34.5590184!4d-58.4156511!16zL20vMDFfdDM3?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D";
      break;
    case "Mendoza":
      airport = "Aeropuerto Internacional El Plumerillo";
      direction =
        "https://www.google.com.ar/maps/place/Aeropuerto+Internacional+El+Plumerillo+-+Mendoza/@-32.8277859,-68.8009486,17z/data=!4m6!3m5!1s0x967e0f58dbc24485:0x7b937e57ec3d9d36!8m2!3d-32.8277363!4d-68.798438!16s%2Fm%2F0263g42?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D";
      break;
    case "Cordoba":
      airport =
        "Aeropuerto Internacional Ingeniero Aeronáutico Ambrosio Taravella";
      direction =
        "https://www.google.com.ar/maps/place/Aeropuerto+Internacional+Ingeniero+Aeron%C3%A1utico+Ambrosio+Taravella/@-31.3155106,-64.2162345,17z/data=!3m1!4b1!4m6!3m5!1s0x94329bc44e912975:0xb5bf3b2c8e7c30f!8m2!3d-31.3155152!4d-64.2136596!16zL20vMDJzam15?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D";
      break;
    case "Bariloche":
      airport = "Aeropuerto Internacional Teniente Luis Candelaria";
      direction =
        "https://www.google.com.ar/maps/place/Aeropuerto+Internacional+Teniente+Luis+Candelaria/@-41.1459614,-71.1641523,17z/data=!3m1!4b1!4m6!3m5!1s0x961a8871188c7457:0x7ce310357b116299!8m2!3d-41.1459655!4d-71.1615774!16s%2Fm%2F03whn9r?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D";
      break;
  }
  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-lg font-bold mb-2">
        Información importante para tu viaje
      </h2>
      <div className="border-t-2 border-yellow-500 mt-2 mb-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-start space-x-3">
          <div className="text-3xl text-gray-600">🕒</div>
          <p className="text-gray-700">
            Tenés que estar en el aeropuerto{" "}
            <span className="font-bold">dos horas</span> antes de la salida del
            vuelo si es nacional o <span className="font-bold">tres horas</span>{" "}
            antes si tu vuelo es internacional.
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <div className="text-3xl text-gray-600">📍</div>
          <p className="text-gray-700">
            Tu vuelo de ida sale de <span className="font-bold">{airport}</span>
            . Podés consultar cómo llegar{" "}
            <a href={direction} className="text-yellow-500">
              acá
            </a>
            .
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <div className="text-3xl text-gray-600">🧳</div>
          <p className="text-gray-700">
            No te olvides de chequear los requisitos que solicita tu destino
            ingresando
            <a href="/info" className="text-yellow-500">
              {" "}
              acá
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterInfoFlight;
FooterInfoFlight.propTypes = {
  origin: PropTypes.string.isRequired,
};
