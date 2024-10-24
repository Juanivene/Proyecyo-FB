const FormDestination = () => {
  return (
    <div className="card bg-yellow-200 shadow-lg p-6 rounded-lg mt-8 mx-4">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold text-gray-800 mb-4">
          Buscar vuelos
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Origen</span>
            </label>
            <select className="select select-bordered w-full bg-white border-gray-300">
              <option>Buenos Aires</option>
              <option>Bariloche</option>
              <option>Mendoza</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Destino</span>
            </label>
            <select className="select select-bordered w-full bg-white border-gray-300">
              <option>Buenos Aires</option>
              <option>Bariloche</option>
              <option>Mendoza</option>
            </select>
          </div>

          <div className="form-control mt-4 md:col-span-2">
            <button className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full py-2 rounded-full shadow-md">
              Buscar vuelos
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDestination;
