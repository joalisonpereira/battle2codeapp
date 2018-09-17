import api from '../../config/api';
import { call,put } from 'redux-saga/effects';
import { Types } from '../actions';

export function* getWinners(){
	try{
		const response = yield call(api.get,'/winners/ranking');
		yield put({
	 		type: Types.REQUEST_WINNERS_SUCCESS,
	 		payload: {
	 			data: response.data
	 		}
		});
	}catch(e){
		yield put({
	 		type: Types.REQUEST_WINNERS_ERROR,
	 		payload: {
	 			message: 'Falha no carregamento'
	 		}
		});
	}
}
