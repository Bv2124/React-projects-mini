import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store/store';

const container = document.getElementById('root');
// Create a root.
const root = ReactDOMClient.createRoot(container);


root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);
