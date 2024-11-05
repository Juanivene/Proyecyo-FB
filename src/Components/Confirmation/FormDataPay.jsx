import { useForm } from "react-hook-form";
import InputF from "../ui/InputF";
import PropTypes from "prop-types";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCustomerFn } from "../../api/flight";
import { toast } from "sonner";
import { useLoading } from "../../Store/useLoading";

const FormDataPay = (props) => {
  const { isClose, isSubmit, setIsSubmit, customerSelected } = props;
  const { setLoading } = useLoading();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isClose) {
      reset({
        name: "",
        mainNumber: "",
        expirationDate: "",
        securityCode: "",
      });
    }
  }, [isClose, reset]);

  const queryClient = useQueryClient();

  const { mutate: postCustomer } = useMutation({
    mutationFn: postCustomerFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Datos guardados con éxito");

      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },
    onError: (e) => {
      toast.dismiss();
      toast.warning(e.message);
    },
  });

  const generateIdBooking = () => {
    // Define un rango para el número de reserva
    const min = 100000; // Mínimo 6 dígitos
    const max = 999999; // Máximo 6 dígitos
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const idBooking = generateIdBooking();

  const onSubmit = () => {
    setIsSubmit(true);
    Swal.fire({
      title: "Confirmar Pago de Reserva",
      text: "¿Estás seguro de que deseas confirmar el pago de tu reserva de vuelo? Por favor, revisa los detalles antes de continuar.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, confirmar",
      cancelButtonText: "Revisar detalles",
    }).then((result) => {
      if (result.isConfirmed) {
        // Activar el loading aquí
        setLoading(true); // Muestra el Loader

        const booking = { ...customerSelected, idBooking: `${idBooking}` };
        postCustomer(booking);

        // Después de un pequeño retraso, muestra el mensaje de éxito
        setTimeout(() => {
          Swal.fire({
            title: "¡Felicidades!",
            html: `Tu reserva se ha generado con éxito<br/>Tu código de reserva es: <strong>${booking.idBooking}</strong>`,
            icon: "success",
            confirmButtonText: "Ir a mi reserva",
            confirmButtonColor: "#FFD700",
          }).then((result) => {
            if (result.isConfirmed) {
              // Redirigir después de 5 segundos
              setLoading(true);
              setTimeout(() => {
                window.location.href = `http://localhost:5173/reservation?&customer=${customerSelected.id}`;
              }, 1000); // Cambié a 5000 para 5 segundos
            }
          });
          setLoading(false); // Detener el loader después de mostrar el mensaje
        }, 4000); // Muestra el loader por 2 segundos antes del mensaje de éxito
      }
      setIsSubmit(false);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={isSubmit ? `hidden` : `max-w-xl mx-auto m-5`}
    >
      <h2 className="text-xl font-bold mb-4">
        Ingrese los datos de la tarjeta
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Nombre en la tarjeta
        </label>
        <InputF
          error={errors.name}
          placeHolder={"Pepe"}
          name="name"
          register={register}
          maxL={30}
          options={{
            required: {
              value: true,
              message: "Campo requerido",
            },
            minLength: {
              value: 5,
              message: "Debe contener al menos 3 caracteres",
            },
            maxLength: {
              value: 30,
              message: "Debe contener 30 caracteres como maximo",
            },
            pattern: {
              value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+ [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/,
              message: "Ingrese un nombre valido",
            },
          }}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Número de tarjeta
        </label>
        <InputF
          error={errors.mainNumber}
          placeHolder={"1234 1234 1234 1234"}
          name="mainNumber"
          register={register}
          maxL={16}
          options={{
            required: {
              value: true,
              message: "Campo requerido",
            },
            pattern: {
              value: /^\d{16}$/,
              message: "Deben ser numeros (16)",
            },
          }}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Fecha de vencimiento
        </label>
        <InputF
          type={`month`}
          error={errors.expirationDate}
          name="expirationDate"
          register={register}
          options={{
            required: {
              value: true,
              message: "Campo requerido",
            },
            pattern: {
              value: /^(202[5-9]|20[3-9]\d)-((0[1-9])|(1[0-2]))$/,
              message: "Tu tarjeta esta vencida",
            },
          }}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">CVV</label>
        <InputF
          error={errors.securityCode}
          name="securityCode"
          register={register}
          maxL={3}
          options={{
            required: {
              value: true,
              message: "Campo requerido",
            },
            pattern: {
              value: /^\d{3}$/,
              message: "Deben ser numeros (3)",
            },
          }}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Confirmar pago
      </button>
    </form>
  );
};

export default FormDataPay;
FormDataPay.propTypes = {
  isClose: PropTypes.bool.isRequired,
  isSubmit: PropTypes.bool.isRequired,
  setIsSubmit: PropTypes.func.isRequired,
  customerSelected: PropTypes.object.isRequired,
};
