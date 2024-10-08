import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const placeCount = 100;

root.render(
  <React.StrictMode>
    <App placeCount={placeCount}/>
  </React.StrictMode>
);
