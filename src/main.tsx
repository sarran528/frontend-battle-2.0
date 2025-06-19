import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ScrollProvider from './context/ScrollContext';
import { ThemeProvider } from './context/ThemeContext';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </ThemeProvider>
  </React.StrictMode>
);