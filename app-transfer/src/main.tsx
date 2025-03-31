import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { transferStore } from "./store/TransferenciaRedux";
import { Provider } from "react-redux";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={transferStore}>
      <App />
    </Provider>
  </StrictMode>
);
