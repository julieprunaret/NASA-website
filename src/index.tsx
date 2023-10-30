import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Home from "./pages/Home/Home";
import GlobalStyle from "./utils/style/GlobalStyle";
import Header from "./components/header/Header";
import Image from "./components/image/Image";
import background from "./assets/bg.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageOfTheDay from "./pages/ImageOfTheDay/ImageOfTheDay";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Image url={background as string} alt="planet" size="image-bg -opacity" />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-of-the-day" element={<ImageOfTheDay />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
