import { create } from "zustand";
let urlParams = new URLSearchParams(window.location.search);
let originParam = urlParams.get("origen");
let destinationParam = urlParams.get("destino");


export const useFlights = create((set) => ({
  flightSelected: {
    id: "",
    origin: originParam,
    destination: destinationParam,
    price: "",
    duration: "",
    hour: "",
  },
  changeCard: (flightSelected) =>
    set({
      flightSelected: {
        id: flightSelected.id,
        origin: flightSelected.origin,
        destination: flightSelected.destination,
        price: flightSelected.price,
        duration: flightSelected.duration,
        hour: flightSelected.hour,
      },
    }),
}));
