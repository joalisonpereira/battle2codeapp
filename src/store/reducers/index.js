import { combineReducers } from 'redux';

import navReducer from './navReducer';
import battleReducer from './battleReducer';
import rankingReducer from './rankingReducer';

const rootReducer = combineReducers({
	nav : navReducer,
	battle : battleReducer,
	winners : rankingReducer
});

export default rootReducer;