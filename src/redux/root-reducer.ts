import { combineReducers } from 'redux';

import calculeReducer from './calcule/slice';
import historyReducer from './history/slice';

export const rootReducer = combineReducers({
    calculeReducer,
    historyReducer
});