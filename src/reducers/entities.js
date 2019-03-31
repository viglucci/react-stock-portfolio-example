import merge from 'lodash/merge';
import { NEW_STOCK_SALE } from '../actions';

const initialState = {
  stocks: {
    byLabel: {
      MSFT: { sales: 0, latestPrice: 0 },
      AAPL: { sales: 0, latestPrice: 0 },
      INTC: { sales: 0, latestPrice: 0 },
      GOOG: { sales: 0, latestPrice: 0 },
      FACE: { sales: 0, latestPrice: 0 },
      LYFT: { sales: 0, latestPrice: 0 },
      SIRI: { sales: 0, latestPrice: 0 },
      AMZN: { sales: 0, latestPrice: 0 },
      TWTR: { sales: 0, latestPrice: 0 }
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
  }
};

const entities = (state = initialState, action) => {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities);
  }

  let newState = state;

  if (action.type === NEW_STOCK_SALE) {
    const { label, price } = action.payload;
    const stock = state.stocks.byLabel[label];
    newState = {
      ...state,
      stocks: {
        ...state.stocks,
        byLabel: {
          ...state.stocks.byLabel,
          [label]: {
            sales: stock.sales + 1,
            latestPrice: price
          }
        }
      }
    };
  }

  return newState;
};

export default entities;
