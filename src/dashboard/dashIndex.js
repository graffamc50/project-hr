





import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import AdminLayout from "./layouts/Admin";
import RTLLayout from "./layouts/RTL";

import "../assets/scss/dashboard.scss";
//import "../assets/demo.css";
import "../assets/css/nucleo-icons.css";
//import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper";

function DashIndex() {
  return (
    <ThemeContextWrapper>
      <BackgroundColorWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="/rtl/*" element={<RTLLayout />} />
            <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
          </Routes>
        </BrowserRouter>
      </BackgroundColorWrapper>
    </ThemeContextWrapper>
  );
}

export default DashIndex;
