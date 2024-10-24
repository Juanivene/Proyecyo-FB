import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Constants/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClint = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClint}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
