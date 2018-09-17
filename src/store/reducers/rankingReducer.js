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
		case Types.REQUEST_WINNERS_SUCCESS:
			return {data: action.payload.data, loading:false, error:false};
		case Types.REQUEST_WINNERS_ERROR:
			return {data:[], message:action.payload.message, loading:false, error:true};
		default:
			return state;
	}
}

export default rankingReducer;