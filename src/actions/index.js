export const STOCK_PRICE_FLUCTUATION = 'STOCK_PRICE_FLUCTUATION';
export const UPDATE_STOCK_PRICE = 'UPDATE_STOCK_PRICE';
export const UPDATE_ORDER_VALUE = 'UPDATE_ORDER_VALUE';
export const BUY_STOCK_BY_LABEL = 'BUY_STOCK_BY_LABEL';
export const NEW_ORDER = 'NEW_ORDER';

export const newStockPriceFluctuation = ({ label, priceChange }) => {
  return {
    type: STOCK_PRICE_FLUCTUATION,
    payload: {
      label,
      priceChange: Number(priceChange)
    }
  };
};

export const newStockPriceChange = ({ label, price }) => {
  return {
    type: UPDATE_STOCK_PRICE,
    payload: {
      label,
      price
    }
  };
};

export const newOrderValuechange = ({ id, shares, newPrice, initialValue }) => {
  const newValue = Number((shares * newPrice).toFixed(4));
  const profit = Number((newValue - initialValue).toFixed(4));
  return {
    type: UPDATE_ORDER_VALUE,
    payload: {
      id,
      profit,
      currentValue: newValue
    }
  };
};

export const buyStockByLabel = (label, volume) => {
  return {
    type: BUY_STOCK_BY_LABEL,
    payload: {
      label,
      volume
    }
  };
};

export const newOrder = ({
  stock,
  volume,
  price
}) => {
  return {
    type: NEW_ORDER,
    payload: {
      stock,
      volume,
      price
    }
  };
};
