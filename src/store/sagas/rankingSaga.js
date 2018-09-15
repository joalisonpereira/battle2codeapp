import api from '../../config/api';
import { call,put } from 'redux-saga/effects';
import { Types } from '../actions';

export function* getWinners(){
	const response = yield call(api.get,'/winners/ranking');
	try{
		yield put({
	 		type: Types.SUCCESS_REQUEST_WINNERS,
	 		payload: {
	 			data: response.data
	 		}
		});
	}catch(e){
		yield put({
	 		type: Types.ERROR_REQUEST_WINNERS,
	 		payload: {
	 			message: 'Loading error'
	 		}
		});
	}
}
