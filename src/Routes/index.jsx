import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import React from "react";
import { Contact } from "../pages/ContactPage";
import { MoviePage } from "../pages/MoviePage";
import { EquipmentPage } from "../pages/EquipmentPage";
import { Other } from "../pages/OtherPage";

export const RoutesMain = () => {
  return (
    <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Equipment" element={<EquipmentPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/Other" element={<Other/>} />
      
    </Routes>
  );
};
