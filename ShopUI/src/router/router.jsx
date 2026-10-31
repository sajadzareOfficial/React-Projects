import React from "react";
import Pages from "../pages/Home";
import { BrowserRouter, Router, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Page404 from "../pages/page404";

function Routers() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Page404 />} />
          {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        </BrowserRouter>
     
   
  );
}
export default Routers;
