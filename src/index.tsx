import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Home from "./pages/Home/Home";
import GlobalStyle from "./utils/style/GlobalStyle";
import Header from "./components/header/Header";
import logo from "./assets/logo.png";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header logo={logo} />
    <Home />
  </React.StrictMode>
);
