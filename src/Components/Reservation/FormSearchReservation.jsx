import { useForm } from "react-hook-form";
import InputF from "../ui/InputF";
import { useQuery } from "@tanstack/react-query";
import { getcustomersFn } from "../../api/customer";

const FormSearchReservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  


  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center py-32 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Buscar Reserva
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="block text-gray-600 font-medium mb-2 "
              htmlFor="reservationNumber"
            >
              Número de Reserva
            </label>
            <InputF
              register={register}
              name="idReservation"
              error={errors.idReservation}
              maxL={6}
              placeHolder="123456"
              options={{
                required: {
                  value: true,
                  message: "Campo requerido",
                },

                pattern: {
                  value: /^\d{6}$/,
                  message: "Deben ser numeros (6)",
                },
              }}
            />
          </div>

          <div>
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="lastName"
            >
              Apellido
            </label>
            <InputF
              register={register}
              name="lastName"
              error={errors.lastName}
              maxL={30}
              placeHolder="Pérez"
              options={{
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                minLength: {
                  value: 2,
                  message: "El apellido debe tener al menos 2 letras",
                },
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/,
                  message: "Ingresa un apellido valido",
                },
              }}
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-md transition-colors"
            >
              Buscar Reserva
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSearchReservation;
