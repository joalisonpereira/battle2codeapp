import { 
	REQUEST_WINNERS, 
	SUCCESS_REQUEST_WINNERS, 
	ERROR_REQUEST_WINNERS 
} from '../actions';

const INITIAL_STATE = {
	data : [],
	loading : true,
	error : false
}

const winnerReducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case REQUEST_WINNERS:
			return {...state, loading:true};
		case SUCCESS_REQUEST_WINNERS:
			return {data: action.payload.data,loading:false,error:false};
		case ERROR_REQUEST_WINNERS:
			return {data:[], loading:false, error:true};
		default:
			return state;
	}
}

export default winnerReducer;