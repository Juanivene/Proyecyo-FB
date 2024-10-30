const PayCardError = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden sticky top-20">
      <h3 className="bg-gray-800 text-white text-lg font-semibold px-4 py-2">
        Error al cargar el vuelo
      </h3>
      <div className="p-4 text-center">
        <p className="text-gray-600">
          No se pudieron cargar los atributos del vuelo. Por favor, intenta
          nuevamente más tarde.
        </p>
        <div className="mt-4">
          <span className="text-6xl text-gray-400">⚠️</span>
        </div>
      </div>
    </div>
  );
};

export default PayCardError;
