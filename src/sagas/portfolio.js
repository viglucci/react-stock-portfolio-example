import { select, put, takeEvery } from 'redux-saga/effects';
import { BUY_STOCK_BY_LABEL, newOrder } from '../actions';
// import { getPortfolioOrdersListByLabel } from '../reducers/portfolio/portfolio-reducer';
import { getStockByLabel } from '../reducers/stocks/stocks-reducer';

function* handleBuyStockByLabel(action) {
  const state = yield select();
  const { label: stockLabel, volume } = action.payload;
  const stock = getStockByLabel(state, stockLabel);
  yield put(
    newOrder({
      stock,
      volume,
      price: stock.price
    })
  );
}

function* portfolioSaga() {
  yield takeEvery(BUY_STOCK_BY_LABEL, handleBuyStockByLabel);
}

export default portfolioSaga;
