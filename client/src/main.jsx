// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";
import "antd/dist/antd.min.js";
import "antd/dist/antd.js";
import "antd/dist/reset.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
