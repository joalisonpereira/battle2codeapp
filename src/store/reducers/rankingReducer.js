import { Types } from '../actions';

const INITIAL_STATE = {
	data : [],
	loading : true,
	error : false
}

const rankingReducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case Types.REQUEST_WINNERS:
			return {...state, loading:true};
		case Types.SUCCESS_REQUEST_WINNERS:
			return {data: action.payload.data,loading:false,error:false};
		case Types.ERROR_REQUEST_WINNERS:
			return {data:[], loading:false, error:true};
		default:
			return state;
	}
}

export default rankingReducer;