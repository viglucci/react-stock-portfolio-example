import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import stockSaga from '../sagas/stocks';
import portfolioSaga from '../sagas/portfolio';
import { initOrder } from '../reducers/portfolio/portfolio-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const portfolioState = {
  byId: {
    '1': initOrder({
      id: 1,
      label: 'MSFT',
      shares: 1011,
      boughtPrice: 117.94
    }),
    '2': initOrder({
      id: 2,
      label: 'MSFT',
      shares: 456,
      boughtPrice: 91.64
    }),
    '3': initOrder({
      id: 3,
      label: 'TWTR',
      shares: 200,
      boughtPrice: 32.88
    }),
    '4': initOrder({
      id: 4,
      label: 'TWTR',
      shares: 37,
      boughtPrice: 17.84
    })
  },
  orderIdsList: [1, 2, 3, 4],
  initialValue: 0,
  profit: 0,
  value: 0
};

const stocksState = {
  byLabel: {
    MSFT: { label: 'MSFT', volume: 0, price: 117.94 },
    AAPL: { label: 'AAPL', volume: 0, price: 189.95 },
    INTC: { label: 'INTC', volume: 0, price: 53.7 },
    GOOG: { label: 'GOOG', volume: 0, price: 1173.31 },
    FACE: { label: 'FACE', volume: 0, price: 166.69 },
    LYFT: { label: 'LYFT', volume: 0, price: 78.29 },
    SIRI: { label: 'SIRI', volume: 0, price: 5.67 },
    AMZN: { label: 'AMZN', volume: 0, price: 1780.75 },
    TWTR: { label: 'TWTR', volume: 0, price: 32.88 }
  },
  allLabels: [
    'MSFT',
    'AAPL',
    'INTC',
    'GOOG',
    'FACE',
    'LYFT',
    'SIRI',
    'AMZN',
    'TWTR'
  ]
};

const configureStore = (preloadedState = {}) => {
  const initialState = {
    ...preloadedState,
    portfolio: portfolioState,
    stocks: stocksState
  };

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        sagaMiddleware,
        createLogger()
      )
    )
  );

  sagaMiddleware.run(portfolioSaga);
  sagaMiddleware.run(stockSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
