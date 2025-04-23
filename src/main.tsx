import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App.tsx';

// Handle redirect from 404 page
const urlParams = new URLSearchParams(window.location.search);
const redirectPath = urlParams.get('redirect');
if (redirectPath) {
  history.replaceState(null, '', redirectPath);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
