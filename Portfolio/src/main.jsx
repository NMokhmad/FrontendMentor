import './assets/styles/typography.scss';
import './index.css';
import App from './components/App/App.jsx';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);