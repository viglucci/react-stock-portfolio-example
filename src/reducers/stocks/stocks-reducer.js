import { UPDATE_STOCK_PRICE, STOCK_PRICE_FLUCTUATION } from '../../actions';

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
        volume: stock.volume + 1
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
        price
      }
    }
  };
};

const stocksReducer = (state = {
  byLabel: {},
  allLabels: []
}, action) => {
  const { type: actionType } = action;

  if (actionType === STOCK_PRICE_FLUCTUATION) {
    return handleStockPriceFluctuation(state, action);
  } else if (actionType === UPDATE_STOCK_PRICE) {
    return handleUpdateStockPrice(state, action);
  }

  return state;
};

export default stocksReducer;
