import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { CryptoContextProvider } from './Contexts/CryptoContext';
import 'react-alice-carousel/lib/alice-carousel.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CryptoContextProvider>
    <Router>
      <App />
    </Router>
  </CryptoContextProvider>

);


