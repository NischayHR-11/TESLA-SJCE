import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // optional CSS file for global styles
import App from './App';  // Import your App component

// Get the root element where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
