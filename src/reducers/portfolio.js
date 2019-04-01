import { NEW_STOCK_PRICE_ACTION } from '../actions';

const initialState = {
  byLabel: {
    MSFT: {
        label: 'MSFT',
        shares: 1011
    },
    TWTR: {
        label: 'TWTR',
        shares: 537
    },
  },
  allLabels: [
    'MSFT',
    'TWTR'
  ]
};

export const getPortfolioLabelsList = (state) => {
  return state.portfolio.allLabels;
};

export const getPortfolioStocksByLabelMap = (state) => {
  return state.portfolio.byLabel;
};

export const getPortfolioStockByLabel = (state, label) => {
  return getPortfolioStocksByLabelMap(state)[label];
};

const portfolioReducer = (state = initialState, action) => {
    let newState = state;

    if (action.type === NEW_STOCK_PRICE_ACTION) {

    }

    return newState;
};

export default portfolioReducer;
