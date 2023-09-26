

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Index from './views/Index';
import AboutPage from './views/Pages/AboutPage';
import './assets/scss/project-hr.scss';
import './assets/css/nucleo-icons.css';
import './assets/demo/demo.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/components" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<Navigate to="https://graffamc50.github.io/project-hr/" replace />} />
    </Routes>
  </BrowserRouter>
);

