const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center p-24 pb-44 bg-gray-100 text-center ">
      <img
        src="https://cdn-icons-png.flaticon.com/128/595/595067.png"
        alt="Error 404"
        className="w-32 mb-6"
      />
      <h1 className="text-2xl font-semibold text-yellow-500 mb-4">
        ¡Oops! Página no encontrada
      </h1>
      <p className="text-gray-600 mb-6 max-w-lg">
        No hemos podido encontrar la información que estás buscando. Intenta de
        nuevo mas tarde
      </p>
      <button
        onClick={() => window.history.back()}
        className="btn bg-yellow-500 text-white hover:bg-yellow-400 px-6 py-3 rounded-lg shadow-md mb-20 sm:mb-0"
      >
        volver atras
      </button>
    </div>
  );
};

export default Error404;
