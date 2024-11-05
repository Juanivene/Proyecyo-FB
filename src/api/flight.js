const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const getFlightFn = async () => {
  const res = await fetch(`${BACKEND_URL}/flightss`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Ocurrio un error al obtener los vuelos");
  }
  return data;
};

export const getflightSelectedFn = async (id) => {
  const res = await fetch(`${BACKEND_URL}/flights/${id}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(
      "Ocurrio un error al obtener los datos del vuelo selecccionado"
    );
  }
  return data;
};

export const postCustomerFn = async (data) => {
  const res = await fetch(`${BACKEND_URL}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Ocurrio un error al guardar la entrada");
  }
};