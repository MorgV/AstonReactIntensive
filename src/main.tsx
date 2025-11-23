import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./shared/lib/theme/ThemeProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/providers/router/routes";
import { Provider } from "react-redux";
import { setupStore } from "./app/providers/store/store";

const store = setupStore();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
