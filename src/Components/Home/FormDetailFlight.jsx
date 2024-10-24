import { useForm } from "react-hook-form";

const FormDetailFlight = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { date, destination, origin } = data;

    window.location.href = `http://localhost:5173/flight?origen=${origin}&destino=${destination}&fecha=${date}`;
  };

  return (
    <div className="card bg-yellow-200 shadow-lg p-6 rounded-lg my-8 mx-4">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold text-gray-800 mb-4">
          Buscar vuelos
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Origen</span>
            </label>
            <select
              className="select select-bordered w-full bg-white border-gray-300"
              name="origin"
              {...register("origin")}
            >
              <option value="buenosaires">Buenos Aires</option>
              <option value="bariloche">Bariloche</option>
              <option value="mendoza">Mendoza</option>
              <option value="tucuman">Tucuman</option>
              <option value="cordoba">Cordoba</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Destino</span>
            </label>
            <select
              className="select select-bordered w-full bg-white border-gray-300"
              {...register}
              name="destination"
              {...register("destination")}
            >
              <option value="buenosaires">Buenos Aires</option>
              <option value="bariloche">Bariloche</option>
              <option value="mendoza">Mendoza</option>
              <option value="tucuman">Tucuman</option>
              <option value="cordoba">Cordoba</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Destino</span>
            </label>
            <input
              type="date"
              className="input input-bordered  w-full bg-white border-gray-300"
              name="date"
              {...register("date")}
            />
          </div>

          <div className="form-control">
            <div className="mt-8 md:col-span-2">
              <button
                type="submit"
                className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full py-2 rounded-full shadow-md"
              >
                Buscar vuelos
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDetailFlight;
