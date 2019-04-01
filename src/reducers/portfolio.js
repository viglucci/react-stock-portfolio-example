import { NEW_STOCK_PRICE_ACTION } from '../actions';

const initialState = {
  ordersById: {
    '1': {
      label: 'MSFT',
      shares: 1011,
      boughtPrice: 117.94
    },
    '2': {
      label: 'MSFT',
      shares: 456,
      boughtPrice: 91.64
    },
    '3': {
      label: 'TWTR',
      shares: 200,
      boughtPrice: 32.88
    },
    '4': {
      label: 'TWTR',
      shares: 37,
      boughtPrice: 17.84
    }
  },
  allOrders: ['1', '2', '3', '4']
};

export const getPortfolioOrdersList = (state) => {
  return state.portfolio.allOrders;
};

export const getPortfolioOrdersListByLabel = (state) => {
  return state.portfolio.ordersById;
};

export const getPortfolioStockByLabel = (state, label) => {
  return getPortfolioOrdersListByLabel(state)[label];
};

const portfolioReducer = (state = initialState, action) => {
  let newState = state;

  if (action.type === NEW_STOCK_PRICE_ACTION) {
  }

  return newState;
};

export default portfolioReducer;
