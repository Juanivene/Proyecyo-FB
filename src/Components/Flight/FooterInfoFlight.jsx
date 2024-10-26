const FooterInfoFlight = () => {
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
            Tu vuelo de ida sale de{" "}
            <span className="font-bold">
              Aeroparque Internacional Jorge Newbery
            </span>
            . Podés consultar cómo llegar{" "}
            <a href="#" className="text-yellow-500">
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
             {" "} acá
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterInfoFlight;
