import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Home from "./pages/Home/Home";
import GlobalStyle from "./utils/style/GlobalStyle";
import Header from "./components/header/Header";
import Image from "./components/image/Image";
import background from "./assets/bg.png";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Image url={background as string} alt="planet" size="image-bg" />
    <GlobalStyle />
    <Header />
    <Home />
  </React.StrictMode>
);
