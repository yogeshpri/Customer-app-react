import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import './App.css';
import App from './App';

// Create a root element and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
