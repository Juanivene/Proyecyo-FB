const NewError = () => {
  return (
    <div className="flex items-center justify-center my-48 ">
      <div className="text-center p-6 rounded-lg bg-white shadow-xl max-w-md">
        <h1 className="text-2xl font-semibold text-red-500 mb-4">Error</h1>
        <p className="text-gray-700 mb-6">
          {
            "Ocurrió un error al cargar los datos. Por favor, intenta nuevamente."}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="btn btn-error btn-wide"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
};
export default NewError;
