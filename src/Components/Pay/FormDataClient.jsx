import { useForm } from "react-hook-form";
import InputF from "../ui/InputF";
import Grid from "../Grid/grid";
import { Link } from "react-router-dom";
import { Customer } from "./Customer";
import PropTypes from "prop-types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getflightSelectedFn, postCustomerFn } from "../../api/flight";
import { toast } from "sonner";
import Alert from "../ui/Alert";
import { useEffect, useState } from "react";

const FormDataClient = (props) => {
  const { id } = props;

  const urlParams = new URLSearchParams(window.location.search);
  const idCustomerSelected = urlParams.get("customer");

  const [customersInLs, setCustomerInLs] = useState(
    JSON.parse(localStorage.getItem("customers")) || []
  );

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customersInLs));
  }, [customersInLs]);

  const customerSelected = customersInLs.find((customer) => {
    return customer.id === idCustomerSelected;
  });

  const { data: flightSelected } = useQuery({
    queryKey: [`flights-${id}`],
    queryFn: () => getflightSelectedFn(id),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (customerSelected) {
      reset({
        name: customerSelected.name,
        lastname: customerSelected.lastname,
        birthdate: customerSelected.date,
        nationality: customerSelected.nationality,
        dni: customerSelected.dni,
        gender: customerSelected.gender,
        phonenumber: customerSelected.phonenumber,
        email: customerSelected.email,
      });
    }
  }, []);

  const onsubmit = (data) => {
    const {
      name,
      lastname,
      birthdate,
      dni,
      email,
      gender,
      nationality,
      phonenumber,
    } = data;
    const customer = new Customer(
      name,
      lastname,
      birthdate,
      dni,
      email,
      gender,
      nationality,
      phonenumber,
      flightSelected
    );

    const updatedCustomers = [...customersInLs];
    if (customerSelected) {
      const customerIndex = updatedCustomers.findIndex(
        (e) => e.id === customerSelected.id
      );
      updatedCustomers.splice(customerIndex, 1, customer);
    } else {
      updatedCustomers.push(customer);
    }

    setCustomerInLs(updatedCustomers);
    window.location.href = `http://localhost:5173/confirmation?&customer=${customer.id}`;
  };
  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="card bg-yellow-100 shadow-lg rounded"
    >
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
              register={register}
              maxL={30}
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
                  message: "Debe contener 30 caracteres como maximo",
                },
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Ingrese un nombre valido",
                },
              }}
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
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Ingrese un nombre valido",
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
                  message: "Ingresa una fecha",
                },
                pattern: {
                  value:
                    /^(19[0-9]{2}|200[0-5]|2006)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
                  message: "Debes ser mayor de 18 años para continuar",
                },
              }}
              register={register}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <select
              name="nationality"
              className="select select-bordered w-full"
              defaultValue="Nacionalidad"
              {...register("nationality", {
                required: {
                  value: true,
                  message: "Selecciona una nacionalidad",
                },
              })}
            >
              <option value="">Nacionalidad</option>
              <option value="argentina">Argentina</option>
              <option value="brasil">Brasil</option>
              <option value="chile">Chile</option>
              <option value="uruguay">Uruguay</option>
              <option value="bolivia">Bolivia</option>
            </select>
            {errors.nationality ? (
              <Alert error={errors.nationality.message} />
            ) : (
              ""
            )}
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
              Consulta nuestra web sobre accesebilidad para esta informacion
            </a>
          </Grid>
        </Grid>
      </div>
      <div className="divider">🛩</div>
      <div className="card-body ">
        <h2 className="card-title text-xl font-bold text-gray-800">
          Documentacion
        </h2>
        <p>
          Debe ser el mismo documento con el que vas a viajar.Ingresa pasaporte
          o dni
        </p>
        <InputF
          error={errors.dni}
          placeHolder={`Numero`}
          name="dni"
          maxL={8}
          options={{
            required: {
              value: true,
              message: "Campo requerido",
            },
            pattern: {
              value: /^\d{8}$/,
              message: "Deben ser numeros (8)",
            },
          }}
          register={register}
        />
      </div>
      <div className="divider">🧦</div>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold text-gray-800">Genero</h2>
        <select
          name="gender"
          className="select select-bordered w-full"
          defaultValue="Genero"
          {...register("gender", {
            required: " Selecciona un genero",
          })}
        >
          <option value="">Genero</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="other">Otro</option>
        </select>
        {errors.gender ? <Alert error={errors.gender.message} /> : ""}
        <p>¿Por qué queremos saber esto?</p>
        <a
          href="https://homers-webpage.vercel.app/"
          className="link link-warning"
        >
          Consulta nuestra web sobre accesebilidad para esta informacion
        </a>
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
              error={errors.phonenumber}
              placeHolder={`Numero de telefono`}
              name="phonenumber"
              maxL={10}
              options={{
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                pattern: {
                  value: /^\d{10}$/,
                  message: "Debe contenero numeros (10) ",
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
              register={register}
              options={{
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                pattern: {
                  value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                  message: "Ingrese un email valido",
                },
              }}
            />
          </Grid>
        </Grid>
        <div className="divider">🍔</div>
        <div className="flex justify-center md:justify-between px-3 pt-4">
          <Link to="/" className="link link-warning hidden md:block">
            Cambiar fecha
          </Link>
          <button type="submit" className="btn btn-active btn-wide ">
            Continuar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormDataClient;
FormDataClient.propTypes = {
  id: PropTypes.string.isRequired,
};
