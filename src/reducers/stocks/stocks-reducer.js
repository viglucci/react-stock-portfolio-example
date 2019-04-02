import { UPDATE_STOCK_PRICE, STOCK_PRICE_FLUCTUATION } from '../../actions';

const initialState = {
  byLabel: {
    MSFT: { volume: 0, price: 117.94 },
    AAPL: { volume: 0, price: 189.95 },
    INTC: { volume: 0, price: 53.70 },
    GOOG: { volume: 0, price: 1173.31 },
    FACE: { volume: 0, price: 166.69 },
    LYFT: { volume: 0, price: 78.29 },
    SIRI: { volume: 0, price: 5.67 },
    AMZN: { volume: 0, price: 1780.75 },
    TWTR: { volume: 0, price: 32.88 }
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

const handleStockPriceFluctuation = (state, action) => {
  const { label } = action.payload;
  const stock = state.byLabel[label];
  return {
    ...state,
    byLabel: {
      ...state.byLabel,
      [label]: {
        ...stock,
        volume: stock.volume + 1,
      }
    }
  };
};

const handleUpdateStockPrice = (state, action) => {
  const { label, price } = action.payload;
  const stock = state.byLabel[label];
  return {
    ...state,
    byLabel: {
      ...state.byLabel,
      [label]: {
        ...stock,
        price,
      }
    }
  };
};

const stocksReducer = (state = initialState, action) => {
  const { type: actionType } = action;

  if (actionType === STOCK_PRICE_FLUCTUATION) {
    return handleStockPriceFluctuation(state, action);
  } else if (actionType === UPDATE_STOCK_PRICE) {
    return handleUpdateStockPrice(state, action);
  }

  return state;
};

export default stocksReducer;
