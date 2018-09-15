import { combineReducers } from 'redux';

import battleReducer from './battleReducer';
import rankingReducer from './rankingReducer';

const rootReducer = combineReducers({
	battle : battleReducer,
	winners : rankingReducer
});

export default rootReducer;