import { Types } from '../actions';

const INITIAL_STATE = {
	players:{},
	battle_token:null,
	questions:[],
	loading : false,
	error : false
};

const battleReducer = (state = INITIAL_STATE,action) => {
	switch(action.type){
		case Types.BATTLE_START:
			return {...state, loading:true};
		case Types.BATTLE_START_SUCCESS:
			return {...action.payload.battle, loading:false};
		case Types.BATTLE_START_ERROR:
			return {...state, error:true, loading:false};
		case Types.ANSWER_QUESTION:
			return getStateAfterQuestion(state,action);
		case Types.STORE_WINNER_SUCCESS:
		case Types.STORE_WINNER_NULL:
			return {...state,winner:action.payload.winner};
		default:
			return state;
	}
}

function getStateAfterQuestion(state,action){
	const newState = {...state};
	const { playerId,answer } = action.payload;
	const player = newState.players['player' + playerId];
	const question = newState.questions.find(question => question.id == player.questionId);
	player.score = question.answer==answer ? player.score+10 : player.score;
	player.questionId++;
	return newState;
}

export default battleReducer;