import { createBrowserRouter } from "react-router-dom";
import RootView from "../Views/Routing/RootView";
import HomeView from "../Views/HomeView";
import FlightView from "../Views/FlightView";

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
        path: "/config/:id",
        element: <HomeView />,
      },
      {
        path: "/flight",
        element: <FlightView />,
      },
      {
        path: "/pay",
        element: <HomeView />,
      },
      {
        path: "confirmation",
        element: <HomeView />,
      },
    ],
  },
]);
