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
		case Types.STORE_WINNER_ERROR:
			return {...state, error:true, message:action.payload.message, loading:false};
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
	const player = newState.players[`player${playerId}`];
	const question = newState.questions[player.questionId];
	question.answer==answer ? player.score+=10 : player.score-=10;
	player.questionId++;
	return newState;
}


export default battleReducer;