import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

import { Auth0Provider } from "@auth0/auth0-react";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Auth0Provider
    domain={process.env.APP_AUTH0_DOMAIN}
    clientId={process.env.APP_CLIENT_ID}
    redirectUri={window.location.origin}
  >

    <Provider store={store}>
      <App />
    </Provider>,

  </Auth0Provider>,
  document.getElementById('root'),
);