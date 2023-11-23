import React, { useEffect, useReducer } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import SobreMi from "./pages/SobreMi";
import Home from "./pages/Home";
function App() {
  
  return (
    <>
      <NavBar></NavBar>
      <Routes >
        <Route path="/" element={<Home/>}></Route>
        <Route path="/experience" element={<Experience/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/sobre-mi" element={<SobreMi/>}></Route>
      </Routes>
    </>
  );
}

export default App;