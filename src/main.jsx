import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { Elements } from "@stripe/react-stripe-js";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
  import { stripePromise } from "./utils/stripe/stripe.utils.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Elements stripe={stripePromise}>
              <App />
           </Elements>
          </PersistGate>
    </Provider>
  </React.StrictMode>
);
