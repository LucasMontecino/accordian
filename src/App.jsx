import { useEffect, useState } from "react";

import searchLogo from "./assets/seo.png";
import "./App.css";
import Accordian from "./components/accordian/Accordian";

function App() {
  useEffect(() => {
    document.title = "Accordian 🤟";
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = searchLogo;
  });
  return (
    <>
      <Accordian />
    </>
  );
}

export default App;
