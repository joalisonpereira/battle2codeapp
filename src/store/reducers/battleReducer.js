import { Types } from '../actions';

const INITIAL_STATE = {
	players:{},
	battle_token:null,
	questions:[],
	loading : false,
	error : false,
};

const battleReducer = (state = INITIAL_STATE,action) => {
	switch(action.type){
		case Types.BATTLE_START:
			return {...state, loading:true};
		case Types.BATTLE_START_SUCCESS:
			return {...action.payload.battle, loading:false};
		case Types.BATTLE_START_ERROR:
			return {...state, error:true, loading:false};
		default:
			return state;
	}
}

export default battleReducer;