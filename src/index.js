import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 1. Get the root element from the DOM using its ID: rootElement = document.getElementById('root')
// 2. Create a root using ReactDOM: root = ReactDOM.createRoot(rootElement)
// 3. Render the application inside the root using React's StrictMode

