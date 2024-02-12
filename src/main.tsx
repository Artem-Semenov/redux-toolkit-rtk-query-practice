import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const root = document.getElementById("root");
if (!root) throw new Error("root is not defined");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
