//When needed for compiler and node module errors
// such as LOG from ./node_modules/sass-loader/dist/cjs.js sass-loader ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[7].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[7].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[7].use[4]!./src/assets/scss/project-hr.scss 
//npm rebuild node-sass

import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from "./views/Index.js";
import AboutPage from './views/Pages/AboutPage.js';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom"; // Import HashRouter
import "./assets/scss/project-hr.scss"
import "./assets/css/nucleo-icons.css";
import "./assets/demo/demo.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </HashRouter>
);
