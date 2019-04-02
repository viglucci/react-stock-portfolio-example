import { UPDATE_ORDER_VALUE, NEW_ORDER } from '../../actions';

export function initOrder(order) {
  const value = (order.shares * order.boughtPrice).toFixed(4);
  const initialValue = Number(value);
  return {
    ...order,
    initialValue,
    currentValue: initialValue,
    profit: 0
  };
}

export const getPortfolioProfit = (state) => {
  return state.portfolio.profit;
};

export const getPortfolioValue = (state) => {
  return state.portfolio.value;
};

export const getPortfolioInitialValue = (state) => {
  return state.portfolio.initialValue;
};

export const getPortfolioOrderMap = (state) => {
  return state.portfolio.byId;
};

export const getPortfolioOrderIdsList = (state) => {
  return state.portfolio.orderIdsList;
};

export const getPortfolioOrdersListByLabel = (state, label) => {
  const orderIdsList = getPortfolioOrderIdsList(state);
  const orderByIdMap = getPortfolioOrderMap(state);
  const orders = orderIdsList.map((id) => {
    const order = orderByIdMap[id];
    return order.label === label ? order : null;
  });
  return orders.filter(Boolean);
};

export const getPortfolioOrderById = (state, id) => {
  return getPortfolioOrderMap(state)[id];
};

export const getPortfolioStockByLabel = (state, label) => {
  const orders = getPortfolioOrdersListByLabel(state);
  return orders[label];
};

const calculatePortfolioAggregates = (ordersById) => {
  let profit = 0;
  let value = 0;
  Object.keys(ordersById).forEach((id) => {
    const order = ordersById[id];
    profit += order.profit;
    value += order.currentValue;
  });
  return {
    profit,
    value
  };
};

const handleUpdateOrderValue = (state, action) => {
  const { id, currentValue, profit } = action.payload;
  const order = state.byId[id];
  const newState = {
    ...state,
    byId: {
      ...state.byId,
      [id]: {
        ...order,
        currentValue,
        profit
      }
    }
  };

  const {
    profit: portfolioProfit,
    value: portfolioValue
  } = calculatePortfolioAggregates(newState.byId);

  return {
    ...newState,
    profit: portfolioProfit,
    value: portfolioValue
  };
};

const handleNewOrder = (state, action) => {
  const orderId = state.orderIdsList.length + 1;
  const orderIdsList = [...state.orderIdsList, orderId];
  const { price, stock, volume } = action.payload;

  const newState = {
    ...state,
    byId: {
      ...state.byId,
      [orderId]: initOrder({
        id: orderId,
        label: stock.label,
        shares: volume,
        boughtPrice: price
      })
    },
    orderIdsList
  };

  return newState;
};

const portfolioReducer = (state = {
  byId: {},
  orderIdsList: [],
  initialValue: 0,
  profit: 0,
  value: 0
}, action) => {
  const { type: actionType } = action;

  if (actionType === UPDATE_ORDER_VALUE) {
    return handleUpdateOrderValue(state, action);
  } else if (actionType === NEW_ORDER) {
    return handleNewOrder(state, action);
  }

  return state;
};

export default portfolioReducer;
