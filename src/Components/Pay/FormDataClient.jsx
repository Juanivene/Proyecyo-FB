import { Input } from "postcss";
import { useForm } from "react-hook-form";
import InputF from "../ui/InputF";
import Grid from "../Grid/grid";

const FormDataClient = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <form >
      <div className="card bg-yellow-100 shadow-lg rounded">
        <div className="card-body ">
          <h2 className="card-title text-xl font-bold text-gray-800">
            Ingresá tus datos personales
          </h2>
          <p>
            Igual a como aparece en el DNI o Pasaporte con el que vas a viajar
          </p>

          <Grid container gap={2}  className={`mb-3`}>
            <Grid item xs={12} md={6} lg={6}>
              <InputF
                error={errors.username}
                placeHolder={`Nombre`}
                name="name"
                options={{
                  required: {
                    value: true,
                    message: "Campo requerido",
                  },
                  minLength: {
                    value: 3,
                    message: "Debe contener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "Debe contener 20 caracteres como maximo",
                  },
                }}
                register={register}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <InputF
                error={errors.username}
                placeHolder={`Apellido`}
                name="lastname"
                options={{
                  required: {
                    value: true,
                    message: "Campo requerido",
                  },
                  minLength: {
                    value: 3,
                    message: "Debe contener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "Debe contener 20 caracteres como maximo",
                  },
                }}
                register={register}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <InputF
                error={errors.username}
                placeHolder={`Fecha de nacimiento`}
                name="birthdate"
                type={`date`}
                options={{
                  required: {
                    value: true,
                    message: "Campo requerido",
                  },
                }}
                register={register}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <select
                className="select select-bordered w-full"
                defaultValue="Nacionalidad"
              >
                <option value="" disabled>
                  Nacionalidad
                </option>
                <option>Argentina</option>
                <option>Brasil</option>
                <option>Chile</option>
                <option>Uruguay</option>
                <option>Bolivia</option>
              </select>
            </Grid>
          </Grid>
        </div>
      </div>
    </form>
  );
};

export default FormDataClient;
