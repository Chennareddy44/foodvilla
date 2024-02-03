import React from "react";
import ReactDOM from "react-dom/client";

const hello = React.createElement(
  "h1",
  {
    id: "hello",
  },
  "Hello world from parcel :)"
);

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(hello);
