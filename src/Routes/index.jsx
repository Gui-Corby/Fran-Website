import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import React from "react";
import { ContactPage } from "../pages/ContactPage";
import { MoviePage } from "../pages/MoviePage";
import { EquipmentPage } from "../pages/EquipmentPage";
import { OtherPage } from "../pages/OtherPage";

export const RoutesMain = () => {
  return (
    <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/EquipmentPage" element={<EquipmentPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/OtherPage" element={<OtherPage/>} />
      
    </Routes>
  );
};
