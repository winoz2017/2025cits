import React from "react";
import LocalComp from "./components/LocalComp";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MenuComp from "./components/MenuComp";

function App() {
  return (
    <>
      <MenuComp />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<LocalComp />} />
      </Routes>
    </>
  );
}

export default App;
