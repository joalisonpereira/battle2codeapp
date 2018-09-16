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
	}catch(e){
		yield put({
			type: Types.BATTLE_START_ERROR
		});
	}
}

export function* storeWinner(action){
	try{
		const params = action.payload.winner;
		if(params.name==null){
			yield put({
				type: Types.STORE_WINNER_NULL,
				payload: {
					winner : {
						name : null,
						score : params.score
					}
				}
			});
		}else{
			const response = yield call(api.post,'/winners',params);
			yield put({
				type: Types.STORE_WINNER_SUCCESS,
				payload: {
					winner : params
				}
			});
		}
	}catch(e){
		yield put({
	 		type: Types.STORE_WINNER_ERROR,
	 		payload: {
	 			message: 'Loading error'
	 		}
		});
	}
}
