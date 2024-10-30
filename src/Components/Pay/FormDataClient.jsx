import { useForm } from "react-hook-form";
import InputF from "../ui/InputF";
import Grid from "../Grid/grid";
import RadioF from "../ui/RadioF";

const FormDataClient = () => {
  const {
    register,
    // handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  return (
    <form className="card bg-yellow-100 shadow-lg rounded">
      <div className="card-body ">
        <h2 className="card-title text-xl font-bold text-gray-800">
          Ingresá tus datos personales
        </h2>
        <p>
          Igual a como aparece en el DNI o Pasaporte con el que vas a viajar
        </p>

        <Grid container gap={2} className={`mb-3`}>
          <Grid item xs={12} md={6} lg={6}>
            <InputF
              error={errors.name}
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
              error={errors.lastname}
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
              error={errors.birthdate}
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
          <Grid item xs={12}>
            <p>
              ¿Este pasajero tiene alguna discapacidad o condicion que debamos
              tener en cuenta?
            </p>
            <a
              href="https://homers-webpage.vercel.app/"
              className="link link-warning"
            >
              Consulta nuestra wb sobre accesebilidad para esta informacion
            </a>
          </Grid>
        </Grid>
      </div>
      <div className="divider">🛩</div>
      <div className="card-body ">
        <h2 className="card-title text-xl font-bold text-gray-800">
          Documentacion
        </h2>
        <p>Debe ser el mismo documento con el que vas a viajar. </p>
        <div className="flex gap-20">
          <RadioF value="dni" label="DNI" />
          <RadioF value="pasaporte" label="Pasaporte" />
        </div>
        <InputF
          error={errors.dni}
          placeHolder={`Numero`}
          name="dni"
          options={{
            required: {
              value: true,
              message: "Campo requerido",
            },
          }}
          register={register}
        />
      </div>
      <div className="divider">🧦</div>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold text-gray-800">Genero</h2>
        <div className="flex flex-col gap-4 md:flex-row md:gap-10">
          <RadioF value="masculino" label="Masculino" />
          <RadioF value="femenino" label="Femenino" />
          <RadioF value="otro" label="Otro" />
        </div>
      </div>
      <div className="divider">🍕</div>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold text-gray-800">
          Tus datos de contacto
        </h2>
        <p>
          Datos que usaremos para comunicarnos contigo ante cualquier aviso o
          inconveniente
        </p>
        <Grid container gap={2}>
          <Grid item xs={6}>
            <InputF
              error={errors.telefono}
              placeHolder={`Numero de telefono`}
              name="telefono"
              options={{
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              }}
              register={register}
            />
          </Grid>
          <Grid item xs={6}>
            <InputF
              error={errors.email}
              placeHolder={`Email`}
              name="email"
              type={`email`}
              options={{
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              }}
              register={register}
            />
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default FormDataClient;
