import { combineReducers } from 'redux';

import navReducer from './navReducer';
import battleReducer from './battleReducer';
import rankingReducer from './rankingReducer';

const rootReducer = combineReducers({
	battle : battleReducer,
	winners : rankingReducer,
	nav : navReducer,
});

export default rootReducer;