import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/layout/Header/Header.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import ScrollToTop from "./utils/ScrollToTop/ScrolToTop.jsx";

// import "../src/index.css";

function App() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <ScrollToTop />
      <Header />
      <main>
        <Outlet /> {/* Aici se vor randa Home, About, Contact etc. */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
