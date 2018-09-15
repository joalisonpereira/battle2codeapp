import { all,takeLatest } from 'redux-saga/effects';
import { getWinners } from './rankingSaga';
import { battleStart,storeWinner } from './battleSaga';
import { Types } from '../actions';

export default function* rootSaga(){
	yield all([
		takeLatest(Types.REQUEST_WINNERS,getWinners),
		takeLatest(Types.BATTLE_START,battleStart),
		takeLatest(Types.STORE_WINNER,storeWinner),
	]);
}
