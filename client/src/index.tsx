import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/index.sass";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
