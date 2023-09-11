


import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from "./views/Index.js";
import AboutPage from './views/Pages/AboutPage.js';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./assets/scss/project-hr.scss"
import "./assets/css/nucleo-icons.css";
import "./assets/demo/demo.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/components" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<Navigate to="/components" replace />} />
    </Routes>
  </BrowserRouter>
  
);


