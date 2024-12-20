import { useForm } from "react-hook-form";
import InputF from "../ui/InputF";
import { useQuery } from "@tanstack/react-query";
import { getcustomersFn } from "../../api/customer";
import Swal from "sweetalert2";

const FormSearchReservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: bookings } = useQuery({
    queryKey: ["customers"],
    queryFn: getcustomersFn,
  });

  const onSubmit = (data) => {
    const { idBooking, lastName } = data;

    const booking = bookings.find((e) => {
      return e.idBooking === idBooking && e.lastname === lastName;
    });

    if (!booking) {
      Swal.fire({
        icon: "error",
        title: "Error",
        html: "No encontramos coincidencias con tus credenciales<br/> intentalo de nuevo",
        confirmButtonColor: "#FFD700",
        confirmButtonText: "Intentar nuevamente",
        footer:
          '<strong><a href="https://api.whatsapp.com/send/?phone=543813538206&text=Hola+me+gustar%C3%ADa+obtener+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0">Necesito ayuda</a></strong>',
      });
    }

    window.location.href = `http://localhost:5173/reservation?&customer=${booking.id}`;
  };

  return (
    <div className="flex justify-center items-center py-44 md:py-28 px-5 bg-gray-100">
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
              name="idBooking"
              error={errors.idBooking}
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
                validate: {
                  isLowerCase: (value) =>
                    value === value.toLowerCase() ||
                    "El apellido debe estar en minúsculas",
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
