import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Primeira from './pages/Primeira';
import Segunda from './pages/Segunda';
import Terceira from './pages/Terceira';
import Quarta from './pages/Quarta';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Primeira />} />
        <Route path="/Segunda" element={<Segunda />} />
        <Route path="/Terceira" element={<Terceira />} />
        <Route path="/Quarta" element={<Quarta />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
