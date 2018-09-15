import { combineReducers } from 'redux';

import winnerReducer from './winnerReducer';

const rootReducer = combineReducers({
	winners : winnerReducer
});

export default rootReducer;