import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

function Index() {
  return (
    <div className="text-center">
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
