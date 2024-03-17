import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// cart provider
import CardProvider from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </React.StrictMode>
);
