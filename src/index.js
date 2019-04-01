import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { newStockPriceChange } from './actions';
import { getLabelsList } from './reducers/stocks';
import Chance from 'chance';
const chance = new Chance(Math.random);

const store = configureStore();

const updateInterval = 10;

setInterval(() => {
  const state = store.getState();
  const labels = getLabelsList(state);
  const randomLabel = labels[Math.floor(Math.random() * labels.length)];
  store.dispatch(
    newStockPriceChange({
      label: randomLabel,
      priceChange: chance.floating({ min: -1.00, max: 1.00 })
    })
  );
}, updateInterval);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
