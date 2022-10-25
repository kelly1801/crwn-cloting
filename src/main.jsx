import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { UserProvider } from "./context/user.context";

import { CartProvider } from "./context/cart.context";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <App />
      </CartProvider>
    </Provider>
  </React.StrictMode>
);
