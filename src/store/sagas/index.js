import { all,takeLatest,call,put } from 'redux-saga/effects';
import api from '../../config/api';

import { 
	REQUEST_WINNERS,
	SUCCESS_REQUEST_WINNERS, 
	ERROR_REQUEST_WINNERS 
} from '../actions';


function* asyncGetWinners(){
	const response = yield call(api.get,'/winners/ranking');
	try{
		yield put({
	 		type: SUCCESS_REQUEST_WINNERS,
	 		payload: {
	 			data: response.data
	 		}
		});
	}catch(e){
		yield put({
	 		type: ERROR_REQUEST_WINNERS,
	 		payload: {
	 			message: 'Error'
	 		}
		});
	}
}

export default function* rootSaga(){
	yield all([
		takeLatest(REQUEST_WINNERS,asyncGetWinners),
	]);
}
