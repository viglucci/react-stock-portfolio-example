import merge from 'lodash/merge';
import { NEW_STOCK_PRICE_ACTION } from '../actions';

const initialState = {
  byLabel: {
    MSFT: { sales: 0, price: 117.94 },
    AAPL: { sales: 0, price: 189.95 },
    INTC: { sales: 0, price: 53.70 },
    GOOG: { sales: 0, price: 1173.31 },
    FACE: { sales: 0, price: 166.69 },
    LYFT: { sales: 0, price: 78.29 },
    SIRI: { sales: 0, price: 5.67 },
    AMZN: { sales: 0, price: 1780.75 },
    TWTR: { sales: 0, price: 32.88 }
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

  if (action.type === NEW_STOCK_PRICE_ACTION) {
    const { label, priceChange } = action.payload;
    const stock = state.byLabel[label];
    const newPrice = Number(stock.price) + Number(priceChange);
    try {
      newState = {
        ...state,
        byLabel: {
          ...state.byLabel,
          [label]: {
            sales: stock.sales + 1,
            price: newPrice.toFixed(2)
          }
        }
      };
    } catch (e) {
      debugger;
    }
  }

  return newState;
};

export default stocksReducer;
