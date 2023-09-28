






import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from "./landing/views/Index";
import AboutPage from './landing/views/Pages/AboutPage.js';
import DashIndex from './dashboard/dashIndex';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom"; // Import HashRouter
import "./assets/scss/project-hr.scss";
import "./assets/css/nucleo-icons.css";
import "./assets/demo/demo.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/dashboard" element={<DashIndex />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </HashRouter>
);
