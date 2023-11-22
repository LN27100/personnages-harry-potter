import App from './App.jsx';
import './index.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// Utilisez createRoot depuis react-dom/client
const root = createRoot(document.getElementById('root'));

// Rendez votre application
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);