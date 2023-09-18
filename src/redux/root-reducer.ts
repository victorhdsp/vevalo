import { combineReducers } from 'redux';

import companyReducer from './company/slice';
import calculeReducer from './calcule/slice';
import historyReducer from './history/slice';
import managerReducer from './manager/slice';

export const rootReducer = combineReducers({
    companyReducer,
    calculeReducer,
    historyReducer,
    managerReducer
});