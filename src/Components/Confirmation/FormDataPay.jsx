import { useForm } from "react-hook-form";
import InputF from "../ui/InputF";
import PropTypes from "prop-types";
import { useEffect } from "react";

const FormDataPay = (props) => {
  let { isClose } = props;

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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto m-5">
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
          value="juanito"
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
};
