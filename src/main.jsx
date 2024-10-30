import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Constants/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClint = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClint}>
      <RouterProvider router={router} />
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  </StrictMode>
);
