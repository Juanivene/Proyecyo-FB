import { createBrowserRouter } from "react-router-dom";
import RootView from "../Views/Routing/RootView";
import HomeView from "../Views/HomeView";
import FlightView from "../Views/FlightView";
import ReservationView from "../Views/ReservationView";
import InfoView from "../Views/InfoView";
import DestinationsView from "../Views/DestinationsView";
import PayView from "../Views/PayView";
import ConfirmationView from "../Views/ConfirmationView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "",
        element: <HomeView />,
      },
      {
        path: "/reservation",
        element: <ReservationView />,
      },
      {
        path: "/info",
        element: <InfoView />,
      },
      {
        path: "/destinations",
        element: <DestinationsView />,
      },
      {
        path: "/flight",
        element: <FlightView />,
      },
      {
        path: "/pay",
        element: <PayView />,
      },
      {
        path: "confirmation",
        element: <ConfirmationView />,
      },
    ],
  },
]);
