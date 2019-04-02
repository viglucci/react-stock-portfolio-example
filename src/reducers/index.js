import { combineReducers } from 'redux';
import stocksReducer from './stocks/stocks-reducer';
import portfolioReducer from './portfolio/portfolio-reducer';

const rootReducer = combineReducers({
  stocks: stocksReducer,
  portfolio: portfolioReducer
});

export default rootReducer;
