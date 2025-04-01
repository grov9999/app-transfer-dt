import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { transferStore } from "./store/TransferenciaRedux";
import { Provider } from "react-redux";
import App from "./App";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={transferStore}>
      <App />
      <Toaster />
    </Provider>
  </>
);
