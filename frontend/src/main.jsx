import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack'; // Corrected import

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider> {/* Corrected component name */}
      <App />
    </SnackbarProvider> {/* Corrected component name */}
  </BrowserRouter>
);
