import React from "react";
import ReactDOM from "react-dom/client";
import Pizza from "./pizza/Pizza";
import Author from "./author/Author";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Pizza />
    <Author />
  </React.StrictMode>
);
