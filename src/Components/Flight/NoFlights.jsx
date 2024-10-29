const NoFlights = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 text-center p-6">
      <img
        src="https://cdn-icons-png.flaticon.com/128/595/595067.png"
        alt="Flybondi Logo"
        className="w-32 mb-6"
      />
      <h1 className="text-2xl font-semibold text-yellow-500 mb-4">
        ¡Ups! No encontramos vuelos
      </h1>
      <p className="text-gray-600 mb-6 max-w-lg">
        No tenemos vuelos disponibles que cumplan con los requerimientos de tu
        búsqueda. Intenta cambiar las fechas o destinos y vuelve a intentarlo.
      </p>
      <button
        onClick={() => window.history.back()}
        className="btn bg-yellow-500 text-white hover:bg-yellow-400 px-6 py-3 rounded-lg shadow-md"
      >
        Volver a buscar
      </button>
    </div>
  );
};

export default NoFlights;
