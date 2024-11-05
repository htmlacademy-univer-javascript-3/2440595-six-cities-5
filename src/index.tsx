import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app.tsx';
import { offers } from './mocks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const placeCount = 64;

root.render(
  <React.StrictMode>
    <App placeCount={placeCount} offers={offers} favorites={offers}/>
  </React.StrictMode>
);
