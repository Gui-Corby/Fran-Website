import { Route, Routes} from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import React from "react";
import { ContactPage } from "../pages/ContactPage";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ContactPage" element ={<ContactPage />} />
        </Routes>
    )
}