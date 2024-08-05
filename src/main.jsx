import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker
const updateSW = registerSW({
  onNeedRefresh() {
    // Optional: Show a "refresh" button or prompt the user
  },
  onOfflineReady() {
    // Optional: Notify the user that the app is ready offline
  },
});
