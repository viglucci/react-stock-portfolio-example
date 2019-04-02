import { select, put, takeEvery, all } from 'redux-saga/effects';
import {
  STOCK_PRICE_FLUCTUATION,
  UPDATE_STOCK_PRICE,
  newStockPriceChange,
  newOrderValuechange
} from '../actions';
import { getPortfolioOrdersListByLabel } from '../reducers/portfolio/portfolio-reducer';
import { getStockByLabel } from '../reducers/stocks/stocks-reducer';

function* handleStockPriceFluctuation(action) {
  const state = yield select();
  const { label: stockLabel, priceChange } = action.payload;
  const stock = getStockByLabel(state, stockLabel);
  const { price: currentPrice } = stock;
  const newPrice = Number(currentPrice) + Number(priceChange);
  yield put(
    newStockPriceChange({
      label: stockLabel,
      price: Number(newPrice.toFixed(4))
    })
  );
}

function* handleNewStockPrice(action) {
  const state = yield select();
  const { label: actionLabel, price } = action.payload;
  const orders = getPortfolioOrdersListByLabel(state, actionLabel);
  const actions = orders.map(function (order) {
    return newOrderValuechange({
      id: order.id,
      shares: order.shares,
      newPrice: price,
      initialValue: order.initialValue
    });
  });
  yield all(actions.map(ac => put(ac)))
}

function* stocksSaga() {
  yield takeEvery(STOCK_PRICE_FLUCTUATION, handleStockPriceFluctuation);
  yield takeEvery(UPDATE_STOCK_PRICE, handleNewStockPrice);
}

export default stocksSaga;
