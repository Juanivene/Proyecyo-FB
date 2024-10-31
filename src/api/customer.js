const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getCustomerSelectedFn = async (id) => {
  const res = await fetch(`${BACKEND_URL}/customers/${id}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Ocurrio un error al obtener los datos");
  }
  return data;
};
