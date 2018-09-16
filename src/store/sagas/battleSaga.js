import { put,call } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import api from '../../config/api';
import { Types } from '../actions';

export function* battleStart(action){
	try{
		const { players } = action.payload;
		const response = yield call(api.post,'/battles',{
			player1 : players.player1.name,
			player2 : players.player2.name
		});
		yield put({
			type: Types.BATTLE_START_SUCCESS,
			payload:{
				battle:{
					...action.payload,
					...response.data
				}
			}
		});
		console.log(NavigationActions.navigate({ routeName:'Battle' }));
		yield put(NavigationActions.navigate({ routeName:'Battle' }));
	}catch(e){
		yield put({
			type: Types.BATTLE_START_ERROR
		});
	}
}

export function* storeWinner(action){
	try{
		const headers = action.payload.winner;
		const response = yield call(api.post,'/winners',headers);
		yield put({message : 'success'});
	}catch(e){
		yield put({
	 		type: Types.ERROR_REQUEST_WINNERS,
	 		payload: {
	 			message: 'Loading error'
	 		}
		});
	}
}