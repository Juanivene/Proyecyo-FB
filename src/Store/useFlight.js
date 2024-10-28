import { create } from "zustand";

export const useFlights = create((set) => ({
  flightSelected: {
    id: "FO1234",
    origin: "Tucuman",
    destination: "Buenos Aires",
    price: "80.999",
    duration: "2h 30m",
    hour: ["21:00", "23:30"]
  },
  changeCard: (flightSelected) =>
    set({
      flightSelected: {
        id: flightSelected.id,
        origin: flightSelected.origin,
        destination: flightSelected.destination,
        price: flightSelected.price,
        duration: flightSelected.duration,
        hour: flightSelected.hour
      },
    }),
}));
