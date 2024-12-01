import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  WordStoreProvider } from './WordStoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WordStoreProvider> 
      <App />
    </WordStoreProvider>
  </React.StrictMode>
);

reportWebVitals();
