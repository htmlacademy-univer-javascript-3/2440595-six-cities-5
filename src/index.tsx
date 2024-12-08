import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app.tsx';
import { store } from './store';
import { Provider } from 'react-redux';
import {reviews} from './mocks/reviews.ts';
import {getOffers} from './store/api-actions.ts';
import {ErrorMessage} from './components/error-message.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(getOffers());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App reviews={reviews} />
    </Provider>
  </React.StrictMode>
);
