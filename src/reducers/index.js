import { combineReducers } from 'redux';
import stocksReducer from './stocks';
import portfolioReducer from './portfolio';

const rootReducer = combineReducers({
  stocks: stocksReducer,
  portfolio: portfolioReducer
});

export default rootReducer;
