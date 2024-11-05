import { useForm } from "react-hook-form";
import Alert from "./Alert";
import { useLoading } from "../../Store/useLoading";

const FormDetailFlight = () => {
  const { setLoading } = useLoading();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const today = new Date().toISOString().split("T")[0];
  const year = today.split("-")[0];
  const month = today.split("-")[1];
  const day = today.split("-")[2];
  const nextYear = (parseInt(year) + 1).toString();
  const oneYearLater = `${nextYear}-${month}-${day}`;
  const dateFlights = `${day - 1}-${month}-${nextYear}`;

  const origin = watch("origin");

  const onSubmit = (data) => {
    const { date, destination, origin } = data;
    setLoading(true);
    setTimeout(() => {
      window.location.href = `http://localhost:5173/flight?origen=${origin}&destino=${destination}&fecha=${date}`;
    }, 3000);
  };

  return (
    <div className="card bg-yellow-200 shadow-lg p-6 rounded-lg  mx-6 my-6">
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
              {...register("origin", {
                required: "Este campo es requerido",
              })}
            >
              <option value="Tucuman">Tucuman</option>
              <option value="Bariloche">Bariloche</option>
              <option value="Mendoza">Mendoza</option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Cordoba">Cordoba</option>
            </select>
            {errors.origin && (
              <div className="mt-2">
                <Alert messege={errors.origin?.message} />
              </div>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Destino</span>
            </label>
            <select
              className="select select-bordered w-full bg-white border-gray-300"
              {...register}
              name="destination"
              {...register("destination", {
                required: "Este campo es requerido",
                validate: (value) =>
                  value !== origin || "El destino no puede ser igual al origen",
              })}
            >
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Bariloche">Bariloche</option>
              <option value="Mendoza">Mendoza</option>
              <option value="Tucuman">Tucuman</option>
              <option value="Cordoba">Cordoba</option>
            </select>
            {errors.destination && (
              <div className="mt-2">
                <Alert messege={errors.destination?.message} />
              </div>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Destino</span>
            </label>
            <input
              type="date"
              className="input input-bordered  w-full bg-white border-gray-300"
              name="date"
              {...register("date", {
                required: "Seleccione una fecha",
                validate: {
                  today: (value) =>
                    value > today ||
                    "No se pueden elegir fechas pasadas ni de este dia",
                  oneYear: (value) =>
                    value <= oneYearLater ||
                    `Tenemos vuelos hasta el ${dateFlights} `,
                },
              })}
            />
            {errors.date && (
              <div className="mt-2">
                <Alert messege={errors.date?.message} />
              </div>
            )}
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
