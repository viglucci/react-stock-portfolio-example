import merge from 'lodash/merge';
import { NEW_STOCK_SALE_ACTION } from '../actions';

const initialState = {
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
};

export const getLabelsList = (state) => {
  return state.stocks.allLabels;
};

export const getStocksByLabelMap = (state) => {
  return state.stocks.byLabel;
};

export const getStockByLabel = (state, label) => {
  return getStocksByLabelMap(state)[label];
};

const stocksReducer = (state = initialState, action) => {
  if (action.payload && action.payload.stocks) {
    return merge({}, state, action.payload.stocks);
  }

  let newState = state;

  if (action.type === NEW_STOCK_SALE_ACTION) {
    const { label, price } = action.payload;
    const stock = state.byLabel[label];
    newState = {
      ...state,
      byLabel: {
        ...state.byLabel,
        [label]: {
          sales: stock.sales + 1,
          latestPrice: price
        }
      }
    };
  }

  return newState;
};

export default stocksReducer;
